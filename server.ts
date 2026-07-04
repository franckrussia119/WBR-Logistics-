import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Helper function to send Telegram notifications
async function sendTelegramMessage(text: string) {
  const token = process.env.TELEGRAM_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.log('Telegram credentials not configured. Message content:', text);
    return false;
  }

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML'
      })
    });
    const result = await response.json();
    return result.ok;
  } catch (error) {
    console.error('Failed to send Telegram message:', error);
    return false;
  }
}

// API: Health Check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API: Submit Contact Form
app.post('/api/contact', async (req: Request, res: Response) => {
  const { name, company, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required fields.' });
  }

  const telegramText = `🚚 <b>NEW CONTACT - WBR Trans Logistics</b>\n\n` +
    `<b>Name:</b> ${name}\n` +
    `<b>Company:</b> ${company || 'N/A'}\n` +
    `<b>Email:</b> ${email}\n` +
    `<b>Phone:</b> ${phone || 'N/A'}\n` +
    `<b>Subject:</b> ${subject || 'General inquiry'}\n\n` +
    `<b>Message:</b>\n${message}`;

  const sent = await sendTelegramMessage(telegramText);

  res.json({
    success: true,
    message: 'Contact message received successfully.',
    telegramSent: sent
  });
});

// API: Submit Quote Form
app.post('/api/quote', async (req: Request, res: Response) => {
  const data = req.body;
  const quoteId = `WBR-Q-${Math.floor(100000 + Math.random() * 900000)}`;

  const telegramText = `📦 <b>NEW QUOTE REQUEST #${quoteId}</b>\n\n` +
    `<b>Cargo:</b> ${data.cargoType || 'General'} via ${data.transportMode || 'Road'}\n` +
    `<b>Weight:</b> ${data.weight || 0}kg | <b>Volume:</b> ${data.volume || 0}CBM\n` +
    `<b>Route:</b> ${data.originCity || 'Unknown'}, ${data.originCountry || 'Unknown'} → ${data.destinationCity || 'Unknown'}, ${data.destinationCountry || 'Unknown'}\n` +
    `<b>Ready:</b> ${data.readyDate || 'N/A'} | <b>Deadline:</b> ${data.deadline || 'N/A'}\n\n` +
    `<b>Company:</b> ${data.company || 'N/A'} | <b>Contact:</b> ${data.contactName || 'N/A'}\n` +
    `<b>Email:</b> ${data.email || 'N/A'} | <b>Phone:</b> ${data.phone || 'N/A'}\n` +
    `<b>Industry:</b> ${data.industry || 'N/A'}`;

  const sent = await sendTelegramMessage(telegramText);

  res.json({
    success: true,
    quoteId,
    message: 'Your quote request was successfully submitted.',
    telegramSent: sent
  });
});

// API: Track Shipment
app.get('/api/track/:trackingNumber', (req: Request, res: Response) => {
  const trackingNumber = req.params.trackingNumber.trim().toUpperCase();

  if (!trackingNumber.startsWith('WBR-')) {
    return res.status(400).json({ error: 'Invalid tracking number format. Must start with WBR-' });
  }

  // Predefined tracking data
  if (trackingNumber === 'WBR-2025-00001') {
    return res.json({
      trackingNumber,
      cargoType: 'Cold Chain Pharmaceuticals',
      origin: 'Cairo, Egypt',
      destination: 'Lagos, Nigeria',
      mode: 'Air',
      status: 'In Transit',
      currentLocation: 'Lagos Port Clearing Hub',
      weight: 4500,
      volume: 18.5,
      estimatedDelivery: '2026-07-06',
      steps: [
        { status: 'Picked Up', location: 'Cairo, Egypt', date: '2026-07-01 08:00', description: 'Pharmaceutical items picked up in temp-controlled unit', completed: true },
        { status: 'In Transit', location: 'Cairo Airport Hub', date: '2026-07-02 14:00', description: 'Cleared origin customs and loaded on flight WBR-091', completed: true },
        { status: 'At Port/Hub', location: 'Lagos Cargo Terminal', date: '2026-07-03 10:30', description: 'Arrived at Lagos Cargo Terminal, moved to cold storage', completed: true },
        { status: 'Out for Delivery', location: 'Lagos Port Clearing', date: '2026-07-04 09:00', description: 'Customs cleared. Dispatched in local reefer delivery truck', completed: true },
        { status: 'Delivered', location: 'Lagos Central Hospital', date: 'Pending', description: 'Delivery scheduled for delivery on July 6th', completed: false }
      ]
    });
  }

  // Otherwise generate a random but deterministic tracking path for any WBR-*
  const randNum = parseInt(trackingNumber.replace(/[^0-9]/g, '')) || 12345;
  const states = ['Picked Up', 'In Transit', 'At Port/Hub', 'Out for Delivery', 'Delivered'];
  
  // Decide how many steps are completed based on tracking number
  const completedStepsCount = (randNum % 4) + 1; // 1 to 4 steps completed
  
  const origins = ['Douala, Cameroon', 'Lagos, Nigeria', 'Nairobi, Kenya', 'Johannesburg, South Africa', 'Accra, Ghana', 'Dakar, Senegal'];
  const destinations = ['Cairo, Egypt', 'Kinshasa, DR Congo', 'Dar es Salaam, Tanzania', 'Abidjan, Cote dIvoire', 'Kigali, Rwanda', 'Luanda, Angola'];
  
  const origin = origins[randNum % origins.length];
  const destination = destinations[(randNum + 1) % destinations.length];
  
  const modes = ['Road', 'Air', 'Ocean', 'Rail', 'Multimodal'] as const;
  const mode = modes[randNum % modes.length];
  
  const steps = [
    { status: 'Picked Up', location: origin, date: '2026-07-01 09:00', description: 'Cargo picked up and safely secured in WBR transport box', completed: true },
    { status: 'In Transit', location: 'Regional Transit Highway', date: '2026-07-02 11:30', description: 'In route to hub with continuous GPS logging', completed: completedStepsCount >= 2 },
    { status: 'At Port/Hub', location: 'WBR Border Clearing Station', date: '2026-07-03 15:45', description: 'Customs paperwork approved and manifest uploaded', completed: completedStepsCount >= 3 },
    { status: 'Out for Delivery', location: destination, date: '2026-07-04 08:30', description: 'Dispatched for last-mile delivery to consignee address', completed: completedStepsCount >= 4 },
    { status: 'Delivered', location: destination, date: '2026-07-04 14:15', description: 'Delivered. Signed by receiver. Transit verified successfully', completed: completedStepsCount === 5 }
  ];

  const currentStatus = steps[completedStepsCount - 1].status;
  const currentLocation = steps[completedStepsCount - 1].location;

  res.json({
    trackingNumber,
    cargoType: 'Commercial General Freight',
    origin,
    destination,
    mode,
    status: currentStatus,
    currentLocation,
    weight: (randNum % 15000) + 500,
    volume: (randNum % 40) + 2,
    estimatedDelivery: '2026-07-05',
    steps
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(port, () => {
    console.log(`WBR Trans Logistics server running on http://localhost:${port}`);
  });
}

startServer();

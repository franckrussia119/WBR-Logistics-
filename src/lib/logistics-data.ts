import { Shipment, OfficeLocation, NewsArticle, TransportCorridor, IndustryVertical } from '../types';

export const mockShipments: Shipment[] = [
  {
    id: "1",
    trackingNumber: "WBR-2025-00001",
    shipperName: "PharmAfrica Ltd",
    consigneeName: "Lagos Central Hospital",
    originCountry: "Egypt",
    originCity: "Cairo",
    destinationCountry: "Nigeria",
    destinationCity: "Lagos",
    status: "In Transit",
    currentLocation: "Lagos Port Clearing",
    weight: 4500,
    volume: 18.5,
    cargoType: "Perishables (Cold Chain Pharmaceuticals)",
    transportMode: "Air",
    estimatedDelivery: "2026-07-06",
    history: [
      { date: "2026-07-01 08:00", location: "Cairo International Airport", status: "Picked Up", description: "Pharmaceutical cargo picked up in temperature controlled unit" },
      { date: "2026-07-02 14:00", location: "Cairo Airport Hub", status: "In Transit", description: "Cleared customs at origin and loaded onto flight WBR-091" },
      { date: "2026-07-03 10:30", location: "Lagos Cargo Terminal", status: "At Port/Hub", description: "Arrived at Lagos Cargo Terminal, transferred to cold storage" },
      { date: "2026-07-04 09:00", location: "Lagos Port Clearing", status: "In Transit", description: "Undergoing priority health and customs clearance inspection" }
    ]
  },
  {
    id: "2",
    trackingNumber: "WBR-2025-00002",
    shipperName: "African Mining Corp",
    consigneeName: "Katanga Copper Mine",
    originCountry: "South Africa",
    originCity: "Johannesburg",
    destinationCountry: "DR Congo",
    destinationCity: "Kolwezi",
    status: "Picked Up",
    currentLocation: "Johannesburg Logistics Park",
    weight: 24000,
    volume: 45.0,
    cargoType: "Oversized Mining Machinery",
    transportMode: "Road",
    estimatedDelivery: "2026-07-12",
    history: [
      { date: "2026-07-03 16:00", location: "Johannesburg Logistics Park", status: "Picked Up", description: "Heavy lift machinery secured on multi axle low bed truck" }
    ]
  },
  {
    id: "3",
    trackingNumber: "WBR-2025-00003",
    shipperName: "Cocoa Growers Alliance",
    consigneeName: "Chocolatier de Paris",
    originCountry: "Cote d'Ivoire",
    originCity: "Abidjan",
    destinationCountry: "France",
    destinationCity: "Le Havre",
    status: "In Transit",
    currentLocation: "Atlantic Ocean",
    weight: 18000,
    volume: 33.2,
    cargoType: "General (Cocoa Beans)",
    transportMode: "Ocean",
    estimatedDelivery: "2026-07-18",
    history: [
      { date: "2026-06-28 10:00", location: "Abidjan Cocoa Warehouse", status: "Picked Up", description: "Bulk organic cocoa beans loaded into ventilated dry container" },
      { date: "2026-06-30 15:00", location: "Port of Abidjan", status: "At Port/Hub", description: "Container customs cleared and loaded onto vessel Safmarine Douala" },
      { date: "2026-07-02 06:00", location: "Atlantic Ocean", status: "In Transit", description: "Vessel in transit northward via West African coast" }
    ]
  },
  {
    id: "4",
    trackingNumber: "WBR-2025-00004",
    shipperName: "East Africa Agri Group",
    consigneeName: "Gulf Distribution Co",
    originCountry: "Kenya",
    originCity: "Nairobi",
    destinationCountry: "United Arab Emirates",
    destinationCity: "Dubai",
    status: "Delivered",
    currentLocation: "Dubai Hub",
    weight: 1200,
    volume: 6.0,
    cargoType: "Perishables (Fresh Cut Flowers)",
    transportMode: "Air",
    estimatedDelivery: "2026-07-03",
    history: [
      { date: "2026-07-01 22:00", location: "Nairobi Airport cold store", status: "Picked Up", description: "Fresh flowers processed and packed into chilled containers" },
      { date: "2026-07-02 04:30", location: "Nairobi Jomo Kenyatta Intl", status: "In Transit", description: "Flight departed Nairobi bound for Dubai DXB" },
      { date: "2026-07-02 11:00", location: "Dubai Al Maktoum Airport", status: "At Port/Hub", description: "Arrived at Dubai airport cargo terminal, cleared custom" },
      { date: "2026-07-03 08:30", location: "Dubai Distribution Centre", status: "Out for Delivery", description: "Dispatched in local refrigerated courier vehicle" },
      { date: "2026-07-03 11:15", location: "Dubai Hub", status: "Delivered", description: "Delivered to consignee warehouse. Temperature log verified intact" }
    ]
  },
  {
    id: "5",
    trackingNumber: "WBR-2025-00005",
    shipperName: "Sahel Aid Foundation",
    consigneeName: "UN Relief Depot",
    originCountry: "Senegal",
    originCity: "Dakar",
    destinationCountry: "Niger",
    destinationCity: "Niamey",
    status: "In Transit",
    currentLocation: "Bamako Corridor Checkpoint",
    weight: 15500,
    volume: 42.0,
    cargoType: "General (Emergency Medical Supplies)",
    transportMode: "Road",
    estimatedDelivery: "2026-07-10",
    history: [
      { date: "2026-07-01 09:00", location: "Dakar Port Depot", status: "Picked Up", description: "Medical kits loaded and double sealed on WBR regional transit truck" },
      { date: "2026-07-02 18:00", location: "Senegal Mali Border Crossing", status: "In Transit", description: "Border documentation completed. Escort convoy departed" },
      { date: "2026-07-04 11:00", location: "Bamako Corridor Checkpoint", status: "In Transit", description: "Routine driver rest stop and transit permit verification completed" }
    ]
  },
  {
    id: "6",
    trackingNumber: "WBR-2025-00006",
    shipperName: "Casablanca Automotive",
    consigneeName: "Tunis Auto Distributors",
    originCountry: "Morocco",
    originCity: "Casablanca",
    destinationCountry: "Tunisia",
    destinationCity: "Tunis",
    status: "At Port/Hub",
    currentLocation: "Port of Algiers Hub",
    weight: 8800,
    volume: 24.5,
    cargoType: "Vehicles (Spare Parts)",
    transportMode: "Multimodal",
    estimatedDelivery: "2026-07-08",
    history: [
      { date: "2026-07-02 10:00", location: "Casablanca Manufacturing Zone", status: "Picked Up", description: "Automotive replacement parts packed in heavy duty pallets" },
      { date: "2026-07-03 14:00", location: "Port of Algiers Hub", status: "At Port/Hub", description: "Arrived at ocean hub terminal. Waiting for coastal ferry connection" }
    ]
  },
  {
    id: "7",
    trackingNumber: "WBR-2025-00007",
    shipperName: "Abuja Power Project",
    consigneeName: "Transmission Corp of Nigeria",
    originCountry: "Cameroon",
    originCity: "Douala",
    destinationCountry: "Nigeria",
    destinationCity: "Abuja",
    status: "In Transit",
    currentLocation: "Calabar Customs Station",
    weight: 35000,
    volume: 62.0,
    cargoType: "Project Cargo (Power Transformer)",
    transportMode: "Road",
    estimatedDelivery: "2026-07-09",
    history: [
      { date: "2026-06-30 08:00", location: "Douala Industrial Heavy Depot", status: "Picked Up", description: "35 ton transformer mounted and secured on hydraulic multi axle vehicle" },
      { date: "2026-07-02 12:00", location: "Ekok Border Station", status: "In Transit", description: "Cameroon exit clearance obtained. Transferred to Nigerian border authorities" },
      { date: "2026-07-04 10:00", location: "Calabar Customs Station", status: "In Transit", description: "Nigerian transit clearance complete. Journey resumed under heavy escort" }
    ]
  },
  {
    id: "8",
    trackingNumber: "WBR-2025-00008",
    shipperName: "Nairobi Tech Import",
    consigneeName: "Silicon Savannah Logistics",
    originCountry: "China",
    originCity: "Shenzhen",
    destinationCountry: "Kenya",
    destinationCity: "Nairobi",
    status: "At Port/Hub",
    currentLocation: "Port of Mombasa",
    weight: 6200,
    volume: 15.0,
    cargoType: "Electronics (Smartphones and Tablets)",
    transportMode: "Multimodal",
    estimatedDelivery: "2026-07-07",
    history: [
      { date: "2026-06-18 11:00", location: "Shenzhen Factory Warehouse", status: "Picked Up", description: "Consolidation of high value electronic goods inside GPS tracker container" },
      { date: "2026-06-20 16:00", location: "Port of Shenzhen", status: "In Transit", description: "Vessel departed China via Indian Ocean shipping lanes" },
      { date: "2026-07-03 14:30", location: "Port of Mombasa", status: "At Port/Hub", description: "Container discharged from vessel. Registered in port transit stack" }
    ]
  },
  {
    id: "9",
    trackingNumber: "WBR-2025-00009",
    shipperName: "Ghana Gold Refinery",
    consigneeName: "Zurich Bullion Bank",
    originCountry: "Ghana",
    originCity: "Accra",
    destinationCountry: "Switzerland",
    destinationCity: "Zurich",
    status: "In Transit",
    currentLocation: "London Heathrow Terminal 4",
    weight: 350,
    volume: 0.8,
    cargoType: "High Value (Precious Metals)",
    transportMode: "Air",
    estimatedDelivery: "2026-07-06",
    history: [
      { date: "2026-07-03 13:00", location: "Accra Airport Secure Vault", status: "Picked Up", description: "High security armed transfer of gold bars from vault to cargo aircraft" },
      { date: "2026-07-04 06:00", location: "London Heathrow Terminal 4", status: "In Transit", description: "Transit transfer completed at Heathrow. Waiting for connecting flight to Zurich" }
    ]
  },
  {
    id: "10",
    trackingNumber: "WBR-2025-00010",
    shipperName: "Soweto Apparel Co",
    consigneeName: "Cape Town Retail Emporium",
    originCountry: "South Africa",
    originCity: "Johannesburg",
    destinationCountry: "South Africa",
    destinationCity: "Cape Town",
    status: "Delivered",
    currentLocation: "Cape Town Waterfront",
    weight: 1800,
    volume: 8.4,
    cargoType: "General (Clothing Retail)",
    transportMode: "Rail",
    estimatedDelivery: "2026-07-02",
    history: [
      { date: "2026-06-29 14:00", location: "Johannesburg Rail Terminal", status: "Picked Up", description: "Pallets of apparel loaded into secure express rail cargo unit" },
      { date: "2026-06-30 08:00", location: "Karoo Railway Corridor", status: "In Transit", description: "Cargo train moving southbound on Johannesburg Cape Town high speed line" },
      { date: "2026-07-01 16:00", location: "Cape Town Rail Yards", status: "At Port/Hub", description: "Container discharged at rail hub and prepared for truck delivery" },
      { date: "2026-07-02 09:30", location: "Cape Town Waterfront", status: "Delivered", description: "Delivered in full. Safe arrival signed by store manager" }
    ]
  },
  {
    id: "11",
    trackingNumber: "WBR-2025-00011",
    shipperName: "Fez Craft Exports",
    consigneeName: "Global Artisan Market",
    originCountry: "Morocco",
    originCity: "Fez",
    destinationCountry: "United States",
    destinationCity: "New York",
    status: "In Transit",
    currentLocation: "Atlantic Ocean",
    weight: 2400,
    volume: 12.0,
    cargoType: "General (Handmade Leather Goods)",
    transportMode: "Ocean",
    estimatedDelivery: "2026-07-20",
    history: [
      { date: "2026-06-25 09:00", location: "Fez workshop", status: "Picked Up", description: "Handcrafted cargo wrapped and loaded into shipping crates" },
      { date: "2026-06-28 17:00", location: "Port of Casablanca", status: "At Port/Hub", description: "Customs cleared and containerized for international ocean transit" }
    ]
  },
  {
    id: "12",
    trackingNumber: "WBR-2025-00012",
    shipperName: "Mombasa Fish Exporters",
    consigneeName: "Tokyo Seafood Market",
    originCountry: "Kenya",
    originCity: "Mombasa",
    destinationCountry: "Japan",
    destinationCity: "Tokyo",
    status: "In Transit",
    currentLocation: "Bangkok Cargo Transit",
    weight: 950,
    volume: 3.2,
    cargoType: "Perishables (Fresh Seafood)",
    transportMode: "Air",
    estimatedDelivery: "2026-07-06",
    history: [
      { date: "2026-07-03 21:00", location: "Mombasa Cold Chain Terminal", status: "Picked Up", description: "Fresh fish packed in specialized dry ice containers" },
      { date: "2026-07-04 02:00", location: "Nairobi Airport Connection", status: "In Transit", description: "Chilled cargo loaded onto flight bound for Southeast Asian hub" }
    ]
  },
  {
    id: "13",
    trackingNumber: "WBR-2025-00013",
    shipperName: "Kigali Coffee Cooperative",
    consigneeName: "Star Import Hamburg",
    originCountry: "Rwanda",
    originCity: "Kigali",
    destinationCountry: "Germany",
    destinationCity: "Hamburg",
    status: "At Port/Hub",
    currentLocation: "Port of Dar es Salaam",
    weight: 12000,
    volume: 22.0,
    cargoType: "General (Arabica Green Beans)",
    transportMode: "Multimodal",
    estimatedDelivery: "2026-07-16",
    history: [
      { date: "2026-06-28 11:00", location: "Kigali Dry Port", status: "Picked Up", description: "Coffee sacks stacked and containerized with humidity absorbers" },
      { date: "2026-06-30 18:00", location: "Central Corridor Highway", status: "In Transit", description: "Overland transit through Tanzania on schedule" },
      { date: "2026-07-03 13:00", location: "Port of Dar es Salaam", status: "At Port/Hub", description: "Arrived at port terminal. Preparing for vessel boarding" }
    ]
  },
  {
    id: "14",
    trackingNumber: "WBR-2025-00014",
    shipperName: "Adama Tractor Spares",
    consigneeName: "Sudan Agri Co",
    originCountry: "Ethiopia",
    originCity: "Addis Ababa",
    destinationCountry: "Sudan",
    destinationCity: "Khartoum",
    status: "On Hold",
    currentLocation: "Metema Border Station",
    weight: 5600,
    volume: 14.8,
    cargoType: "Vehicles (Agricultural Spares)",
    transportMode: "Road",
    estimatedDelivery: "2026-07-10",
    history: [
      { date: "2026-07-01 10:00", location: "Addis Ababa Industrial Zone", status: "Picked Up", description: "Parts loaded onto cross border freight truck" },
      { date: "2026-07-03 15:00", location: "Metema Border Station", status: "On Hold", description: "Awaiting final customs clearance documentation from Sudanese consignee" }
    ]
  },
  {
    id: "15",
    trackingNumber: "WBR-2025-00015",
    shipperName: "Alexandria Chemical Corp",
    consigneeName: "Sidi Kerir Plastics",
    originCountry: "Egypt",
    originCity: "Alexandria",
    destinationCountry: "Egypt",
    destinationCity: "Suez",
    status: "Delivered",
    currentLocation: "Suez Petrochemical Park",
    weight: 31000,
    volume: 48.0,
    cargoType: "Dangerous Goods (Polymer Resins)",
    transportMode: "Rail",
    estimatedDelivery: "2026-07-02",
    history: [
      { date: "2026-06-29 08:00", location: "Alexandria Port Rail Depot", status: "Picked Up", description: "Chemical tankers loaded and inspected under safety protocols" },
      { date: "2026-06-30 14:00", location: "Nile Delta Railway", status: "In Transit", description: "Cargo train moving on freight express route" },
      { date: "2026-07-01 11:00", location: "Suez Rail Terminal", status: "At Port/Hub", description: "Cargo discharged and safety valves inspected" },
      { date: "2026-07-02 12:30", location: "Suez Petrochemical Park", status: "Delivered", description: "Delivered to silo tanks. Final pressure check positive" }
    ]
  },
  {
    id: "16",
    trackingNumber: "WBR-2025-00016",
    shipperName: "Freetown Timber Group",
    consigneeName: "Guangdong Construction",
    originCountry: "Sierra Leone",
    originCity: "Freetown",
    destinationCountry: "China",
    destinationCity: "Guangzhou",
    status: "In Transit",
    currentLocation: "Indian Ocean",
    weight: 26000,
    volume: 38.0,
    cargoType: "General (Hardwood Timber)",
    transportMode: "Ocean",
    estimatedDelivery: "2026-07-22",
    history: [
      { date: "2026-06-22 09:00", location: "Freetown Port Yards", status: "Picked Up", description: "Log timber loaded and scaled in open top container" },
      { date: "2026-06-25 15:00", location: "Port of Freetown", status: "At Port/Hub", description: "Cleared and placed on global vessel route" }
    ]
  },
  {
    id: "17",
    trackingNumber: "WBR-2025-00017",
    shipperName: "Kampala Dairy Co",
    consigneeName: "Juba Supermarkets Ltd",
    originCountry: "Uganda",
    originCity: "Kampala",
    destinationCountry: "South Sudan",
    destinationCity: "Juba",
    status: "In Transit",
    currentLocation: "Nimule Border Post",
    weight: 8500,
    volume: 20.0,
    cargoType: "Perishables (Milk and Butter)",
    transportMode: "Road",
    estimatedDelivery: "2026-07-06",
    history: [
      { date: "2026-07-02 14:00", location: "Kampala Cold Storage Hub", status: "Picked Up", description: "Dairy products loaded into specialized dual temperature reefer truck" },
      { date: "2026-07-03 10:00", location: "Gulu Regional Post", status: "In Transit", description: "Refrigeration system checked. Operational at 4 degrees Celsius" },
      { date: "2026-07-04 08:30", location: "Nimule Border Post", status: "In Transit", description: "Customs inspect complete. Preparing for final drive to Juba" }
    ]
  },
  {
    id: "18",
    trackingNumber: "WBR-2025-00018",
    shipperName: "Luanda Oil Supplies",
    consigneeName: "Cabinda Drilling Base",
    originCountry: "Angola",
    originCity: "Luanda",
    destinationCountry: "Angola",
    destinationCity: "Cabinda",
    status: "At Port/Hub",
    currentLocation: "Port of Luanda Base",
    weight: 14500,
    volume: 28.2,
    cargoType: "Project Cargo (Drill Pipes)",
    transportMode: "Ocean",
    estimatedDelivery: "2026-07-08",
    history: [
      { date: "2026-07-02 11:00", location: "Luanda Logistics Base", status: "Picked Up", description: "Pipes bundled, heavy lifting crane loaded to supply vessel" },
      { date: "2026-07-03 16:30", location: "Port of Luanda Base", status: "At Port/Hub", description: "Vessel awaiting clearance from port authority for direct Cabinda run" }
    ]
  },
  {
    id: "19",
    trackingNumber: "WBR-2025-00019",
    shipperName: "Cotonou Cotton Board",
    consigneeName: "Spinners of Mumbai",
    originCountry: "Benin",
    originCity: "Cotonou",
    destinationCountry: "India",
    destinationCity: "Mumbai",
    status: "In Transit",
    currentLocation: "Mediterranean Sea",
    weight: 22000,
    volume: 41.5,
    cargoType: "General (Raw Cotton)",
    transportMode: "Ocean",
    estimatedDelivery: "2026-07-24",
    history: [
      { date: "2026-06-24 10:00", location: "Cotonou Depot", status: "Picked Up", description: "Cotton bales compressed and containerized" },
      { date: "2026-06-27 16:00", location: "Port of Cotonou", status: "At Port/Hub", description: "Customs cleared and loaded on container ship Maersk Africa" }
    ]
  },
  {
    id: "20",
    trackingNumber: "WBR-2025-00020",
    shipperName: "Lagos Biotech Inc",
    consigneeName: "Abidjan Health Hub",
    originCountry: "Nigeria",
    originCity: "Lagos",
    destinationCountry: "Cote d'Ivoire",
    destinationCity: "Abidjan",
    status: "Out for Delivery",
    currentLocation: "Abidjan Airport Depot",
    weight: 120,
    volume: 0.6,
    cargoType: "Perishables (Vaccines under -70C)",
    transportMode: "Air",
    estimatedDelivery: "2026-07-04",
    history: [
      { date: "2026-07-03 07:00", location: "Lagos Airport Terminal", status: "Picked Up", description: "Vaccines stored in dry ice shippers loaded into airliner cargo cabin" },
      { date: "2026-07-03 12:00", location: "Abidjan Airport Terminal", status: "At Port/Hub", description: "Cleared through customs green lane, transferred to regional refrigerated van" },
      { date: "2026-07-04 08:00", location: "Abidjan Airport Depot", status: "Out for Delivery", description: "Dispatched to local clinic under continuous digital temperature logs" }
    ]
  }
];

export const mockOffices: OfficeLocation[] = [
  {
    id: "douala",
    city: "Douala",
    country: "Cameroon",
    address: "102 Boulevard de la Liberte, Douala Port Area",
    phone: "+237 650 000 000",
    email: "douala.hq@wbrtrans.com",
    hours: "24 Hours / 7 Days",
    manager: "Emmanuel Mbarga",
    capacity: "120,000 sqm warehouse, 10,000 sqm Cold Chain storage, Inland Container Depot (ICD)",
    isHQ: true
  },
  {
    id: "lagos",
    city: "Lagos",
    country: "Nigeria",
    address: "42 Apapa Wharf Road, Apapa, Lagos",
    phone: "+234 1 555 9812",
    email: "lagos@wbrtrans.com",
    hours: "07:30 - 20:00 (Mon - Sat)",
    manager: "Fatima Al-Hassan",
    capacity: "80,000 sqm warehouse, Cross Docking Facilities, Project Cargo Yard"
  },
  {
    id: "nairobi",
    city: "Nairobi",
    country: "Kenya",
    address: "WBR Logistics House, Mombasa Road, Nairobi",
    phone: "+254 20 765 4321",
    email: "nairobi@wbrtrans.com",
    hours: "08:00 - 18:00 (Mon - Sat)",
    manager: "Rebecca Njoki",
    capacity: "50,000 sqm warehouse, state of the art Pharma and Agri Cold Chain Depot"
  },
  {
    id: "johannesburg",
    city: "Johannesburg",
    country: "South Africa",
    address: "15 Freight Road, OR Tambo International Airport, Johannesburg",
    phone: "+27 11 876 5432",
    email: "johannesburg@wbrtrans.com",
    hours: "24 Hours / 7 Days",
    manager: "Kabo Ndlovu",
    capacity: "150,000 sqm central hub, Bonded warehousing, heavy lift project storage"
  },
  {
    id: "accra",
    city: "Accra",
    country: "Ghana",
    address: "Industrial Area Block 4, Tema Port Expressway, Accra",
    phone: "+233 30 291 8273",
    email: "accra@wbrtrans.com",
    hours: "08:00 - 18:30 (Mon - Fri)",
    manager: "Dr. Kofi Boateng",
    capacity: "45,000 sqm dry storage, customs clearance processing center"
  },
  {
    id: "abidjan",
    city: "Abidjan",
    country: "Cote d'Ivoire",
    address: "Rue des Thoniers, Zone Portuaire, Abidjan",
    phone: "+225 21 823 456",
    email: "abidjan@wbrtrans.com",
    hours: "08:00 - 19:00 (Mon - Sat)",
    manager: "Jean-Pierre Bekolo",
    capacity: "60,000 sqm warehouse, cocoa bulk sorting terminal, reefer points"
  },
  {
    id: "cairo",
    city: "Cairo",
    country: "Egypt",
    address: "72 El-Tahrir Street, Heliopolis, Cairo",
    phone: "+20 2 3456 7890",
    email: "cairo@wbrtrans.com",
    hours: "08:00 - 18:00 (Sun - Thu)",
    manager: "Ahmed Rashid",
    capacity: "35,000 sqm air cargo warehouse, temperature sensitive pharma zone"
  },
  {
    id: "addis-ababa",
    city: "Addis Ababa",
    country: "Ethiopia",
    address: "Bole Road, Near Cargo Terminal, Addis Ababa",
    phone: "+251 11 654 3210",
    email: "addis@wbrtrans.com",
    hours: "08:00 - 18:00 (Mon - Sat)",
    manager: "Solomon Tesfaye",
    capacity: "30,000 sqm storage space, multimodal land-air transit clearing facility"
  },
  {
    id: "dakar",
    city: "Dakar",
    country: "Senegal",
    address: "Avenue Felix Eboue, Port Autonome, Dakar",
    phone: "+221 33 892 1234",
    email: "dakar@wbrtrans.com",
    hours: "08:00 - 17:30 (Mon - Fri)",
    manager: "Mamadou Diallo",
    capacity: "40,000 sqm warehousing, transit yard for Mali and Sahel region corridors"
  },
  {
    id: "dar-es-salaam",
    city: "Dar es Salaam",
    country: "Tanzania",
    address: "Kilwa Road, Port Access Gate, Dar es Salaam",
    phone: "+255 22 765 8901",
    email: "dar@wbrtrans.com",
    hours: "08:00 - 20:00 (Mon - Sat)",
    manager: "Grace Mrema",
    capacity: "70,000 sqm cargo yard, direct transit connection for Zambia and Rwanda"
  },
  {
    id: "casablanca",
    city: "Casablanca",
    country: "Morocco",
    address: "Boulevard Moulay Slimane, Roches Noires, Casablanca",
    phone: "+212 522 890 123",
    email: "casablanca@wbrtrans.com",
    hours: "08:30 - 18:00 (Mon - Fri)",
    manager: "Youssef Alaoui",
    capacity: "55,000 sqm logistics hub, automotive spares storage, customs bonding"
  },
  {
    id: "luanda",
    city: "Luanda",
    country: "Angola",
    address: "Avenida 4 de Fevereiro, Luanda Harbor Zone",
    phone: "+244 222 901 234",
    email: "luanda@wbrtrans.com",
    hours: "08:00 - 18:00 (Mon - Fri)",
    manager: "Manuel Silva",
    capacity: "65,000 sqm supply yard, specialized oil and gas industrial equipment depot"
  },
  {
    id: "kampala",
    city: "Kampala",
    country: "Uganda",
    address: "Plot 12 Jinja Road, Industrial Area, Kampala",
    phone: "+256 414 789 012",
    email: "kampala@wbrtrans.com",
    hours: "08:00 - 18:00 (Mon - Sat)",
    manager: "Paul Mukasa",
    capacity: "25,000 sqm storage, cross border transshipment station for South Sudan"
  },
  {
    id: "tunis",
    city: "Tunis",
    country: "Tunisia",
    address: "Zone Industrielle de Rades, Tunis",
    phone: "+216 71 890 456",
    email: "tunis@wbrtrans.com",
    hours: "08:00 - 17:30 (Mon - Fri)",
    manager: "Farida Mansour",
    capacity: "20,000 sqm warehouse, close proximity to Mediterranean shipping berths"
  },
  {
    id: "khartoum",
    city: "Khartoum",
    country: "Sudan",
    address: "Africa Street, Near Airport Area, Khartoum",
    phone: "+249 183 456 789",
    email: "khartoum@wbrtrans.com",
    hours: "08:00 - 16:30 (Sun - Thu)",
    manager: "Ibrahim Bashir",
    capacity: "15,000 sqm dry depot, agricultural equipment transit storage"
  }
];

export const mockNews: NewsArticle[] = [
  {
    id: "news-1",
    title: "WBR Trans Logistics Launches New Douala-Lagos Express Corridor",
    date: "2026-06-25",
    category: "Expansions",
    summary: "New express transit route cuts road transport times between Cameroon and Nigeria down to 48 hours with guaranteed custom pre clearance.",
    content: "WBR Trans Logistics has officially opened its high speed road corridor linking the port of Douala with Lagos, Nigeria. By partnering with customs authorities in both countries and utilizing GPS tracked digital border manifests, transit trucks can bypass common delays, completing the cross border transport in less than 48 hours. This corridor marks a major milestone under the African Continental Free Trade Area (AfCFTA) framework.",
    imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80"
  },
  {
    id: "news-2",
    title: "WBR Achieves ISO 9001:2015 Certification for All African Operations",
    date: "2026-05-18",
    category: "Awards",
    summary: "The certification guarantees premium quality management across our entire supply chain networks in 54 African countries.",
    content: "We are pleased to announce that WBR Trans Logistics has received the ISO 9001:2015 Quality Management System certification across all our regional branches and hubs in Africa. This exhaustive audit proves our operational excellence, customer care processes, and secure cargo handling methods are aligned with the highest international protocols.",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
  },
  {
    id: "news-3",
    title: "New Cold Chain Facility Opens in Nairobi Serving East Africa",
    date: "2026-04-12",
    category: "Facilities",
    summary: "State of the art chilled storage hub supports pharmaceutical distribution and fresh agricultural exports across the region.",
    content: "WBR Trans Logistics has finalized construction of its advanced 10,000 sqm temperature controlled storage complex at our Nairobi hub. Designed specifically to sustain vaccines, pharmaceutical components, and fresh horticultural goods, the facility features zero downtime backup energy systems and live telemetry systems to guarantee cargo integrity.",
    imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80"
  },
  {
    id: "news-4",
    title: "WBR Announces Major Investment in Low Emission Fleet for 2028",
    date: "2026-03-30",
    category: "Sustainability",
    summary: "Committing to a greener Africa with plan to transition 30 percent of urban courier vehicles to electric power.",
    content: "In alignment with our environmental commitments, WBR Trans Logistics is embarking on a multi million dollar fleet modernization effort. We have partnered with green vehicle manufacturers to convert 30 percent of our urban distribution and port transport fleet into low emission electric vehicles by 2028, with the goal of complete carbon neutrality by 2035.",
    imageUrl: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80"
  },
  {
    id: "news-5",
    title: "Strategic Maritime Partnership Formed with Port of Mombasa",
    date: "2026-02-15",
    category: "Partnerships",
    summary: "Collaborative berth allocation and dedicated terminal access to accelerate East African import cargo clearance.",
    content: "To combat harbor delays, WBR has signed a strategic cooperation agreement with the Kenya Ports Authority. This gives WBR managed ocean vessels priority berthing rights and dedicated gate lanes at the Mombasa Port container terminal, ensuring faster turnarounds and swift deliveries for overland consignees in Uganda and Rwanda.",
    imageUrl: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80"
  },
  {
    id: "news-6",
    title: "Expanding Air Freight Solutions with New Cargo Charters",
    date: "2026-01-20",
    category: "Air Cargo",
    summary: "Dedicated weekly air cargo charters launched between Johannesburg, Douala, and Paris Charles de Gaulle.",
    content: "To support time critical supply chains, WBR has leased three Boeing 777 heavy freighters to establish fixed weekly schedules connecting Southern Africa, Central Africa, and Europe. This dedicated capacity provides reliable air cargo space despite market fluctuations, keeping automotive and health sectors moving.",
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
  },
  {
    id: "news-7",
    title: "WBR Trans Logistics Honored at African Business Leadership Awards",
    date: "2025-11-10",
    category: "Awards",
    summary: "Awarded Logistics Provider of the Year for outstanding contribution to regional trade integration.",
    content: "The panel recognized WBR for its tireless efforts in building cross border physical connectivity across 54 African countries. By deploying high tech tracking and investing in local workforce talents, WBR has successfully reduced average intra African transport costs by 15 percent over the past three years.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
  },
  {
    id: "news-8",
    title: "Pioneering the AfCFTA Digital Customs Initiative in West Africa",
    date: "2025-10-05",
    category: "Technology",
    summary: "Introducing integrated cloud based customs clearing system to reduce border friction in ECOWAS zone.",
    content: "WBR Trans Logistics has rolled out its proprietary digital customs gateway. This platform allows shippers to pre lodge all required border documents, import certificates, and payment records simultaneously to multiple regulatory bodies, reducing average transit hold times from five days down to under six hours.",
    imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80"
  },
  {
    id: "news-9",
    title: "WBR Aids Relief Distribution in Southern Africa",
    date: "2025-08-14",
    category: "Community",
    summary: "Deploying 50 heavy duty trucks to deliver emergency shelter and foods in partnership with NGOs.",
    content: "Working closely with international relief teams, WBR mobilized its transport assets to distribute essential supplies to flood affected areas. Our logistics command centers worked night and day to route vehicles safely through damaged infrastructure corridors, ensuring aid reached vulnerable populations without delay.",
    imageUrl: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80"
  },
  {
    id: "news-10",
    title: "Johannesburg Mega Warehouse Extension Complete",
    date: "2025-07-02",
    category: "Facilities",
    summary: "Additional 40,000 sqm of high bay storage ready to absorb rising retail and manufacturing demands.",
    content: "We have finalized expansion of our South African distribution park, bringing total capacity to 150,000 sqm. The state of the art facility is fully integrated with automated picking vehicles, security surveillance, and energy positive solar roofs that feed electricity back into the local community power network.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
  }
];

export const mockCorridors: TransportCorridor[] = [
  {
    id: "west-corridor",
    name: "West Africa Corridor",
    route: "Lagos (NG) - Accra (GH) - Abidjan (CI) - Dakar (SN)",
    transitTime: "4 - 6 Days Road",
    description: "The economic lifeline of West Africa, connecting major Atlantic trade ports and inland distribution hubs.",
    keyFacts: [
      "Serves a combined regional market of over 250 million people",
      "Express customs clearing at Benin, Togo, and Ghana border points",
      "GPS tracked convoy security and 24/7 mechanical support teams",
      "Fully compliant with ECOWAS transit agreements"
    ]
  },
  {
    id: "east-corridor",
    name: "East Africa Corridor",
    route: "Mombasa (KE) - Nairobi (KE) - Kampala (UG) - Kigali (RW)",
    transitTime: "2 - 4 Days Multimodal",
    description: "Seamless port to hinterland transport linking the Indian Ocean with landlocked East African hubs.",
    keyFacts: [
      "Direct integration with Mombasa port container yards",
      "Utilizes express Standard Gauge Railway (SGR) rail freight connections where available",
      "Specialized agricultural export cold chain links on all routes",
      "Express transit clearing at Malaba border post"
    ]
  },
  {
    id: "central-corridor",
    name: "Central Africa Corridor",
    route: "Douala (CM) - Bangui (CF) - Brazzaville (CG) - Kinshasa (CD)",
    transitTime: "5 - 8 Days Road/River",
    description: "Tackling complex dense terrains with robust multimodal solutions to reach central landlocked capitals.",
    keyFacts: [
      "WBR headquarters control hub overseeing all operations from Douala",
      "Barge river freight coordination on Congo and Ubangi rivers",
      "Heavy duty four wheel drive haulage fleet for unpaved forest sectors",
      "Dedicated warehouses and bonded transit depots in Bangui and Brazzaville"
    ]
  },
  {
    id: "southern-corridor",
    name: "Southern Africa Corridor",
    route: "Johannesburg (ZA) - Lusaka (ZM) - Harare (ZW) - Maputo (MZ)",
    transitTime: "3 - 5 Days Road/Rail",
    description: "Highly integrated industrial logistics corridor for agricultural machinery, mining equipment, and consumer retail.",
    keyFacts: [
      "Connected directly to Johannesburg mega hub facility",
      "Excellent rail freight options for bulk minerals and steel",
      "Pre clearance integration at Beitbridge border crossing",
      "Full load (FTL) and daily groupage solutions available"
    ]
  },
  {
    id: "north-corridor",
    name: "North Africa Corridor",
    route: "Cairo (EG) - Tunis (TN) - Algiers (DZ) - Casablanca (MA)",
    transitTime: "5 - 7 Days Land/Sea",
    description: "Connecting historical Mediterranean trading hubs with robust trucking and coastal sea feeders.",
    keyFacts: [
      "Regular roll on roll off (RoRo) ferry connections between regional ports",
      "High tech pharma cold chain shipping from Egyptian production centers",
      "Automotive components transport specialists operating into Morocco",
      "Bilingual Arabic and French customs brokerage experts on staff"
    ]
  },
  {
    id: "trans-saharan",
    name: "Trans Saharan Route",
    route: "Algiers (DZ) - Niamey (NE) - Kano (NG) - Lagos (NG)",
    transitTime: "8 - 12 Days Overland",
    description: "An ambitious overland freight bridge connecting North Africa directly with Sub Saharan West Africa.",
    keyFacts: [
      "Deep desert logistics expertise and vehicle modification specs",
      "Armed security details and government clearances handled by WBR",
      "Critical route for industrial minerals and infrastructure material",
      "Emergency desert rescue and repair trucks stationed along the route"
    ]
  },
  {
    id: "beira-corridor",
    name: "Beira Development Corridor",
    route: "Beira Port (MZ) - Harare (ZW) - Lusaka (ZM) - Lubumbashi (CD)",
    transitTime: "4 - 7 Days Road/Rail",
    description: "Critical agricultural and copper export route linking regional landlocked mining centers with Beira Port.",
    keyFacts: [
      "Primary route for copper cathode and cobalt exports",
      "Port of Beira storage warehouses with container loading equipment",
      "Refrigerated transport for citrus and tobacco export goods",
      "Bonded logistics security for high value mineral assets"
    ]
  },
  {
    id: "walvis-bay",
    name: "Walvis Bay Corridor",
    route: "Walvis Bay (NA) - Windhoek (NA) - Gaborone (BW) - Johannesburg (ZA)",
    transitTime: "3 - 4 Days Road Express",
    description: "Highly efficient alternative route connecting Atlantic shipping lanes directly to the Gauteng industrial heartland.",
    keyFacts: [
      "Congestion free port facilities in Walvis Bay for quick unloading",
      "Completely paved high quality highway infrastructure",
      "Rapid border clearance under the Southern African Customs Union (SACU)",
      "Express road consolidation services departure twice weekly"
    ]
  }
];

export const mockIndustries: IndustryVertical[] = [
  {
    id: "agriculture",
    name: "Agriculture and Food",
    iconName: "Sprout",
    description: "Sustaining African farming and feeding communities by linking producers with regional urban markets and global exporters.",
    challenges: [
      "High post harvest product spoilage due to temperature fluctuations",
      "Congested regional border checkpoints delaying perishables",
      "Lack of refrigerated facilities in remote agricultural zones"
    ],
    solutions: [
      "End to end refrigerated transport using live temperature tracking",
      "Green channel fast track customs clearing for perishables",
      "Cold chain sorting and cooling warehouses strategically placed in rural agricultural hubs"
    ],
    caseStudyTitle: "East African Rose Exports",
    caseStudySnippet: "WBR managed the air transport of 40 tons of fresh cut flowers from Nairobi farms to European florists, keeping temperature logs locked between 2 and 4 degrees Celsius throughout the trip.",
    keyStat: "99.8% Cold Chain Integrity Maintained"
  },
  {
    id: "oil-gas",
    name: "Oil and Gas",
    iconName: "Droplet",
    description: "Providing high precision, extremely secure transport solutions for exploration and production operations across African coastal and onshore fields.",
    challenges: [
      "Moving heavy weight over dimensional equipment through sensitive terrains",
      "Zero downtime expectations where single missing parts can stop production",
      "Extremely strict health, safety, and environmental (HSE) rules"
    ],
    solutions: [
      "Dedicated Project Cargo department specializing in heavy haulage and rigging",
      "24/7 hotshot transport options for urgent maintenance spares",
      "Full compliance with international energy safety protocols and certifications"
    ],
    caseStudyTitle: "Offshore Rig Supply in Angola",
    caseStudySnippet: "Coordinated the urgent delivery of drilling replacement pipes from Luanda base to Cabinda offshore fields within 18 hours using a combination of rapid ocean support vessels and specialized heavy cranes.",
    keyStat: "Zero Lost Time Injuries over 500k man hours"
  },
  {
    id: "mining",
    name: "Mining and Minerals",
    iconName: "Pickaxe",
    description: "Supporting high volume mining developments from remote mineral rich deposits to international ocean shipping terminals.",
    challenges: [
      "Extremely remote extraction sites lacking decent road connections",
      "Handling highly valuable mineral cargoes vulnerable to security risks",
      "Outbound transport of bulk commodity metals in huge quantities"
    ],
    solutions: [
      "Heavy duty multi axle transport fleet built for unpaved bush tracks",
      "GPS tracking, satellite communication, and armed security transit convoys",
      "Dedicated bulk railway transport and port terminal coordination"
    ],
    caseStudyTitle: "Copper Export from Katanga to Durban",
    caseStudySnippet: "Successfully loaded and secured 850 tons of pure copper cathode, moving it across three international borders with full tracking and zero security incidents.",
    keyStat: "12,000+ Tons of Minerals Moved Monthly"
  },
  {
    id: "healthcare",
    name: "Healthcare and Pharma",
    iconName: "HeartPulse",
    description: "Ensuring life saving medical supplies, vaccines, and pharmaceutical equipment reach healthcare centers safely and in perfect condition.",
    challenges: [
      "Ultra sensitive vaccine payloads requiring deep freeze levels",
      "Substandard regional storage infrastructure at destination clinics",
      "Urgent delivery timelines during critical health situations"
    ],
    solutions: [
      "Specialized ultra cold shippers using liquid nitrogen and dry ice tracking",
      "Priority green lane customs pre clearance and air transport",
      "Last mile deliveries in certified medical refrigerated vans"
    ],
    caseStudyTitle: "Pan African Vaccine Rollout",
    caseStudySnippet: "Distributed over 2.5 million doses of temperature sensitive vaccines to remote clinics across Cameroon, Niger, and Chad with continuous digital validation of temperature logs.",
    keyStat: "100% Vaccine Potency Delivered"
  },
  {
    id: "retail",
    name: "Retail and E-Commerce",
    iconName: "ShoppingBag",
    description: "Driving the modern African consumer economy by streamlining inventory flows for local retailers and fast growing e commerce marketplaces.",
    challenges: [
      "Fragmented regional markets with unique local trade hurdles",
      "High rates of cash on delivery and complex return tracking needs",
      "Unpredictable demand spikes stretching warehouse limits"
    ],
    solutions: [
      "Multi country consolidation centers (LTL) reducing freight rates",
      "Integrated order fulfillment software linking web stores with WBR depots",
      "Widespread last mile delivery partners and cash clearing processes"
    ],
    caseStudyTitle: "West African Retail Expansion",
    caseStudySnippet: "Provided centralized warehousing and rapid order distribution for a prominent international fashion retailer expanding into Nigeria, Ghana, and Senegal, reducing logistics costs by 18 percent.",
    keyStat: "98.5% Last Mile On Time Delivery"
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    iconName: "Factory",
    description: "Feeding local factories with raw materials and components, then distributing finished goods to consumer markets across the continent.",
    challenges: [
      "Supply chain disruptions causing production line halts",
      "Complex customs codes on imported manufacturing components",
      "Coordination of diverse supply sources across several continents"
    ],
    solutions: [
      "Just In Time (JIT) supply chain management and storage scheduling",
      "In house customs brokers specializing in manufacturing duty exemptions",
      "Consolidated global procurement hubs in Europe, China, and North America"
    ],
    caseStudyTitle: "Nairobi Assembly Plant Support",
    caseStudySnippet: "Managed the complete import, ocean freight, customs clearance, and factory delivery of automotive knock down kits for a motorcycle assembly line in Kenya, ensuring seamless production levels.",
    keyStat: "99.9% Production Line Uptime Sustained"
  },
  {
    id: "automotive",
    name: "Automotive",
    iconName: "Car",
    description: "Providing shipping, secure storage, and spare parts distribution for passenger vehicles and commercial machinery fleets.",
    challenges: [
      "High value vehicle theft risks during transport and port storage",
      "Sourcing and shipping thousands of unique parts to remote dealer yards",
      "Complex automotive import tariffs and documentation"
    ],
    solutions: [
      "Secure vehicle carrier trucks and guarded port storage spaces",
      "Automated parts stock management and same day delivery for dealerships",
      "Dedicated automotive customs advisory team"
    ],
    caseStudyTitle: "Moroccan Spares Distribution",
    caseStudySnippet: "Supported an automotive brand by establishing a parts distribution center in Casablanca and delivering daily spares orders to 42 service centers across North Africa.",
    keyStat: "Over 1.2 Million Spares Shipped in 2025"
  },
  {
    id: "construction",
    name: "Construction and Infrastructure",
    iconName: "Hammer",
    description: "Delivering structural steel, heavy cements, and specialized tools to mega infrastructure projects shaping the future of African cities.",
    challenges: [
      "Extremely heavy, long, or oddly shaped materials",
      "Strict construction timetables with heavy penalties for project delays",
      "Difficult site access roads in newly developing zones"
    ],
    solutions: [
      "Extensive fleet of flatbeds, cranes, and concrete transport vehicles",
      "Dedicated onsite logistics managers to coordinate arrivals with project schedules",
      "Offsite pre-staging depots to avoid congestion near construction zones"
    ],
    caseStudyTitle: "East African Railway Expansion Support",
    caseStudySnippet: "Sourced, transported, and stored over 15,000 tons of structural steel and concrete ties for railway construction teams, keeping material supply continuous.",
    keyStat: "Zero construction delays caused by logistics"
  },
  {
    id: "aid-ngo",
    name: "Aid and NGO",
    iconName: "Heart",
    description: "Partnering with global humanitarian agencies to deliver emergency relief, food aid, and development resources to remote or crisis affected populations.",
    challenges: [
      "Unstable security situations and restricted access to conflict zones",
      "Extreme urgency to prevent loss of life",
      "Highly complex regulatory and tax exemptions for humanitarian items"
    ],
    solutions: [
      "De-risked transport protocols, security coordination, and local escorts",
      "Immediate cargo prioritization and rapid charter plane mobilization",
      "Experienced customs compliance team focused on humanitarian imports"
    ],
    caseStudyTitle: "Sahel Region Drought Response",
    caseStudySnippet: "Coordinated the emergency land transport of 5,000 tons of food aid and clean water equipment from the Port of Dakar to inland depots across Niger and Mali.",
    keyStat: "Over 500,000 Lives Supported via Swift Aid Transit"
  },
  {
    id: "technology",
    name: "Technology and Telecom",
    iconName: "Cpu",
    description: "Supporting tech rollouts, mobile network infrastructure expansions, and consumer electronics supply chains.",
    challenges: [
      "Extremely high value cargo vulnerable to high transit theft risk",
      "Fragile components requiring climate protection and anti shock handling",
      "Simultaneous rollout needs across thousands of cellular tower sites"
    ],
    solutions: [
      "Secure box trucks with GPS sensors, door opening logs, and escorts",
      "Shock absorbing packing materials and climate controlled transport options",
      "Specialized rollout teams to pre assemble and deliver telecommunications gear directly to towers"
    ],
    caseStudyTitle: "4G Network Expansion in Nigeria",
    caseStudySnippet: "Transported and distributed cellular equipment and solar power backups to 1,200 rural telecom towers across Nigeria, ensuring rapid country-wide connectivity.",
    keyStat: "Zero high value theft losses over 5 years"
  }
];

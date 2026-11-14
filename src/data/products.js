const products = [
  {
    id: 1,
    name: "iPhone 17 Pro",
    category: "iPhone",
    price: 134900,
    oldPrice: 144900,
    badge: "New",
    description: "A premium smartphone with advanced cameras, powerful performance, and a refined design.",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1200&q=85",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=85"
    ],
    colors: ["Black", "Silver", "Blue"],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    specs: ["6.3-inch Super Retina display", "Advanced Pro camera system", "Next-generation processor", "USB-C connectivity", "Face ID"]
  },
  {
    id: 2,
    name: "iPhone 17",
    category: "iPhone",
    price: 79900,
    badge: "New",
    description: "A beautiful everyday smartphone combining performance, camera capability, and elegant design.",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&q=85",
    images: ["https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&q=85"],
    colors: ["Black", "White", "Blue", "Pink"],
    storage: ["128GB", "256GB", "512GB"],
    specs: ["Super Retina display", "Powerful processor", "Dual camera system", "USB-C", "Face ID"]
  },
  {
    id: 3,
    name: "iPhone Air",
    category: "iPhone",
    price: 99900,
    description: "Lightweight design with an immersive display and capable performance for everyday use.",
    image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=1200&q=85",
    images: ["https://images.unsplash.com/photo-1592286927505-1def25115558?w=1200&q=85"],
    colors: ["Silver", "Blue", "Gold"],
    storage: ["128GB", "256GB"],
    specs: ["Lightweight aluminum design", "Super Retina display", "Advanced camera", "USB-C"]
  },
  {
    id: 4,
    name: "iPad Pro",
    category: "iPad",
    price: 109900,
    badge: "Pro",
    description: "Powerful performance in an incredibly thin and portable tablet design.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1200&q=85",
    images: ["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1200&q=85"],
    colors: ["Silver", "Space Black"],
    storage: ["256GB", "512GB", "1TB", "2TB"],
    specs: ["Ultra Retina XDR display", "Apple Silicon performance", "Pro camera system", "Thunderbolt connectivity"]
  },
  {
    id: 5,
    name: "iPad Air",
    category: "iPad",
    price: 69900,
    description: "Powerful, colorful, and versatile for work, creativity, study, and entertainment.",
    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=1200&q=85",
    images: ["https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=1200&q=85"],
    colors: ["Blue", "Purple", "Starlight"],
    storage: ["128GB", "256GB", "512GB"],
    specs: ["Liquid Retina display", "Apple Silicon chip", "USB-C", "Apple Pencil support"]
  },
  {
    id: 6,
    name: "MacBook Pro 14",
    category: "Mac",
    price: 169900,
    badge: "Pro",
    description: "Professional performance for developers, creators, designers, and power users.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=85",
    images: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=85"],
    colors: ["Space Black", "Silver"],
    storage: ["512GB", "1TB", "2TB"],
    specs: ["14-inch Liquid Retina XDR display", "Apple Silicon processor", "Up to 18 hours battery", "Thunderbolt ports", "MagSafe charging"]
  },
  {
    id: 7,
    name: "MacBook Air",
    category: "Mac",
    price: 99900,
    description: "Super thin, fast, and designed for everyday productivity and creativity.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&q=85",
    images: ["https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&q=85"],
    colors: ["Midnight", "Starlight", "Silver"],
    storage: ["256GB", "512GB", "1TB"],
    specs: ["13.6-inch Liquid Retina display", "Apple Silicon processor", "Up to 18 hours battery", "MagSafe charging"]
  },
  {
    id: 8,
    name: "Apple Watch Series",
    category: "Watch",
    price: 44900,
    description: "A smarter way to stay active, connected, and informed throughout your day.",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=1200&q=85",
    images: ["https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=1200&q=85"],
    colors: ["Black", "Silver", "Blue"],
    storage: ["GPS", "GPS + Cellular"],
    specs: ["Advanced health features", "Fitness tracking", "Water resistant", "Always-On display"]
  },
  {
    id: 9,
    name: "Apple Watch Ultra",
    category: "Watch",
    price: 89900,
    badge: "Ultra",
    description: "A rugged watch concept designed around adventure, fitness, and outdoor activity.",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=1200&q=85",
    images: ["https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=1200&q=85"],
    colors: ["Titanium"],
    storage: ["Cellular"],
    specs: ["Titanium case", "High precision GPS", "Adventure-focused design", "Extended battery life"]
  },
  {
    id: 10,
    name: "AirPods Pro",
    category: "AirPods",
    price: 24900,
    badge: "Popular",
    description: "Immersive wireless audio with noise control, spatial sound, and a compact charging case.",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=1200&q=85",
    images: ["https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=1200&q=85"],
    colors: ["White"],
    storage: ["Standard"],
    specs: ["Active Noise Cancellation", "Transparency mode", "Spatial Audio", "MagSafe charging case"]
  },
  {
    id: 11,
    name: "AirPods",
    category: "AirPods",
    price: 17900,
    description: "Simple wireless listening with easy pairing, clear audio, and a compact charging case.",
    image: "https://images.unsplash.com/photo-1588423771071-9f1a9a8d9a6d?w=1200&q=85",
    images: ["https://images.unsplash.com/photo-1588423771071-9f1a9a8d9a6d?w=1200&q=85"],
    colors: ["White"],
    storage: ["Standard"],
    specs: ["High-quality audio", "Wireless charging", "Automatic pairing", "Long battery life"]
  }
];

export default products;
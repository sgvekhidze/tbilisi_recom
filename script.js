// ========================================================
//  DATA
// ========================================================

const foodData = [
  {
    name: "Honoré",
    description: "A charming French-inspired café with exceptional pastries, croissants, and specialty coffee. The perfect spot to start your morning in Tbilisi — elegant, relaxed, and delicious.",
    meals: ["breakfast", "lunch"],
    cuisine: "French Café",
    mapLink: "https://share.google/PyWOHu70oPqzEYgZb",
    tags: ["coffee", "pastries", "brunch"],
    emoji: "☕"
  },
  {
    name: "Rigi",
    description: "An elegant modern restaurant with beautifully crafted European cuisine in a stylish space. A great choice for a polished business lunch or a refined evening dinner.",
    meals: ["lunch", "dinner"],
    cuisine: "Modern European",
    mapLink: "https://maps.app.goo.gl/EaB3Tb5qQQ1YQX2w9",
    tags: ["modern", "elegant", "european"],
    emoji: "🍽️"
  },
  {
    name: "Palmebi",
    description: "Authentic Georgian cuisine in a warm, welcoming setting. Don't miss the legendary khinkali (soup dumplings) and khachapuri — the soul food of Georgia.",
    meals: ["lunch", "dinner"],
    cuisine: "Georgian Traditional",
    mapLink: "https://share.google/aHqPZ2sXfqqDmouFx",
    tags: ["georgian", "traditional", "khinkali"],
    emoji: "🥟"
  },
  {
    name: "Ninia's Garden",
    description: "A hidden gem with a beautiful terrace garden setting. Enjoy thoughtfully prepared Georgian dishes in a romantic outdoor atmosphere — perfect for a long, leisurely meal.",
    meals: ["lunch", "dinner"],
    cuisine: "Georgian",
    mapLink: "https://maps.app.goo.gl/5SKqPEusJ5dsTpSD7",
    tags: ["garden", "terrace", "romantic"],
    emoji: "🌿"
  },
  {
    name: "8000 Vintages",
    description: "Tbilisi's premier destination for Georgian natural wines. An extraordinary selection of local qvevri wines paired with excellent food — an absolute must for wine lovers.",
    meals: ["dinner"],
    cuisine: "Wine Bar & Georgian",
    mapLink: "https://www.google.com/maps/place/8000+Vintages/@41.7082206,44.7587072,17z",
    tags: ["wine", "natural wine", "upscale"],
    emoji: "🍷"
  },
  {
    name: "ORO Marjanishvili",
    description: "Modern Georgian kitchen with a creative twist on classic flavors, situated in the vibrant Marjanishvili neighborhood. Fresh, seasonal, and full of character.",
    meals: ["lunch", "dinner"],
    cuisine: "Modern Georgian",
    mapLink: "https://maps.app.goo.gl/JEoFywUEVVnbzFAb6",
    tags: ["modern", "creative", "seasonal"],
    emoji: "✨"
  }
];

const sightseeingData = [
  {
    name: "Narikala Fortress",
    description: "Ancient fortress dating back to the 4th century, perched above Old Tbilisi with sweeping panoramic views of the city. Best visited at sunset.",
    category: "Historic",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Narikala+Fortress+Tbilisi",
    tags: ["historic", "views", "walking"],
    emoji: "🏰",
    duration: "1–2 hours"
  },
  {
    name: "Abanotubani (Sulfur Baths)",
    description: "Tbilisi's iconic sulfur bath district — the city was actually founded around these natural hot springs. Book a private domed bathhouse for a uniquely relaxing experience.",
    category: "Experience",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Abanotubani+Tbilisi",
    tags: ["spa", "cultural", "unique"],
    emoji: "♨️",
    duration: "1–3 hours"
  },
  {
    name: "Holy Trinity Cathedral (Sameba)",
    description: "Georgia's largest cathedral and a powerful symbol of the nation. The golden dome visible from across the city, with peaceful surrounding grounds and stunning architecture.",
    category: "Landmark",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Sameba+Cathedral+Tbilisi",
    tags: ["architecture", "spiritual", "landmark"],
    emoji: "⛪",
    duration: "30–60 min"
  },
  {
    name: "Bridge of Peace",
    description: "A striking contemporary glass-and-steel pedestrian bridge over the Mtkvari River. Gorgeous at any hour, but truly magical when illuminated at night.",
    category: "Architecture",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Bridge+of+Peace+Tbilisi",
    tags: ["architecture", "modern", "night"],
    emoji: "🌉",
    duration: "20–30 min"
  },
  {
    name: "Old Town (Kala)",
    description: "Wander cobblestone streets lined with colorful carved wooden balconies, artisan shops, wine cellars, and centuries of layered history. The soul of Tbilisi.",
    category: "Neighborhood",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Old+Town+Tbilisi",
    tags: ["walking", "culture", "history"],
    emoji: "🏘️",
    duration: "2–4 hours"
  },
  {
    name: "Fabrika",
    description: "A former Soviet sewing factory transformed into Tbilisi's coolest creative hub — artisan bars, international restaurants, vintage boutiques, and a lively courtyard.",
    category: "Culture",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Fabrika+Tbilisi",
    tags: ["creative", "bars", "hipster"],
    emoji: "🏭",
    duration: "2–3 hours"
  },
  {
    name: "Mtatsminda Park",
    description: "Ride the historic funicular to Tbilisi's hilltop park for spectacular 360° city views, a Ferris wheel, and the best photography spots in the entire city.",
    category: "Scenic",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Mtatsminda+Park+Tbilisi",
    tags: ["views", "funicular", "scenic"],
    emoji: "🎡",
    duration: "2–3 hours"
  },
  {
    name: "National Museum of Georgia",
    description: "Explore 3 million years of history — from prehistoric humans to the legendary Golden Fleece collection and a sobering Soviet occupation gallery.",
    category: "Museum",
    mapLink: "https://www.google.com/maps/search/?api=1&query=National+Museum+Georgia+Rustaveli+Tbilisi",
    tags: ["museum", "history", "culture"],
    emoji: "🏛️",
    duration: "2–3 hours"
  },
  {
    name: "Rustaveli Avenue",
    description: "Tbilisi's grand main boulevard lined with theatres, galleries, elegant architecture, and pavement cafés. A perfect evening stroll through the cultural heart of the city.",
    category: "Neighborhood",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Rustaveli+Avenue+Tbilisi",
    tags: ["walking", "culture", "shopping"],
    emoji: "🛤️",
    duration: "1–2 hours"
  },
  {
    name: "Dry Bridge Market",
    description: "Tbilisi's beloved outdoor flea market — Soviet memorabilia, vintage jewelry, oil paintings, handcrafted silverware, and unusual antiques. A treasure hunter's paradise.",
    category: "Market",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Dry+Bridge+Market+Tbilisi",
    tags: ["market", "souvenirs", "antiques"],
    emoji: "🛒",
    duration: "1–2 hours"
  }
];

const tipsData = [
  {
    emoji: "🚕",
    title: "Getting Around",
    content: "Use <a href='https://bolt.eu' target='_blank'>Bolt</a> or <a href='https://yango.com' target='_blank'>Yango</a> for cheap, reliable rides. The metro covers key areas (₾0.50/ride). Central Tbilisi is very walkable — Old Town to the Bridge of Peace is 10 min on foot."
  },
  {
    emoji: "💰",
    title: "Currency",
    content: "The currency is the Georgian Lari (GEL). Cards are accepted at most restaurants and shops. ATMs are widely available. Avoid exchanging money at the airport — rates in the city center are much better."
  },
  {
    emoji: "🌐",
    title: "Language & Communication",
    content: "Georgian (ქართული) is the official language. English is widely spoken in restaurants, hotels, and shops in central Tbilisi. Google Translate with camera mode works well for menus and signs."
  },
  {
    emoji: "🍷",
    title: "Georgian Wine",
    content: "Georgia invented wine 8,000 years ago. Try amber (orange) wines made in traditional clay vessels called <strong>qvevri</strong>. Must-try varieties: <strong>Rkatsiteli</strong> (white), <strong>Saperavi</strong> (red), and <strong>Mtsvane</strong> (crisp white)."
  },
  {
    emoji: "🥐",
    title: "Must-Try Foods",
    content: "<strong>Khinkali</strong> — juicy soup dumplings (twist off the top, eat from the bottom). <strong>Khachapuri Adjarian</strong> — boat-shaped cheese bread with egg. <strong>Churchkhela</strong> — walnut candy. <strong>Mtsvadi</strong> — Georgian BBQ skewers."
  },
  {
    emoji: "📱",
    title: "Connectivity",
    content: "WiFi is fast and free in almost every café and restaurant. Local SIM cards are cheap and easy to get at the airport (Magti or Geocell). Excellent LTE coverage across the city."
  },
  {
    emoji: "🌡️",
    title: "Weather",
    content: "Tbilisi has hot, dry summers (28–36°C) and cool winters. The ideal seasons are <strong>spring (April–June)</strong> and <strong>autumn (September–November)</strong> — warm, clear days and beautiful foliage."
  },
  {
    emoji: "🏨",
    title: "Best Neighborhoods",
    content: "<strong>Old Town</strong> — maximum atmosphere. <strong>Vera</strong> — quiet, bohemian, boutique feel. <strong>Vake</strong> — leafy, upscale, residential. All are within 15–20 min of the main attractions."
  }
];

// ========================================================
//  RENDER FUNCTIONS
// ========================================================

const mealLabels = {
  breakfast: "🌅 Breakfast",
  lunch: "☀️ Lunch",
  dinner: "🌙 Dinner"
};

function renderFoodCards(filter = "all") {
  const container = document.getElementById("food-cards");
  container.innerHTML = "";

  foodData.forEach(place => {
    const visible = filter === "all" || place.meals.includes(filter);
    if (!visible) return;

    const mealTagsHTML = place.meals
      .map(m => `<span class="meal-tag">${mealLabels[m]}</span>`)
      .join("");

    const tagsHTML = place.tags
      .map(t => `<span class="tag">${t}</span>`)
      .join("");

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-emoji-header">
        <div class="card-emoji">${place.emoji}</div>
        <div class="card-meta">
          <div class="card-name">${place.name}</div>
          <div class="card-cuisine">${place.cuisine}</div>
        </div>
      </div>
      <div class="card-body">
        <p class="card-description">${place.description}</p>
        <div class="meal-tags">${mealTagsHTML}</div>
        <div class="card-tags">${tagsHTML}</div>
      </div>
      <div class="card-footer">
        <a href="${place.mapLink}" target="_blank" rel="noopener noreferrer" class="map-btn">
          📍 View on Map
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderSightseeingCards() {
  const container = document.getElementById("sight-cards");
  container.innerHTML = "";

  sightseeingData.forEach(place => {
    const tagsHTML = place.tags
      .map(t => `<span class="tag">${t}</span>`)
      .join("");

    const card = document.createElement("div");
    card.className = "card sight-card";
    card.innerHTML = `
      <div class="card-emoji-header">
        <div class="card-emoji">${place.emoji}</div>
        <div class="card-meta">
          <div class="card-name">${place.name}</div>
          <div class="card-cuisine">${place.category}</div>
        </div>
      </div>
      <div class="card-body">
        <p class="card-description">${place.description}</p>
        <div class="meal-tags">
          <span class="meal-tag">⏱ ${place.duration}</span>
        </div>
        <div class="card-tags">${tagsHTML}</div>
      </div>
      <div class="card-footer">
        <a href="${place.mapLink}" target="_blank" rel="noopener noreferrer" class="map-btn">
          📍 View on Map
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderTips() {
  const container = document.getElementById("tips-content");
  container.innerHTML = "";

  tipsData.forEach(tip => {
    const card = document.createElement("div");
    card.className = "tip-card";
    card.innerHTML = `
      <span class="tip-icon">${tip.emoji}</span>
      <div class="tip-title">${tip.title}</div>
      <div class="tip-content">${tip.content}</div>
    `;
    container.appendChild(card);
  });
}

// ========================================================
//  EVENT HANDLERS
// ========================================================

// Main section tabs
document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    document.getElementById(btn.dataset.section).classList.add("active");
  });
});

// Food meal filters
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderFoodCards(btn.dataset.filter);
  });
});

// ========================================================
//  INIT
// ========================================================
renderFoodCards("all");
renderSightseeingCards();
renderTips();

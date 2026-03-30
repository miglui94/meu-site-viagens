type Circuit = {
  title: string;
  duration: string;
  price: string;
  description: string;
  image: string;
  highlights: string[];
  itinerary: string[];
};

const circuitos: Record<string, Circuit> = {
  "marrakech-desert": {
    title: "Marrakech & Desert",
    duration: "5 days",
    price: "From 699€",
    description:
      "An intense journey between the energy of Marrakech, the Atlas landscapes and the unforgettable experience of sleeping in the desert.",
    image:
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70",
    highlights: [
      "Guided tour in Marrakech",
      "Atlas Mountains crossing",
      "Desert camp experience",
      "Camel ride at sunset",
    ],
    itinerary: [
      "Day 1: Arrival in Marrakech and free time to explore the medina.",
      "Day 2: Guided visit to Marrakech main attractions.",
      "Day 3: Journey towards the desert through the Atlas and Berber villages.",
      "Day 4: Desert experience with camel ride and overnight in camp.",
      "Day 5: Return and end of the tour.",
    ],
  },

  "imperial-cities": {
    title: "Imperial Cities",
    duration: "7 days",
    price: "From 949€",
    description:
      "A cultural journey through Morocco’s most iconic cities, focused on history, architecture and traditions.",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada",
    highlights: [
      "Casablanca, Rabat, Fez and Marrakech",
      "Historic medinas and palaces",
      "Culture and gastronomy",
      "Professional guide",
    ],
    itinerary: [
      "Day 1: Arrival in Casablanca.",
      "Day 2: Visit to Rabat.",
      "Day 3: Travel to Fez.",
      "Day 4: Full day in Fez.",
      "Day 5: Journey to Marrakech.",
      "Day 6: Guided tour in Marrakech.",
      "Day 7: End of the tour.",
    ],
  },

  "complete-morocco": {
    title: "Complete Morocco",
    duration: "10 days",
    price: "From 1290€",
    description:
      "A complete journey to explore Morocco’s cities, mountains, desert and coast.",
    image:
      "https://images.unsplash.com/photo-1489493887464-892be6d1daae",
    highlights: [
      "Full Morocco experience",
      "Cities and desert",
      "Diverse landscapes",
      "Perfect for first-time visitors",
    ],
    itinerary: [
      "Day 1: Arrival.",
      "Day 2–3: Cultural visits.",
      "Day 4–5: Desert experience.",
      "Day 6–7: Historical routes.",
      "Day 8–9: Exploration and free time.",
      "Day 10: End of the trip.",
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CircuitoPage({ params }: Props) {
  const { slug } = await params;
  const circuito = circuitos[slug];

  if (!circuito) {
    return (
      <main style={{ padding: "40px" }}>
        <h1>Tour not found</h1>
        <a href="/en" style={{ marginTop: "20px", display: "inline-block" }}>
          ← Back
        </a>
      </main>
    );
  }

  return (
    <main className="circuitPage">
      <div
        className="circuitHero"
        style={{ backgroundImage: `url(${circuito.image})` }}
      >
        <div className="circuitHeroOverlay">
          <p className="sectionTag lightTag">Morocco Tour</p>
          <h1>{circuito.title}</h1>
          <p className="circuitLead">{circuito.description}</p>

          <div className="circuitMeta">
            <span className="badgeHero">{circuito.duration}</span>
            <span className="priceTag">{circuito.price}</span>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="circuitSection">
          <h2>Highlights</h2>
          <ul className="circuitList">
            {circuito.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="circuitSection">
          <h2>Itinerary</h2>
          <div className="itinerary">
            {circuito.itinerary.map((day) => (
              <div key={day} className="itineraryItem">
                {day}
              </div>
            ))}
          </div>
        </section>

        <a href="/en" className="backLink">
          ← Back to home page
        </a>
      </div>
    </main>
  );
}
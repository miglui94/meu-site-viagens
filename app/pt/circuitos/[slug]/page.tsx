const circuitos: Record<
  string,
  {
    title: string;
    duration: string;
    price: string;
    description: string;
    image: string;
    highlights: string[];
    itinerary: string[];
  }
> = {
  "marrakech-deserto": {
    title: "Marrakech & Deserto",
    duration: "5 dias",
    price: "Desde 699€",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70",
    description:
      "Uma viagem intensa entre a energia de Marrakech, as paisagens do Atlas e a experiência inesquecível de dormir no deserto.",
    highlights: [
      "Visita guiada em Marrakech",
      "Travessia das montanhas do Atlas",
      "Noite em acampamento no deserto",
      "Passeio de camelo ao pôr do sol",
    ],
    itinerary: [
      "Dia 1: Chegada a Marrakech e tempo livre para primeira descoberta da medina.",
      "Dia 2: Visita aos principais pontos de interesse de Marrakech com guia local.",
      "Dia 3: Partida em direção ao deserto, atravessando o Atlas e várias aldeias berberes.",
      "Dia 4: Experiência no deserto com passeio de camelo e noite sob as estrelas.",
      "Dia 5: Regresso e fim do circuito.",
    ],
  },

  "cidades-imperiais": {
    title: "Cidades Imperiais",
    duration: "7 dias",
    price: "Desde 949€",
    image: "https://images.unsplash.com/photo-1489493887464-892be6d1daae",
    description:
      "Um circuito cultural por algumas das cidades mais emblemáticas de Marrocos, com foco na história, arquitetura e tradições locais.",
    highlights: [
      "Casablanca, Rabat, Fez e Marrakech",
      "Medinas históricas e palácios",
      "Cultura, gastronomia e tradição",
      "Acompanhamento com guia especializado",
    ],
    itinerary: [
      "Dia 1: Chegada a Casablanca e visita panorâmica.",
      "Dia 2: Continuação para Rabat, com visita aos principais monumentos.",
      "Dia 3: Viagem até Fez e primeiros contactos com a cidade.",
      "Dia 4: Dia completo em Fez, incluindo medina e zonas históricas.",
      "Dia 5: Deslocação para Marrakech com paragens pelo caminho.",
      "Dia 6: Visita guiada em Marrakech.",
      "Dia 7: Tempo livre e fim do circuito.",
    ],
  },

  "marrocos-completo": {
    title: "Marrocos Completo",
    duration: "10 dias",
    price: "Desde 1290€",
    image: "https://images.unsplash.com/photo-1526779259212-939e64788e3c",
    description:
      "Uma viagem completa para quem quer conhecer várias faces de Marrocos: cidades, montanhas, deserto e costa.",
    highlights: [
      "Circuito mais completo",
      "Cidades imperiais e deserto",
      "Paisagens variadas",
      "Ideal para primeira grande viagem a Marrocos",
    ],
    itinerary: [
      "Dia 1: Chegada e acolhimento.",
      "Dia 2: Visita cultural à primeira cidade do circuito.",
      "Dia 3: Continuação por aldeias e paisagens montanhosas.",
      "Dia 4: Entrada na zona do deserto.",
      "Dia 5: Experiência no Saara.",
      "Dia 6: Regresso com paragens em pontos históricos.",
      "Dia 7: Exploração de nova cidade imperial.",
      "Dia 8: Dia dedicado à cultura e gastronomia local.",
      "Dia 9: Tempo livre e últimas compras.",
      "Dia 10: Fim da viagem.",
    ],
  },
};

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CircuitoPage({ params }: Props) {
  const { slug } = await params;
  const circuito = circuitos[slug];

  if (!circuito) {
    return (
      <main style={{ padding: "40px" }}>
        <h1>Circuito não encontrado</h1>
        <a href="/pt" style={{ marginTop: "20px", display: "inline-block" }}>
          ← Voltar
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
            <p className="sectionTag lightTag">Circuito em Marrocos</p>
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
          <h2>Destaques</h2>
          <ul className="circuitList">
            {circuito.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="circuitSection">
          <h2>Itinerário</h2>
          <div className="itinerary">
            {circuito.itinerary.map((day) => (
              <div className="itineraryItem" key={day}>
                {day}
              </div>
            ))}
          </div>
        </section>

        <a href="/pt" className="backLink">
          ← Voltar à página inicial
        </a>
      </div>
    </main>
  );
}
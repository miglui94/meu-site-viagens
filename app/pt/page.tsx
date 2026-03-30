import TourCard from "../../components/TourCard";

export default function Home() {
  const tours = [
    {
      title: "Marrakech & Deserto",
      duration: "5 dias",
      description:
        "Descobre os souks, o Atlas e dorme no deserto sob as estrelas.",
      image:
        "https://images.unsplash.com/photo-1539020140153-e479b8c22e70",
    },
    {
      title: "Cidades Imperiais",
      duration: "7 dias",
      description:
        "Explora Casablanca, Rabat, Fez e Marrakech numa viagem cultural.",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada",
    },
    {
      title: "Marrocos Completo",
      duration: "10 dias",
      description:
        "Um circuito completo entre medinas, montanhas, deserto e costa.",
      image:
        "https://images.unsplash.com/photo-1489493887464-892be6d1daae",
    },
  ];

  return (
    <>
      <main>
        <section className="hero">
          <div className="overlay">
            <p className="eyebrow">Circuitos em Marrocos</p>
            <h1>Vive a magia de Marrocos</h1>
            <p className="subtitle">
              Descobre cidades imperiais, o deserto do Saara, kasbahs históricas
              e paisagens inesquecíveis em circuitos pensados ao detalhe.
            </p>

            <div className="heroButtons">
              <a href="#circuitos" className="primaryBtn">
                Ver circuitos
              </a>
              <a href="#contacto" className="secondaryBtn">
                Pedir orçamento
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="sectionHeader">
              <p className="sectionTag">Experiências</p>
              <h2>Circuitos em destaque</h2>
              <p>
                Escolhe entre programas curtos ou viagens mais completas por
                alguns dos locais mais icónicos de Marrocos.
              </p>
            </div>

            <div className="cards" id="circuitos">
              {tours.map((tour) => (
                <TourCard key={tour.title} {...tour} buttonText="Ver programa" />
              ))}
            </div>
          </div>
        </section>

        <section className="section altSection">
          <div className="container features">
            <div>
              <p className="sectionTag">Porquê escolher-nos</p>
              <h2>Uma viagem pensada para ti</h2>
              <p className="featureIntro">
                Criamos experiências autênticas, confortáveis e memoráveis, com
                foco na cultura, segurança e qualidade.
              </p>
            </div>

            <div className="featureGrid">
              <div className="featureBox">
                <h3>Guias locais</h3>
                <p>Conhece Marrocos com quem vive e conhece verdadeiramente o destino.</p>
              </div>
              <div className="featureBox">
                <h3>Roteiros completos</h3>
                <p>Da medina ao deserto, com equilíbrio entre cultura, descanso e aventura.</p>
              </div>
              <div className="featureBox">
                <h3>Alojamento selecionado</h3>
                <p>Riads encantadores, hotéis confortáveis e experiências no deserto.</p>
              </div>
              <div className="featureBox">
                <h3>Apoio personalizado</h3>
                <p>Acompanhamento antes da viagem e ajuda na escolha do melhor circuito.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container testimonials">
            <div className="sectionHeader">
              <p className="sectionTag">Testemunhos</p>
              <h2>O que dizem os viajantes</h2>
            </div>

            <div className="cards">
              <article className="card testimonialCard">
                <p>
                  “Uma experiência incrível. O passeio no deserto foi o ponto alto
                  da viagem e toda a organização foi excelente.”
                </p>
                <strong>Ana & Ricardo</strong>
              </article>

              <article className="card testimonialCard">
                <p>
                  “Fez, Marrakech e o Atlas numa viagem super bem equilibrada.
                  Recomendamos totalmente.”
                </p>
                <strong>Sofia Martins</strong>
              </article>

              <article className="card testimonialCard">
                <p>
                  “Sentimo-nos sempre acompanhados e seguros. Marrocos superou as
                  expectativas.”
                </p>
                <strong>João e Catarina</strong>
              </article>
            </div>
          </div>
        </section>

        <section className="contactSection" id="contacto">
          <div className="container contactBox">
            <div>
              <p className="sectionTag lightTag">Pedido de informação</p>
              <h2>Planeia o teu circuito em Marrocos</h2>
              <p>
                Diz-nos quantos dias tens disponíveis e que tipo de experiência
                procuras. Preparamos uma proposta à tua medida.
              </p>
            </div>

            <form className="contactForm">
              <input type="text" placeholder="Nome" />
              <input type="email" placeholder="E-mail" />
              <input type="text" placeholder="Número de dias pretendido" />
              <textarea placeholder="Conta-nos que tipo de circuito procuras"></textarea>
              <button type="submit" className="primaryBtn">
                Enviar pedido
              </button>
            </form>
          </div>
        </section>
      </main>
    </>  
  );
}
import Navbar from "../../components/Navbar";
import TourCard from "../../components/TourCard";

export default function Home() {
  const tours = [
    {
      title: "Marrakech & Desert",
      duration: "5 days",
      description:
        "Discover the souks, the Atlas Mountains and sleep under the stars in the desert.",
      image:
        "https://images.unsplash.com/photo-1539020140153-e479b8c22e70",
    },
    {
      title: "Imperial Cities",
      duration: "7 days",
      description:
        "Explore Casablanca, Rabat, Fez and Marrakech on a cultural journey.",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada",
    },
    {
      title: "Complete Morocco",
      duration: "10 days",
      description:
        "A complete tour through medinas, mountains, desert and coast.",
      image:
        "https://images.unsplash.com/photo-1489493887464-892be6d1daae",
    },
  ];

  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="overlay">
            <p className="eyebrow">Morocco Tours</p>
            <h1>Experience the magic of Morocco</h1>
            <p className="subtitle">
              Discover imperial cities, the Sahara desert, historic kasbahs and
              unforgettable landscapes in carefully designed tours.
            </p>

            <div className="heroButtons">
              <a href="#tours" className="primaryBtn">
                View tours
              </a>
              <a href="#contact" className="secondaryBtn">
                Request a quote
              </a>
            </div>
          </div>
        </section>

        {/* TOURS */}
        <section className="section">
          <div className="container">
            <div className="sectionHeader">
              <p className="sectionTag">Experiences</p>
              <h2>Featured tours</h2>
              <p>
                Choose from short programs or more complete journeys through
                Morocco’s most iconic locations.
              </p>
            </div>

            <div className="cards" id="tours">
              {tours.map((tour) => (
                <TourCard key={tour.title} {...tour} buttonText="View program" />
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section altSection">
          <div className="container features">
            <div>
              <p className="sectionTag">Why choose us</p>
              <h2>A journey designed for you</h2>
              <p className="featureIntro">
                We create authentic, comfortable and memorable experiences with
                a strong focus on culture, safety and quality.
              </p>
            </div>

            <div className="featureGrid">
              <div className="featureBox">
                <h3>Local guides</h3>
                <p>
                  Discover Morocco with people who truly know the destination.
                </p>
              </div>
              <div className="featureBox">
                <h3>Complete itineraries</h3>
                <p>
                  From medinas to the desert, with the perfect balance between
                  culture, relaxation and adventure.
                </p>
              </div>
              <div className="featureBox">
                <h3>Selected accommodations</h3>
                <p>
                  Charming riads, comfortable hotels and unique desert stays.
                </p>
              </div>
              <div className="featureBox">
                <h3>Personal support</h3>
                <p>
                  Assistance before your trip and help choosing the perfect
                  itinerary.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section">
          <div className="container testimonials">
            <div className="sectionHeader">
              <p className="sectionTag">Testimonials</p>
              <h2>What travelers say</h2>
            </div>

            <div className="cards">
              <article className="card testimonialCard">
                <p>
                  “An incredible experience. The desert tour was the highlight
                  and everything was perfectly organized.”
                </p>
                <strong>Ana & Ricardo</strong>
              </article>

              <article className="card testimonialCard">
                <p>
                  “Fez, Marrakech and the Atlas in a perfectly balanced trip.
                  Highly recommended.”
                </p>
                <strong>Sofia Martins</strong>
              </article>

              <article className="card testimonialCard">
                <p>
                  “We always felt supported and safe. Morocco exceeded all
                  expectations.”
                </p>
                <strong>João & Catarina</strong>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contactSection" id="contact">
          <div className="container contactBox">
            <div>
              <p className="sectionTag lightTag">Information request</p>
              <h2>Plan your Morocco tour</h2>
              <p>
                Tell us how many days you have and what type of experience you
                are looking for. We will prepare a tailored proposal for you.
              </p>
            </div>

            <form className="contactForm">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Number of days" />
              <textarea placeholder="Tell us what kind of tour you are looking for"></textarea>
              <button type="submit" className="primaryBtn">
                Send request
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
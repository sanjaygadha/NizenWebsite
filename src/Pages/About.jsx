import Footer from '../Components/Footer';
import '../Styles/About.css';

function About() {
  return (
    <div className="about">
      {/* Section 1: Our Story */}
      <section className="story-section">
        <h2>Our Story</h2>
        <p>
          Founded in 2010, Nizen Lifesciences Pvt Ltd has grown into a trusted name in the pharmaceutical industry, 
          dedicated to improving global healthcare through innovation and excellence. Headquartered in India, our journey 
          began with a vision to bridge the gap between cutting-edge science and accessible healthcare solutions. Over the 
          years, we’ve expanded our presence to over 50 countries, delivering high-quality pharmaceutical products that meet 
          the stringent standards of safety and efficacy.
        </p>
        <p>
          Our mission is to empower healthier lives by developing innovative medicines, nutraceuticals, and therapeutic 
          solutions that address unmet medical needs. Guided by our core values of integrity, innovation, and patient-centricity, 
          we strive to make a meaningful impact on the lives of millions. At Nizen Lifesciences, we believe in the power of 
          science to transform lives, and we are committed to pushing the boundaries of what’s possible in healthcare.
        </p>
      </section>

      {/* Section 2: Our Team */}
      <section className="team-section">
        <h2>Our Team</h2>
        <p>
          At the heart of Nizen Lifesciences is a team of passionate professionals, including scientists, researchers, 
          and industry experts, who bring decades of collective experience to the table. Our leadership team comprises 
          visionaries with a deep understanding of pharmaceutical innovation, ensuring that every product we develop adheres 
          to the highest global standards.
        </p>
        <p>
          Our R&D team is at the forefront of drug discovery and development, working tirelessly to create solutions that 
          address complex health challenges. Supported by a dedicated quality assurance team, we ensure that every product 
          leaving our facilities is safe, effective, and reliable. Together, our team is united by a shared commitment to 
          advancing healthcare and making a positive difference in the lives of patients worldwide.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
import { Carousel } from 'antd';
import 'antd/dist/reset.css';
import '../Styles/Home.css';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div className="home">
      {/* Section 1: Slider */}
      <section className="slider-section">
        <Carousel autoplay effect="fade" className="carousel">
          {/* <div>
            <img src="src/assets/img1.jpg" alt="Doctor Consultation" className="carousel-image" />
          </div> */}
          <div>
            <img src="src/assets/desktop-wallpaper-a-complete-list-of-pharma-blogs-and-websites-for-guest-posting-for-your-mobile-tablet-explore-pharma-pharma.jpg" alt="Medication Overview" className="carousel-image" />
          </div>
          <div>
            <img src="src/assets/pharma-manufacturing-challenges-1536x861.jpg" alt="Prescription Handover" className="carousel-image" />
          </div>
          <div>
            <img src="src/assets/imag4.jpg" alt="Prescription Handover" className="carousel-image" />
          </div>
        </Carousel>
      </section>

      {/* Section 2: Welcome */}
      <section className="welcome-section">
        <h2>Welcome to Nizen Lifesciences Pvt Ltd</h2>
        <p>
          At Nizen Lifesciences, we are committed to advancing healthcare through innovation and excellence. 
          As a leading pharmaceutical company, we specialize in developing high-quality, science-driven solutions 
          to improve lives globally. Our mission is to deliver trusted products and services that meet the highest 
          standards of safety and efficacy.
        </p>
        <a href="/about" className="cta-button">Learn More</a>
      </section>

      {/* Section 3: Our Services */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Drug Discovery</h3>
            <p>Leveraging cutting-edge research to develop innovative pharmaceutical solutions.</p>
          </div>
          <div className="service-card">
            <h3>Nutraceuticals</h3>
            <p>Creating science-backed nutritional products for better health and wellness.</p>
          </div>
          <div className="service-card">
            <h3>Preclinical Research</h3>
            <p>Conducting rigorous studies to ensure safety and efficacy of new drugs.</p>
          </div>
        </div>
        <a href="/services" className="cta-button">Explore All Services</a>
      </section>

      {/* Section 4: Certifications & Achievements */}
      <section className="certifications-section">
        <h2>Certifications & Achievements</h2>
        <div className="certifications-grid">
          <div className="certification-card">
            <h3>WHO-GMP Certified</h3>
            <p>Adhering to global standards for manufacturing excellence.</p>
          </div>
          <div className="certification-card">
            <h3>ISO 9001:2015</h3>
            <p>Committed to quality management and continuous improvement.</p>
          </div>
          <div className="certification-card">
            <h3>Global Recognition</h3>
            <p>Trusted by partners across 50+ countries for innovative solutions.</p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
}

export default Home;
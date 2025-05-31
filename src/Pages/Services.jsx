import Footer from '../Components/Footer';
import expertiseImage from '../assets/expertiseImage.jpg'; // Placeholder for research/lab image
import impactImage from '../assets/GlobalExpertise.jpg';   // Placeholder for global reach image
import '../Styles/Services.css';

function Services() {
  return (
    <div className="services">
      {/* Section 1: Our Expertise */}
      <section className="expertise-section">
        <h2>Our Expertise</h2>
        <img src={expertiseImage} alt="Pharmaceutical Research and Development" className="section-image" />
        <p>
          At Nizen Lifesciences Pvt Ltd, we provide a comprehensive range of pharmaceutical services to drive innovation and 
          improve patient outcomes. Our expertise lies in **drug development and research**, where we excel in drug discovery, 
          formulation development, and preclinical trials. Using cutting-edge technology, we create innovative medicines, 
          nutraceuticals, and therapeutic solutions tailored to address unmet medical needs.
        </p>
        <p>
          We also offer **contract manufacturing** and **supply chain management**, ensuring seamless production and delivery of 
          high-quality products. Our state-of-the-art facilities adhere to global standards like WHO-GMP, and our team of experienced 
          scientists and quality assurance experts ensures every product meets stringent safety and efficacy requirements. Partner with 
          us to bring groundbreaking healthcare solutions to market efficiently and responsibly.
        </p>
      </section>

      {/* Section 2: Global Impact */}
      <section className="impact-section">
        <h2>Global Impact</h2>
        <img src={impactImage} alt="Global Healthcare Reach" className="section-image" />
        <p>
          Nizen Lifesciences is committed to making a lasting impact on global healthcare, serving providers and patients in over 
          50 countries. Our services ensure the delivery of affordable, high-quality pharmaceutical products to diverse markets, 
          enhancing accessibility worldwide. We support **regulatory compliance** by assisting with approvals and certifications, 
          ensuring our partners meet international standards like WHO-GMP, FDA, and ISO 9001:2015.
        </p>
        <p>
          Through robust **supply chain management**, we facilitate the global distribution of life-saving medications and nutritional 
          supplements, improving the quality of life for millions. Our rigorous **quality assurance** processes guarantee that every 
          product leaving our facilities is safe and effective. By fostering partnerships with healthcare organizations across the globe, 
          we contribute to a healthier future, one patient at a time.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Services;
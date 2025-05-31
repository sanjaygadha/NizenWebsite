import Footer from '../Components/Footer';
import medicinesImage from '../assets/expertiseImage.jpg'; // Placeholder for medicines image
import nutraceuticalsImage from '../assets/pharma-manufacturing-challenges-1536x861.jpg'; // Placeholder for nutraceuticals image
import therapeuticImage from '../assets/desktop-wallpaper-a-complete-list-of-pharma-blogs-and-websites-for-guest-posting-for-your-mobile-tablet-explore-pharma-pharma.jpg'; // Placeholder for therapeutic solutions image
import '../Styles/Products.css';

function Products() {
  return (
    <div className="products">
      {/* Section 1: Medicines */}
      <section className="medicines-section">
        <h2>Medicines</h2>
        <img src={medicinesImage} alt="Pharmaceutical Medicines" className="section-image" />
        <p>
          Nizen Lifesciences Pvt Ltd offers a wide range of pharmaceutical medicines designed to treat various health conditions 
          with efficacy and safety. Our portfolio includes prescription drugs, generic medicines, and over-the-counter (OTC) 
          products, all developed through rigorous research and clinical trials. We specialize in areas such as cardiovascular 
          health, diabetes management, and infectious diseases.
        </p>
        <p>
          Each medicine is manufactured in our state-of-the-art facilities, adhering to global standards like WHO-GMP and FDA 
          regulations. Our commitment to quality ensures that healthcare providers and patients can trust our products to deliver 
          consistent results. Explore our medicine range to find solutions that improve lives and promote well-being.
        </p>
      </section>

      {/* Section 2: Nutraceuticals */}
      <section className="nutraceuticals-section">
        <h2>Nutraceuticals</h2>
        <img src={nutraceuticalsImage} alt="Nutritional Supplements" className="section-image" />
        <p>
          Our nutraceutical products are formulated to support overall health and wellness, addressing nutritional deficiencies 
          and enhancing vitality. Nizen Lifesciences offers a variety of supplements, including vitamins, minerals, probiotics, 
          and herbal extracts, all backed by scientific research and quality assurance.
        </p>
        <p>
          Whether it’s boosting immunity, improving digestive health, or supporting joint and bone health, our nutraceuticals are 
          designed to complement a healthy lifestyle. Manufactured under strict quality controls, our products meet international 
          standards, ensuring safety and efficacy for consumers worldwide.
        </p>
      </section>

      {/* Section 3: Therapeutic Solutions */}
      <section className="therapeutic-section">
        <h2>Therapeutic Solutions</h2>
        <img src={therapeuticImage} alt="Therapeutic Solutions" className="section-image" />
        <p>
          Nizen Lifesciences provides specialized therapeutic solutions to address complex medical conditions with precision and 
          care. Our therapeutic products include biologics, oncology treatments, and advanced therapies for chronic diseases such 
          as cancer, autoimmune disorders, and neurological conditions.
        </p>
        <p>
          Leveraging cutting-edge technology and partnerships with leading research institutions, we develop innovative therapies 
          that offer new hope to patients. Our focus on personalized medicine ensures that our solutions are tailored to meet the 
          unique needs of individuals, delivering better outcomes and improving quality of life.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Products;
import Footer from '../Components/Footer';
import careerImage from '../assets/JoinImage.jpeg'; // Placeholder for workplace/team image
import '../Styles/Career.css';

function Career() {
  const handleApply = (jobTitle) => {
    // Simulate apply action (non-functional due to sandbox restrictions)
    alert(`Application for ${jobTitle} clicked! Please email your resume to careers@nizenlifesciences.com.`);
  };

  return (
    <div className="career">
      {/* Section: Join Our Team */}
      <section className="career-section">
        <h2>Join Our Team</h2>
        <img src={careerImage} alt="Join Our Team at Nizen Lifesciences" className="career-image" />
        <p className="career-intro">
          At Nizen Lifesciences Pvt Ltd, we are passionate about advancing healthcare through innovation and excellence. Join our 
          team to make a meaningful impact on global health while growing your career in a dynamic and supportive environment. We 
          are looking for talented individuals who share our commitment to quality and patient-centricity.
        </p>

        <div className="job-openings">
          {/* Job Opening 1: Senior Research Scientist */}
          <div className="job-card">
            <h3>Senior Research Scientist</h3>
            <p className="job-location">Location: Chandigarh, India</p>
            <p className="job-description">
              We are seeking a Senior Research Scientist to lead drug discovery and preclinical research projects. You will work 
              closely with our R&D team to develop innovative pharmaceutical solutions, ensuring compliance with global standards. 
              Ideal candidates should have a Ph.D. in a related field and 5+ years of experience in drug development.
            </p>
            <button onClick={() => handleApply('Senior Research Scientist')}>Apply Now</button>
          </div>

          {/* Job Opening 2: Quality Assurance Manager */}
          <div className="job-card">
            <h3>Quality Assurance Manager</h3>
            <p className="job-location">Location: Mumbai, India</p>
            <p className="job-description">
              As a Quality Assurance Manager, you will oversee quality control processes and ensure compliance with WHO-GMP and FDA 
              regulations. Your role will involve managing audits, implementing quality systems, and leading a team to maintain the 
              highest standards of product safety and efficacy. A minimum of 7 years of experience in QA is required.
            </p>
            <button onClick={() => handleApply('Quality Assurance Manager')}>Apply Now</button>
          </div>

          {/* Job Opening 3: Sales Representative (Pharma) */}
          <div className="job-card">
            <h3>Sales Representative (Pharma)</h3>
            <p className="job-location">Location: Bangalore, India</p>
            <p className="job-description">
              We are looking for a Sales Representative to drive sales of our pharmaceutical products in the southern region. You 
              will build relationships with healthcare providers, promote our products, and achieve sales targets. Candidates should 
              have a Bachelor’s degree and 3+ years of experience in pharmaceutical sales.
            </p>
            <button onClick={() => handleApply('Sales Representative (Pharma)')}>Apply Now</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Career;
import { useState } from 'react';
import { Modal } from 'antd'; // Import Modal from antd
import Footer from '../Components/Footer';
import contactImage from '../assets/GlobalExpertise.jpg'; // Placeholder for office/map image
import 'antd/dist/reset.css'; // Ensure antd styles are included
import '../Styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility
  const [isFormValid, setIsFormValid] = useState(true); // State to track form validation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form: check if any required field is empty
    const isValid = formData.name && formData.email && formData.subject && formData.message;
    setIsFormValid(isValid);
    setIsModalVisible(true); // Show modal regardless of validation

    // Reset form only if validation passes
    if (isValid) {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const handleModalOk = () => {
    setIsModalVisible(false); // Close the modal
  };

  return (
    <div className="contact">
      {/* Section: Get in Touch */}
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <img src={contactImage} alt="Office Location" className="contact-image" />
            <h3>Location</h3>
            <p>Nizen Lifesciences Pvt Ltd<br />
               123 Pharma Park, Industrial Area Phase II<br />
               Chandigarh, Punjab 160002, India</p>
            
            <h3>Office Email</h3>
            <p><a href="mailto:info@nizenlifesciences.com">info@nizenlifesciences.com</a></p>
            
            <h3>Contact Numbers</h3>
            <p>General Inquiries: +91 172 123 4567</p>
            <p>Sales: +91 172 123 4568</p>
            <p>Support: +91 172 123 4569</p>
          </div>

          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <div className="form-container">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for form submission feedback */}
      <Modal
        title={isFormValid ? "Message Sent" : "Form Error"}
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalOk}
        okText="OK"
        cancelButtonProps={{ style: { display: 'none' } }} // Hide cancel button
        okButtonProps={{ style: { backgroundColor: '#004aad', borderColor: '#004aad' } }} // Style the OK button
      >
        <p>
          {isFormValid
            ? "Thank you for your message! We will get back to you soon."
            : "Please fill out all required fields."}
        </p>
      </Modal>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Contact;
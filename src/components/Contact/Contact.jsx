import { useState } from 'react';
import { useContactFormSubmit } from './useFormSubmit'
import Navbar from '../Navbar';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const { submitContactForm } = useContactFormSubmit();

  const handleChange = (e) => {
    console.log(`Entering change for ${e.target.name}`)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    submitContactForm(e, setStatus, setFormData, setSubmitted)
  };

  return (
    <>
      <Navbar includeProjectsLink={false} />
      <div className="introduction">
        <img id="main-image-atlanta" src="../Atlanta.png" alt="main" />
        <img id="main-image-mobile" src="../MobileBackground.png" alt="main" />
        <form className="contact-form container" onSubmit={handleSubmit}>
          <h5>Enter your information below:</h5>

          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          /><br />

          {!submitted && (
            <button id="contact-form-button" type="submit">
              Submit
            </button>
          )}

          {status === 'success' && (
            <p id="status" className="submit-success">
              Your contact request was submitted. Thanks!
            </p>
          )}
          {status === 'error' && (
            <p id="status" className="submit-failure">
              There was a problem submitting your information.
            </p>
          )}
        </form>
      </div>
    </>
  );
}

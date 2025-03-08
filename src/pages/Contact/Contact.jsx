//Import dependencies
import { useState } from 'react';
import './Contact.css';

 // State management for form data and error messages
function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    //Email validation
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

 // Form submission handler with validation and submission logic
 const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
        setErrorMessage('All fields are required');
        return;
    }

    // Validate email format
    if (!validateEmail(formData.email)) {
        setErrorMessage('Please enter a valid email');
        return;
    }

    try {
       const response = await fetch('your-formspree-endpoint', {
        method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(formData)
       });

       //Check if response was successful
        if (response.ok) {
            // Show success message
            setFormData({ name: '', email: '', message: '' });
            setErrorMessage('');
            alert('Message sent successfully!');
        }
    } catch (error) {
        setErrorMessage('Failed to send message. Please try again.');
    }
};


    return (
        <section className="contact">
            <h2>Contact Me</h2>
            <div className="contact-content">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Enter your message"
                            rows="5"
                        />
                    </div>

                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
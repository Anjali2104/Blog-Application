import React, { useState } from 'react';
import './contact.css'
import emailjs from 'emailjs-com';
export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = 'service_99v5o4r';
    const templateID = 'template_gq65to9';
    const userID = 'yngn9bIpzTUWQ0kDm';
    const templateParams = {
      from_name: name,
      from_email: email,
      message,
   
  };
  emailjs.send(serviceID, templateID, templateParams, userID)
  .then((response) => {
    console.log('Email sent:', response);
    alert('Your message has been sent successfully!');
    // Clear form fields after successful submission
    setName('');
    setEmail('');
    setMessage('');
  })
  .catch((error) => {
    console.error('Error sending email:', error);
    alert('Oops! Something went wrong. Please try again later.');
  });
};

  return (
   <div className="conatct">
       <div className='contact-container'>
          <h2 className='contact-heading'>Contact Us</h2>
          <form onSubmit={handleSubmit}>
          <div>
            <label className='contact-form-label'>Name:</label>
            <input className='contact-form-input' type="text"  value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label className='contact-form-label'>Email:</label>
            <input className='contact-form-input' type="email"   value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
         <div>
            <label className='contact-form-label'>Message:</label>
            <textarea  className='contact-form-textarea' value={message} onChange={(e) => setMessage(e.target.value)} />
         </div>
            <button  className='contact-form-button' type="submit">Send</button>
         </form>
      </div>
   </div>
  );
};



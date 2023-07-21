import React from 'react';

export default function ContactForm() {

  return (
      <form
       action="https://formspree.io/f/xrgwgrdb" 
       method="POST">
      <input
      id='name'
      type="text"
      name="Name"
      placeholder='Enter Your Name'
      required
      />
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Enter email'
        required
      />
 
      <textarea
        id="message"
        name="message"
        placeholder='Type Message'
      />
   
      <button >
        Submit
      </button>
    </form>
  );
}

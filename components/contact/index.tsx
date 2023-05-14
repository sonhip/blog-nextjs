import React, { ChangeEventHandler, useState } from 'react';
import classes from './contact.module.css';
type formData = {
  email: string;
  name: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<formData>({
    email: '',
    name: '',
    message: '',
  });
  function handleChangeInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log(' :>> ');
    e.preventDefault();
    // validate on FE

    fetch('api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email address..."
              required
              value={formData.email}
              onChange={handleChangeInput}
              name="email"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name..."
              required
              value={formData.name}
              onChange={handleChangeInput}
              name="name"
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            required
            id="message"
            placeholder="Your message..."
            rows={5}
            value={formData.message}
            onChange={handleChangeInput}
            name="message"
          />
        </div>
        <div className={classes.control}>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
}

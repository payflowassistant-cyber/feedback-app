import { useState } from 'react';

export default function Feedback() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    alert('Thanks for your feedback!');
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>We’d love your feedback</h1>
      <input name="name" placeholder="Your Name" onChange={handleChange} /><br />
      <input name="email" placeholder="Your Email" onChange={handleChange} /><br />
      <textarea name="message" placeholder="Your Feedback" onChange={handleChange}></textarea><br />
      <button type="submit">Send Feedback</button>
    </form>
  );
}

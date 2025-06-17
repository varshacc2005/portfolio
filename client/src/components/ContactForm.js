import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || '❌ Failed to send message');
      }
    } catch (err) {
      setStatus('❌ Error sending message. Please try again later.');
    }
  };

  return (
    <section
      id="contact"
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '3rem 2rem',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#333' }}>📬 Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
      >
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Full Name"
          style={inputStyle}
        />

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email Address"
          style={inputStyle}
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Your Message"
          rows="5"
          style={{ ...inputStyle, resize: 'vertical' }}
        />

        <button
          type="submit"
          style={{
            padding: '0.9rem 1.5rem',
            borderRadius: '6px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = '#0056b3')}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = '#007bff')}
        >
          Send Message
        </button>
      </form>

      {status && (
        <p
          style={{
            marginTop: '1rem',
            fontSize: '0.95rem',
            color: status.startsWith('✅') ? 'green' : 'red',
          }}
        >
          {status}
        </p>
      )}
    </section>
  );
}

const inputStyle = {
  padding: '0.75rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  fontFamily: 'inherit',
  outline: 'none',
};

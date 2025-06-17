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
      const res = await fetch('https://portfolio-hofh.onrender.com/api/contact', {
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
        maxWidth: '700px',
        margin: '0 auto',
        padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 2rem)',
        fontFamily: "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <h2 style={{ 
        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
        fontWeight: '700',
        marginBottom: 'clamp(1.5rem, 3vw, 2rem)', 
        color: '#1a1a1a',
        textAlign: 'center',
        letterSpacing: '-0.02em'
      }}>
        📬 Let's Connect
      </h2>

      <div style={{
        backgroundColor: '#ffffff',
        padding: 'clamp(1.5rem, 4vw, 2.5rem)',
        borderRadius: 'clamp(12px, 2vw, 16px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
        border: '1px solid #f1f5f9'
      }}>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1rem, 2vw, 1.5rem)' }}
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
            rows={window.innerWidth < 768 ? "4" : "5"}
            style={{ ...inputStyle, resize: 'vertical', minHeight: 'clamp(100px, 15vw, 120px)' }}
          />

          <button
            type="submit"
            style={{
              padding: 'clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
              borderRadius: 'clamp(8px, 1.5vw, 12px)',
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              color: '#ffffff',
              border: 'none',
              fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 16px rgba(59, 130, 246, 0.3)',
              fontFamily: 'inherit',
              width: '100%'
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.4)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(59, 130, 246, 0.3)';
            }}
          >
            Send Message ✨
          </button>
        </form>

        {status && (
          <div
            style={{
              marginTop: 'clamp(1rem, 2vw, 1.5rem)',
              padding: 'clamp(0.8rem, 2vw, 1rem)',
              borderRadius: '8px',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              fontWeight: '500',
              textAlign: 'center',
              backgroundColor: status.startsWith('✅') ? '#dcfce7' : '#fee2e2',
              color: status.startsWith('✅') ? '#166534' : '#dc2626',
              border: `1px solid ${status.startsWith('✅') ? '#bbf7d0' : '#fecaca'}`
            }}
          >
            {status}
          </div>
        )}
      </div>
    </section>
  );
}

const inputStyle = {
  padding: 'clamp(0.8rem, 2vw, 1rem) clamp(1rem, 2.5vw, 1.25rem)',
  borderRadius: 'clamp(8px, 1.5vw, 12px)',
  border: '2px solid #e2e8f0',
  fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'all 0.3s ease',
  backgroundColor: '#fafafa',
  color: '#1a1a1a',
  width: '100%',
  boxSizing: 'border-box'
};

import { useState, useEffect } from 'react';

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1f2937, #111827)',
      color: '#ffffff',
      padding: isMobile ? '2rem 1rem 1.5rem' : '3rem 2rem 2rem',
      textAlign: 'center',
      fontSize: '1rem',
      marginTop: '4rem',
      fontFamily: "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          marginBottom: isMobile ? '1.5rem' : '2rem'
        }}>
          <h3 style={{
            fontSize: isMobile ? '1.3rem' : '1.5rem',
            fontWeight: '600',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Varsha Chandran
          </h3>
          <p style={{
            color: '#9ca3af',
            marginBottom: '1.5rem',
            fontSize: isMobile ? '0.9rem' : '1rem'
          }}>
            Full Stack Developer & Data Analyst
          </p>
        </div>

        <div style={{ 
          marginBottom: isMobile ? '1.5rem' : '2rem',
          display: 'flex',
          justifyContent: 'center',
          gap: isMobile ? '1rem' : '2rem',
          flexWrap: 'wrap'
        }}>
          <a
            href="https://github.com/varshacc2005"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              color: '#e5e7eb',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
              borderRadius: '8px',
              border: '1px solid #374151',
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#3b82f6';
              e.currentTarget.style.borderColor = '#3b82f6';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#e5e7eb';
              e.currentTarget.style.borderColor = '#374151';
            }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/varsha-c-b723b2330/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              color: '#e5e7eb',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
              borderRadius: '8px',
              border: '1px solid #374151',
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#3b82f6';
              e.currentTarget.style.borderColor = '#3b82f6';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#e5e7eb';
              e.currentTarget.style.borderColor = '#374151';
            }}
          >
            LinkedIn
          </a>
        </div>

        <div style={{
          borderTop: '1px solid #374151',
          paddingTop: isMobile ? '1rem' : '1.5rem',
          color: '#9ca3af'
        }}>
          <p style={{
            fontSize: isMobile ? '0.8rem' : '1rem',
            margin: 0
          }}>
            © {new Date().getFullYear()} Varsha Chandran. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
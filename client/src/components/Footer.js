export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1f2937, #111827)',
      color: '#ffffff',
      padding: '3rem 2rem 2rem',
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
          marginBottom: '2rem'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
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
            marginBottom: '1.5rem'
          }}>
            Full Stack Developer & Data Analyst
          </p>
        </div>

        <div style={{ 
          marginBottom: '2rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
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
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              border: '1px solid #374151'
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
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              border: '1px solid #374151'
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
          paddingTop: '1.5rem',
          color: '#9ca3af'
        }}>
          <p>© {new Date().getFullYear()} Varsha Chandran. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
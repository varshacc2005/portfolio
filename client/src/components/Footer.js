export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f8f8f8',
      padding: '1rem 0',
      textAlign: 'center',
      fontSize: '0.95rem',
      borderTop: '1px solid #ddd',
      marginTop: '3rem',
      color: '#555'
    }}>
      <p>© {new Date().getFullYear()} Varsha Chandran. All rights reserved.</p>

      {/* Optional Social Links */}
      <div style={{ marginTop: '0.5rem' }}>
        <a
          href="https://github.com/varshacc2005"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 0.5rem', textDecoration: 'none', color: '#0077b5' }}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/varsha-c-b723b2330/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 0.5rem', textDecoration: 'none', color: '#0077b5' }}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default function Welcome({ onExplore }) {
  return (
    <section style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #ffffff, #f5f7fa)',
      textAlign: 'center',
      padding: '2rem',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h1 style={{
        fontSize: '2rem',
        fontWeight: 600,
        color: '#007bff',
        marginBottom: '1rem'
      }}>
        👋 Welcome to My Portfolio
      </h1>
      <p style={{
        fontSize: '1.1rem',
        color: '#555',
        maxWidth: '600px',
        marginBottom: '2rem'
      }}>
        I'm <strong>Varsha Chandran</strong>, a Full Stack Developer and Data Analyst.<br />
        Let's create something amazing together!
      </p>
      <button
        onClick={onExplore}
        style={{
          padding: '0.8rem 1.6rem',
          fontSize: '1rem',
          borderRadius: '8px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
        onMouseEnter={e => e.target.style.backgroundColor = '#0056b3'}
        onMouseLeave={e => e.target.style.backgroundColor = '#007bff'}
      >
        🚀 Explore
      </button>
    </section>
  );
}

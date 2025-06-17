export default function Welcome({ onExplore }) {
  return (
    <section style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      textAlign: 'center',
      padding: '2rem',
      fontFamily: "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        width: '200px',
        height: '200px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        top: '10%',
        left: '10%',
        animation: 'float 6s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        width: '150px',
        height: '150px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '50%',
        bottom: '20%',
        right: '15%',
        animation: 'float 8s ease-in-out infinite reverse'
      }} />

      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        padding: '3rem',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        maxWidth: '600px',
        width: '100%'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '700',
          color: '#ffffff',
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em'
        }}>
          👋 Welcome to My Portfolio
        </h1>
        
        <p style={{
          fontSize: '1.3rem',
          color: 'rgba(255, 255, 255, 0.9)',
          marginBottom: '2.5rem',
          lineHeight: '1.6'
        }}>
          I'm <span style={{ 
            fontWeight: '600',
            color: '#ffffff'
          }}>Varsha Chandran</span>, a Full Stack Developer and Data Analyst.<br />
          Let's create something amazing together!
        </p>
        
        <button
          onClick={onExplore}
          style={{
            padding: '1rem 2.5rem',
            fontSize: '1.2rem',
            fontWeight: '600',
            borderRadius: '12px',
            backgroundColor: '#ffffff',
            color: '#667eea',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
            fontFamily: 'inherit'
          }}
          onMouseEnter={e => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={e => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
          }}
        >
          🚀 Explore My Work
        </button>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>
    </section>
  );
}
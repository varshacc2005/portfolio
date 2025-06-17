export default function Header() {
  return (
    <header style={{
      backgroundColor: '#ffffff',
      padding: '1.5rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #e5e7eb',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
      backdropFilter: 'blur(10px)',
      fontFamily: "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      <h1 style={{
        fontSize: '2rem',
        fontWeight: '700',
        color: '#1a1a1a',
        margin: 0,
        letterSpacing: '-0.02em'
      }}>
        Varsha<span style={{ 
          background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>C</span>
      </h1>

      <nav style={{ 
        display: 'flex', 
        gap: '2.5rem',
        alignItems: 'center'
      }}>
        <NavLink href="#about" label="About" />
        <NavLink href="#skills" label="Skills" />
        <NavLink href="#projects" label="Projects" />
        <NavLink href="#contact" label="Contact" />
      </nav>
    </header>
  );
}

function NavLink({ href, label }) {
  return (
    <a
      href={href}
      style={{
        textDecoration: 'none',
        color: '#4b5563',
        fontWeight: '500',
        fontSize: '1.1rem',
        position: 'relative',
        transition: 'all 0.3s ease',
        padding: '0.5rem 1rem',
        borderRadius: '8px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = '#3b82f6';
        e.currentTarget.style.backgroundColor = '#f8fafc';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = '#4b5563';
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      {label}
    </a>
  );
}
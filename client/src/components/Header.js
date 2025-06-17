export default function Header() {
  return (
    <header style={{
      backgroundColor: '#ffffff',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #e0e0e0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)'
    }}>
      <h1 style={{
        fontSize: '1.8rem',
        fontWeight: 700,
        color: '#222',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        margin: 0,
      }}>
        Varsha<span style={{ color: '#007bff' }}>C</span>
      </h1>

      <nav style={{ display: 'flex', gap: '2rem' }}>
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
        color: '#444',
        fontWeight: 500,
        fontSize: '1rem',
        position: 'relative',
        transition: 'all 0.3s ease-in-out',
      }}
      onMouseEnter={(e) => e.currentTarget.style.color = '#007bff'}
      onMouseLeave={(e) => e.currentTarget.style.color = '#444'}
    >
      {label}
    </a>
  );
}

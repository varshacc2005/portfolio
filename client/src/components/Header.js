import { useState, useEffect } from 'react';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header style={{
      backgroundColor: '#ffffff',
      padding: isMobile ? '1rem' : '1.5rem 2rem',
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
        fontSize: isMobile ? '1.5rem' : '2rem',
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

      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={toggleMenu}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem',
            color: '#4b5563'
          }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      )}

      {/* Desktop Navigation */}
      {!isMobile && (
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
      )}

      {/* Mobile Navigation Menu */}
      {isMobile && isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: '#ffffff',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
          borderTop: '1px solid #e5e7eb',
          padding: '1rem 0'
        }}>
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <MobileNavLink href="#about" label="About" onClick={closeMenu} />
            <MobileNavLink href="#skills" label="Skills" onClick={closeMenu} />
            <MobileNavLink href="#projects" label="Projects" onClick={closeMenu} />
            <MobileNavLink href="#contact" label="Contact" onClick={closeMenu} />
          </nav>
        </div>
      )}
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

function MobileNavLink({ href, label, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        textDecoration: 'none',
        color: '#4b5563',
        fontWeight: '500',
        fontSize: '1.1rem',
        padding: '1rem 2rem',
        transition: 'all 0.3s ease',
        display: 'block',
        borderBottom: '1px solid #f1f5f9'
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
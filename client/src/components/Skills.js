import { useState, useEffect } from 'react';

export default function Skills() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const skills = [
    { name: 'Python', icon: '🐍', level: 90, color: '#306998' },
    { name: 'C', icon: '⚡', level: 85, color: '#A8B9CC' },
    { name: 'Java', icon: '☕', level: 80, color: '#007396' },
    { name: 'React', icon: '⚛️', level: 85, color: '#61DBFB' },
    { name: 'Node.js', icon: '🟢', level: 80, color: '#68A063' },
    { name: 'MongoDB', icon: '🍃', level: 75, color: '#4DB33D' },
    { name: 'MySQL', icon: '🗄️', level: 85, color: '#00758F' }
  ];

  return (
    <section id="skills" style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: isMobile ? '2rem 1rem' : '4rem 2rem',
      textAlign: 'center',
      fontFamily: "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      <h2 style={{
        fontSize: isMobile ? '2rem' : '2.5rem',
        fontWeight: '700',
        marginBottom: isMobile ? '2rem' : '3rem',
        color: '#1a1a1a',
        letterSpacing: '-0.02em'
      }}>
        🛠️ Technical Skills
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile 
          ? 'repeat(auto-fit, minmax(140px, 1fr))' 
          : 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: isMobile ? '1rem' : '2rem',
        marginTop: '2rem'
      }}>
        {skills.map((skill, idx) => (
          <div key={idx} style={{
            padding: isMobile ? '1.5rem 1rem' : '2rem 1.5rem',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            border: '1px solid #f1f5f9',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={e => {
            if (!isMobile) {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.12)';
            }
          }}
          onMouseLeave={e => {
            if (!isMobile) {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
            }
          }}>
            <div style={{
              fontSize: isMobile ? '2rem' : '3rem',
              marginBottom: '1rem',
              display: 'flex',
              justifyContent: 'center'
            }}>
              {skill.icon}
            </div>
            <p style={{ 
              margin: 0,
              fontWeight: '600',
              fontSize: isMobile ? '1rem' : '1.1rem',
              color: '#1a1a1a',
              marginBottom: '1rem'
            }}>
              {skill.name}
            </p>
            <div style={{
              width: '100%',
              height: '6px',
              backgroundColor: '#e5e7eb',
              borderRadius: '3px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${skill.level}%`,
                height: '100%',
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                borderRadius: '3px',
                transition: 'width 1s ease-in-out'
              }} />
            </div>
            <p style={{
              margin: 0,
              marginTop: '0.5rem',
              fontSize: isMobile ? '0.8rem' : '0.9rem',
              color: '#6b7280',
              fontWeight: '500'
            }}>
              {skill.level}%
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
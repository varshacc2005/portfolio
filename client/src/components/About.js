import { useState, useEffect } from 'react';

export default function About() {
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
    <section
      id="about"
      style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: isMobile ? '2rem 1rem' : '4rem 2rem',
        backgroundColor: '#ffffff',
        lineHeight: '1.7',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
        fontFamily: "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif"
      }}
    >
      <h2 style={{
        fontSize: isMobile ? '2rem' : '2.5rem',
        fontWeight: '700',
        marginBottom: isMobile ? '1.5rem' : '2.5rem',
        color: '#1a1a1a',
        textAlign: 'center',
        letterSpacing: '-0.02em'
      }}>
        👋 About Me
      </h2>

      <div style={{
        display: 'flex',
        alignItems: isMobile ? 'center' : 'flex-start',
        gap: isMobile ? '2rem' : '3rem',
        flexDirection: isMobile ? 'column' : 'row',
        textAlign: isMobile ? 'center' : 'left'
      }}>
        <div style={{
          position: 'relative',
          flexShrink: 0,
          alignSelf: isMobile ? 'center' : 'flex-start'
        }}>
          {/* ✅ Your Real Image Path */}
          <img
            src="/profile.jpg"
            alt="Varsha Chandran"
            style={{
              width: isMobile ? '150px' : '200px',
              height: isMobile ? '150px' : '200px',
              borderRadius: '16px',
              objectFit: 'cover',
              objectPosition: 'center',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
              border: '3px solid #f8fafc'
            }}
          />
          <div style={{
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            width: '24px',
            height: '24px',
            backgroundColor: '#10b981',
            borderRadius: '50%',
            border: '3px solid white',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
          }} />
        </div>

        <div style={{ 
          flex: 1,
          minWidth: isMobile ? 'auto' : '300px'
        }}>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.125rem',
            marginBottom: '1.5rem',
            color: '#374151',
            fontWeight: '400'
          }}>
            Hey there! I'm <span style={{ 
              fontWeight: '600', 
              color: '#1f2937',
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Varsha Chandran</span> — a curious and creative <strong>Full Stack Developer</strong> and <strong>Data Analyst</strong>
            who enjoys turning ideas into interactive, data-powered web applications.
          </p>

          <p style={{
            fontSize: isMobile ? '1rem' : '1.125rem',
            marginBottom: '1.5rem',
            color: '#374151'
          }}>
            Whether it's crafting backend logic in <span style={{ 
              backgroundColor: '#e0f2fe', 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontWeight: '500',
              color: '#0277bd'
            }}>Python</span>, building interfaces with <span style={{ 
              backgroundColor: '#e3f2fd', 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontWeight: '500',
              color: '#1565c0'
            }}>React</span>, or working with databases like
            <span style={{ 
              backgroundColor: '#e8f5e8', 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontWeight: '500',
              color: '#2e7d32'
            }}> MongoDB</span> and <span style={{ 
              backgroundColor: '#fff3e0', 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontWeight: '500',
              color: '#f57c00'
            }}>MySQL</span>, I love making things function smoothly and look great too.
          </p>

          <p style={{
            fontSize: isMobile ? '1rem' : '1.125rem',
            marginBottom: '1.5rem',
            color: '#374151'
          }}>
            I've built some exciting projects — yes, the kind that kept me up all night (in a good way!). I'm a <strong>quick learner</strong> who enjoys diving into new tech, solving bugs,
            and uncovering insights from data.
          </p>

          <p style={{
            fontSize: isMobile ? '1rem' : '1.125rem',
            marginBottom: '1.5rem',
            color: '#374151'
          }}>
            Outside of coding, you'll often find me exploring new places with music in my ears. Long drives and a good playlist? That's my kind of therapy.
          </p>

          <p style={{
            fontSize: isMobile ? '1rem' : '1.125rem',
            color: '#374151'
          }}>
            Let's connect and build something awesome — or even just chat about tech, travel, or tunes! 🚗🎧💻
          </p>
        </div>
      </div>
    </section>
  );
}

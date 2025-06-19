import { useState, useEffect } from 'react';

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const projectList = [
    {
      title: 'Finance Tracker',
      tools: 'React, Node.js, MongoDB, Chart.js',
      description: `A full-stack web application that allows users to manage and track their income and expenses. Users can categorize transactions, set monthly budgets, and get instant feedback with interactive charts and graphs.`,
      outcome: `Helps users gain insights into their spending behavior and manage personal finances more effectively through a clean, responsive interface.`,
      icon: '💰'
    },
    {
      title: 'Oil Spill Detection',
      tools: 'Python, TensorFlow, OpenCV, SAR Satellite Imagery',
      description: `An AI-based detection system that processes Synthetic Aperture Radar (SAR) satellite images to identify oil spills in marine environments. Uses deep learning (CNN) to recognize and classify oil slick patterns.`,
      outcome: `Supports early oil spill detection, enabling faster response to environmental hazards and minimizing ecological damage in affected regions.`,
      icon: '🛰️'
    },
  ];

  return (
    <section id="projects" style={{
      maxWidth: '1100px',
      margin: '0 auto',
      padding: isMobile ? '2rem 1rem' : '4rem 2rem',
      backgroundColor: '#f8fafc',
      fontFamily: "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      <h2 style={{
        fontSize: isMobile ? '2rem' : '2.5rem',
        fontWeight: '700',
        marginBottom: isMobile ? '2rem' : '3rem',
        textAlign: 'center',
        color: '#1a1a1a',
        letterSpacing: '-0.02em'
      }}>
        🚀 Featured Projects
      </h2>

      <div style={{
        display: 'grid',
        gap: isMobile ? '1.5rem' : '2.5rem',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(450px, 1fr))'
      }}>
        {projectList.map((project, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: '#ffffff',
              padding: isMobile ? '1.5rem' : '2.5rem',
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
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
            }} />
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
              flexDirection: isMobile ? 'column' : 'row',
              textAlign: isMobile ? 'center' : 'left'
            }}>
              <span style={{
                fontSize: isMobile ? '1.5rem' : '2rem',
                padding: '0.5rem',
                backgroundColor: '#f8fafc',
                borderRadius: '12px'
              }}>
                {project.icon}
              </span>
              <h3 style={{ 
                color: '#1a1a1a',
                fontSize: isMobile ? '1.3rem' : '1.5rem',
                fontWeight: '600',
                margin: 0
              }}>
                {project.title}
              </h3>
            </div>
            
            <div style={{
              marginBottom: '1.5rem',
              padding: isMobile ? '0.5rem 0.75rem' : '0.75rem 1rem',
              backgroundColor: '#f1f5f9',
              borderRadius: '8px',
              borderLeft: '4px solid #3b82f6'
            }}>
              <p style={{ 
                margin: 0,
                fontSize: isMobile ? '0.85rem' : '0.95rem',
                fontWeight: '500',
                color: '#374151'
              }}>
                <strong>🔧 Tech Stack:</strong> {project.tools}
              </p>
            </div>
            
            <p style={{ 
              marginBottom: '1.5rem',
              fontSize: isMobile ? '1rem' : '1.1rem',
              lineHeight: '1.6',
              color: '#4b5563'
            }}>
              <strong style={{ color: '#1a1a1a' }}>📝 Overview:</strong> {project.description}
            </p>
            
            <p style={{
              margin: 0,
              fontSize: isMobile ? '1rem' : '1.1rem',
              lineHeight: '1.6',
              color: '#4b5563'
            }}>
              <strong style={{ color: '#1a1a1a' }}>🎯 Impact:</strong> {project.outcome}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
import { FaPython, FaJava, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiC } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: 'Python', icon: <FaPython color="#306998" />, level: 90 },
    { name: 'C', icon: <SiC color="#A8B9CC" />, level: 85 },
    { name: 'Java', icon: <FaJava color="#007396" />, level: 80 },
    { name: 'React', icon: <FaReact color="#61DBFB" />, level: 85 },
    { name: 'Node.js', icon: <FaNodeJs color="#68A063" />, level: 80 },
    { name: 'MongoDB', icon: <SiMongodb color="#4DB33D" />, level: 75 },
    { name: 'MySQL', icon: <SiMysql color="#00758F" />, level: 85 }
  ];

  return (
    <section id="skills" style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '4rem 2rem',
      textAlign: 'center',
      fontFamily: "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        marginBottom: '3rem',
        color: '#1a1a1a',
        letterSpacing: '-0.02em'
      }}>
        🛠️ Technical Skills
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {skills.map((skill, idx) => (
          <div key={idx} style={{
            padding: '2rem 1.5rem',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            border: '1px solid #f1f5f9',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.12)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem',
              display: 'flex',
              justifyContent: 'center'
            }}>
              {skill.icon}
            </div>
            <p style={{ 
              margin: 0,
              fontWeight: '600',
              fontSize: '1.1rem',
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
          </div>
        ))}
      </div>
    </section>
  );
}
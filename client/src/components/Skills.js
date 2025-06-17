import { FaPython, FaJava, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiC } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: 'Python', icon: <FaPython color="#306998" /> },
    { name: 'C', icon: <SiC color="#A8B9CC" /> },
    { name: 'Java', icon: <FaJava color="#007396" /> },
    { name: 'React', icon: <FaReact color="#61DBFB" /> },
    { name: 'Node.js', icon: <FaNodeJs color="#68A063" /> },
    { name: 'MongoDB', icon: <SiMongodb color="#4DB33D" /> },
    { name: 'MySQL', icon: <SiMysql color="#00758F" /> }
  ];

  return (
    <section id="skills" style={sectionStyle}>
      <h2>🛠️ Skills</h2>
      <div style={gridStyle}>
        {skills.map((skill, idx) => (
          <div key={idx} style={cardStyle}>
            <div style={{ fontSize: '2rem' }}>{skill.icon}</div>
            <p style={{ marginTop: '0.5rem', fontWeight: '500' }}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const sectionStyle = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '2rem',
  textAlign: 'center',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
  gap: '1.5rem',
  marginTop: '1rem'
};

const cardStyle = {
  padding: '1rem',
  backgroundColor: '#f9f9f9',
  borderRadius: '10px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
};

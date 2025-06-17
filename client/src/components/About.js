import profile from '../assets/profile.jpg';

export default function About() {
  return (
    <section
      id="about"
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '3rem 1.5rem',
        backgroundColor: '#fdfdfd',
        lineHeight: '1.8',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
      }}
    >
      <h2 style={{
        fontSize: '2rem',
        marginBottom: '1.5rem',
        color: '#333',
        textAlign: 'center'
      }}>
        👋 About Me
      </h2>

      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1.5rem',
        flexWrap: 'wrap'
      }}>
        <img
          src={profile}
          alt="Varsha Chandran"
          width={140}
          style={{
            borderRadius: '10px',
            objectFit: 'cover',
            flexShrink: 0,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        />

        <div style={{ flex: 1 }}>
          <p>
            Hey there! I'm <strong>Varsha Chandran</strong> — a curious and creative <strong>Full Stack Developer</strong> and <strong>Data Analyst</strong>
            who enjoys turning ideas into interactive, data-powered web applications.
          </p>

          <p>
            Whether it’s crafting backend logic in <strong>Python</strong>, building interfaces with <strong>React</strong>, or working with databases like
            <strong> MongoDB</strong> and <strong>MySQL</strong>, I love making things function smoothly and look great too.
          </p>

          <p>
            I’ve built some exciting projects — yes, the kind that kept me up all night (in a good way!). I'm a <strong>quick learner</strong> who enjoys diving into new tech, solving bugs,
            and uncovering insights from data.
          </p>

          <p>
            Outside of coding, you'll often find me exploring new places with music in my ears. Long drives and a good playlist? That’s my kind of therapy.
          </p>

          <p>
            Let’s connect and build something awesome — or even just chat about tech, travel, or tunes! 🚗🎧💻
          </p>
        </div>
      </div>
    </section>
  );
}

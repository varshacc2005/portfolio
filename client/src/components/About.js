import profile from '../assets/profile.jpg';

export default function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <img src={profile} alt="Profile" width={120} />
      <p>I’m Varsha, an aspiring AI/ML Engineer with experience in Computer Vision, NLP, and real-time systems.</p>
    </section>
  );
}

export default function Projects() {
  const projectList = [
    {
      title: 'Finance Tracker',
      description: 'Built using React and Node.js, tracks expenses and income with charts.',
    },
    {
      title: 'Oil Spill Detection',
      description: 'AI-based system using satellite SAR images to detect spills.',
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projectList.map((project, idx) => (
        <div key={idx}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
}

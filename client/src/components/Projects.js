export default function Projects() {
  const projectList = [
    {
      title: 'Finance Tracker',
      tools: 'React, Node.js, MongoDB, Chart.js',
      description: `A full-stack web application that allows users to manage and track their income and expenses. Users can categorize transactions, set monthly budgets, and get instant feedback with interactive charts and graphs.`,
      outcome: `Helps users gain insights into their spending behavior and manage personal finances more effectively through a clean, responsive interface.`,
    },
    {
      title: 'Oil Spill Detection',
      tools: 'Python, TensorFlow, OpenCV, SAR Satellite Imagery',
      description: `An AI-based detection system that processes Synthetic Aperture Radar (SAR) satellite images to identify oil spills in marine environments. Uses deep learning (CNN) to recognize and classify oil slick patterns.`,
      outcome: `Supports early oil spill detection, enabling faster response to environmental hazards and minimizing ecological damage in affected regions.`,
    },
  ];

  return (
    <section id="projects" style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '3rem 1.5rem',
      backgroundColor: '#fafafa',
    }}>
      <h2 style={{
        fontSize: '2rem',
        marginBottom: '2rem',
        textAlign: 'center',
        color: '#333',
      }}>
        🚀 Projects
      </h2>

      {projectList.map((project, idx) => (
        <div
          key={idx}
          style={{
            backgroundColor: '#fff',
            padding: '1.5rem 2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            marginBottom: '2rem',
          }}
        >
          <h3 style={{ color: '#007bff', marginBottom: '0.5rem' }}>{project.title}</h3>
          <p style={{ marginBottom: '0.6rem', fontStyle: 'italic' }}><strong>🔧 Tools:</strong> {project.tools}</p>
          <p style={{ marginBottom: '0.5rem' }}><strong>📝 Description:</strong> {project.description}</p>
          <p><strong>🎯 Outcome:</strong> {project.outcome}</p>
        </div>
      ))}
    </section>
  );
}

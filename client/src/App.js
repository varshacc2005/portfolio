import { useState } from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer'; // ✅ Import the Footer
import './App.css';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleExplore = () => {
    setShowWelcome(false);
  };

  return (
    <div>
      {showWelcome ? (
        <Welcome onExplore={handleExplore} />
      ) : (
        <div className="fade-in">
          <Header />
          <About />
          <Skills />
          <Projects />
          <ContactForm />
          <Footer /> {/* ✅ Add footer at the bottom */}
        </div>
      )}
    </div>
  );
}

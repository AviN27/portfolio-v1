import './App.css';
import Header from './components/header/Header'
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualifications from './components/qualifications/Qualifications';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
import Projects from './components/projects/Projects';
import Cursor from './components/cursor/CursorCircle';

function App() {
  return (
    <div className="App">
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Qualifications />
        <Contact />
      </main>

      <Footer />
      <Scrollup />

      <Cursor />
    </div>
  );
  
}

export default App;

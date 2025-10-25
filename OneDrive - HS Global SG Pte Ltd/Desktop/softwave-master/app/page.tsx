import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Services />
      <Team />
      <Contact />
    </main>
  );
}

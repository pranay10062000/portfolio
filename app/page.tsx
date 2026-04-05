import Navbar from '../components/ui/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Achievements from '../components/sections/Achievements';
import ContactFooter from '../components/sections/ContactFooter';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <ContactFooter />
    </main>
  );
}

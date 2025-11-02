import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import SocialLinks from "./_components/SocialLinks";
import EmailLink from "./_components/EmailLink";
import About from "./_components/About";
import Education from "./_components/Education";
import Projects from "./_components/Projects";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <main>
      <SocialLinks />
      <EmailLink />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}

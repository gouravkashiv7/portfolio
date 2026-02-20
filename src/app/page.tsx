import About from "./_components/About";
import Contact from "./_components/Contact";
import Education from "./_components/Education";
import EmailLink from "./_components/EmailLink";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Projects from "./_components/Projects";
import SocialLinks from "./_components/SocialLinks";

export default function Home() {
  return (
    <main>
      <div className="hidden md:block">
        <SocialLinks />
      </div>
      <div className="hidden md:block">
        <EmailLink />
      </div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}

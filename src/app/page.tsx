import dynamic from "next/dynamic";
import EmailLink from "./_components/EmailLink";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import SocialLinks from "./_components/SocialLinks";

const Education = dynamic(() => import("./_components/Education"), {
  ssr: true,
});
const About = dynamic(() => import("./_components/About"), { ssr: true });
const Projects = dynamic(() => import("./_components/Projects"), { ssr: true });
const Contact = dynamic(() => import("./_components/Contact"), { ssr: true });

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

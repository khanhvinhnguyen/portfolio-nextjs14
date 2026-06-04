import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

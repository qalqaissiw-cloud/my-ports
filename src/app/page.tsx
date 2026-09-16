import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Photography } from "../components/Photography";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Photography />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
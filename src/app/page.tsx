
import Image from "next/image";
import NavBar from "./Components/NavBar";
import { Banner } from "./Components/Banner";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { Footer } from "./Components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24 pb-0 main">
      <section id="home">
      <NavBar/>
      </section>
        <Banner/>
      <section id="skills">
      <Skills/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <Footer/>
    </main>
  );
}

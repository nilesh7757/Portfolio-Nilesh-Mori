import Nilesh from "./Components/Home";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Education from "./Components/education";
import Contact from "./Components/Contact";
import 'es6-object-assign/auto';
import Project from "./Components/Project";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CodingProfiles from "./Components/CodingProfiles";
import ExperienceSection from "./Components/ExperienceSection";
import GithubStats from "./Components/GithubStats";

export default function Home() {
  return (
    <>
    <main className="relative overflow-x-hidden h-full w-full">
      <div id="home"><Nilesh/></div>
      <div id="about" className=""><About/></div>
      <div id="experience" className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center flex items-center justify-center gap-3 mb-12 text-foreground">
          <span>My</span>
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Experience</span>
        </h2>
        <ExperienceSection/>
      </div>
      <div id="skills" className=""><Skill/></div>
      <div id="cp"><CodingProfiles /></div>
      <div id="github"><GithubStats /></div>
      <div id='education' className=""><Education/></div>
      <div id="project" className=""><Project/></div>
      <div id="contact" className=""><Contact/></div>
    </main>
    <Footer/>
    </>
  );
}
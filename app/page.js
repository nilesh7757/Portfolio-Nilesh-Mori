import Nilesh from "./Components/Home";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Contact from "./Components/Contact";
import 'es6-object-assign/auto';
import Project from "./Components/Project";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CodingProfiles from "./Components/CodingProfiles";
import GithubStats from "./Components/GithubStats";
import Timeline from "./Components/Timeline";

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="relative overflow-x-hidden h-full w-full">
      <div id="home"><Nilesh/></div>
      <div id="about" className=""><About/></div>
      <div id="experience"><Timeline /></div>
      <div id="skills" className=""><Skill/></div>
      <div id="cp"><CodingProfiles /></div>
      <div id="github"><GithubStats /></div>
      <div id="project" className=""><Project/></div>
      <div id="contact" className=""><Contact/></div>
    </main>
    <Footer/>
    </>
  );
}
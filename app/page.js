import Nilesh from "./Components/Home";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Education from "./Components/education";
import Contact from "./Components/Contact";
import 'es6-object-assign/auto';
import Project from "./Components/Project";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <>
    
    <div className="h-20 z-20 sticky top-0"><Navbar/></div>
    <main className="relative overflow-x-hidden h-full w-full mt-24">
      <div id="home"><Nilesh/></div>
      <div id="about" className=""><About/></div>
      <div id="skills" className=""><Skill/></div>
      <div id='education' className=""><Education/></div>
      <div id="project" className=""><Project/></div>
      <div id="contact" className=""><Contact/></div>
    </main>
    <Footer/>
    </>
  );
}
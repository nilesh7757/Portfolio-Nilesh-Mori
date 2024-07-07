import Nilesh from "./Components/Home";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Education from "./Components/education";
import Contact from "./Components/Contact";
import 'es6-object-assign/auto';
import Project from "./Components/Project";

// import Background from "./Components/Background";
export default function Home() {
  return (
    <>
    <main className="relative overflow-x-hidden h-full w-full">
    <div id="home" className="shadow-md lg:h-[90vh] lg:flex lg:items-center h-fit "><Nilesh/></div>
    <div id="about" className="shadow-md "><About/></div>
    <div id="skills"  className="shadow-md "><Skill/></div>
    <div id='education' className="shadow-md "><Education/></div>
    <div id="project" className="shadow-md"><Project/></div>
    <div id="contact" className="shadow-md"><Contact/></div>
    </main>
    </>
      );

}

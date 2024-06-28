import Navbar from "./Components/Navbar";
import Nilesh from "./Components/Home";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Education from "./Components/education";
import Contact from "./Components/Contact";
// import Background from "./Components/Background";
export default function Home() {
  return (
    <>
    <main className="relative h-full w-full overflow-x-hidden">
    <div  className="h-20 z-10 bg-white sticky top-0"><Navbar/></div>
    <div  className="shadow-md lg:h-[90vh] lg:flex lg:items-center h-fit "><Nilesh/></div>
    <div  className="shadow-md"><About/></div>
    <div  className="shadow-md h-[100vh]"><Skill/></div>
    <div  className="shadow-md h-[100vh]"><Education/></div>
    <div  className="shadow-md h-[100vh]"><Education/></div>
    <div  className="shadow-md h-[100vh]"><Contact/></div>
    {/* <Background/> */}
    </main>
    </>
      );

}

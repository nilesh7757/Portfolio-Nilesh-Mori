import Navbar from "./Components/Navbar";
import Nilesh from "./Components/Home";
// import Background from "./Components/Background";
export default function Home() {
  return (
    <>
    <div className="h-20 z-10 bg-white sticky top-0"><Navbar/></div>
    <div className="shadow-md "><Nilesh/></div>
    <div className="h-[100vh]">End Of Section</div>
    {/* <Background/> */}
    </>
      );

}

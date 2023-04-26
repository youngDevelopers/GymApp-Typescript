import Navbar from "@/scenes/navabar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import OurClasses from "@/scenes/ourClasses";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";


function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)//for page scrolling

  useEffect( () => {
    const handleScroll = () => {
      if (window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY !==0) setIsTopOfPage(false);
    }

    window.addEventListener("scroll", handleScroll);//adding event listener to the window
    return () => window.removeEventListener("scroll", handleScroll);//cleanup function to avoid memory leaks when the component unmounts ie wen they leave the page
  }, [])

  return (
    <>
      <div className="app bg-gray-20">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage} />
        <Benefits setSelectedPage={setSelectedPage} />
        <OurClasses setSelectedPage={setSelectedPage} />
        <ContactUs setSelectedPage={setSelectedPage} />
        <Footer />
      </div>
    </>
  );
}

export default App;

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Footer from "../components/Footer"; 

function Home() {
  return (
    <div className="w-full flex flex-col items-center">
        <Navbar/>
        <Hero/>
        <Skills/>
        <Profile/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default Home;
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Footer from "../components/Footer"; 

function Home() {
  return (
    <div className="justify-center">
        <Header/>
        <Hero/>
        <Skills/>
        <Profile/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default Home;
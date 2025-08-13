import {useState} from "react"
import Header from "./components/Header";
import About from "./components/About";
import WorkExperience from "./components/Work";
import Projects from "./components/Projects";
import TerminalSection from "./components/TerminalSection";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
//import Contact from "./components/Contact";

function App() {

  const [darkMode, setDarkMode] = useState(true);

  if (darkMode){
    document.body.classList.remove("lightTime");
    document.body.classList.add("nightTime");
  }else{
    document.body.classList.remove("nightTime");
    document.body.classList.add("lightTime");
  }

  return (
    <div name="home" className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

      <main className="bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white">
      
        <About />
        <WorkExperience />
        <TerminalSection />
        <Projects />
        <ContactForm />
        
      </main>

      <Footer />
    </div>
  );
}

export default App;

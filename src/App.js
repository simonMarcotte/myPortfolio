import {useState} from "react"
import Header from "./components/Header";
import Hero from "./components/Hero";
import WorkExperience from "./components/Work";
import Portfolio from "./components/Portfolio";
import Technology from "./components/Technology";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
//import Contact from "./components/Contact";

function App() {

  const [darkMode, setDarkMode] = useState(false);

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

      <main className="bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white duration-500">
      
        <Hero />
        <WorkExperience />
        <Portfolio />
        <Technology />
        <ContactForm />
        
      </main>

      <Footer />
    </div>
  );
}

export default App;

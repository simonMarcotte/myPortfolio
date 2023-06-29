import {useState} from "react"
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div name="home" className={darkMode && "dark"}>

      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white duration-500">
        <Hero />
        <Portfolio />
        <Experience />
        <Footer />
      </main>
    </div>
  );
}

export default App;

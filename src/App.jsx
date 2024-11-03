import Navbar from './Components/navBar';
import  Hero from './Components/hero';
import About from './Components/about';
import Projects from './Components/projects';
import Contact from './Components/contact';

const App = () => {
    return (
        <div className=" -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#020220_30%,#0a1399_100%)] p-0 m-0">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </div>
    );
};

export default App;



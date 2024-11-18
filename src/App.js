import Navbar from './Components/navBar';
import Hero from './Components/hero';
import About from './Components/about';
import Projects from './Components/projects';
import Contact from './Components/contact';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const AppContent = () => {
    const { darkMode } = useTheme();
    return (
        <div className={`h-full w-full items-center transition-colors duration-300 ${darkMode ? '[background:radial-gradient(125%_125%_at_50%_10%,#020220_30%,#0a1399_100%)]' : 'bg-gray-100'}`}>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </div>
    );
};

const App = () => {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
};

export default App;

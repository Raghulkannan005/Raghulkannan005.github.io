import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Components/navBar';
import Hero from './Components/hero';
import About from './Components/about';
import Projects from './Components/projects';
import Contact from './Components/contact';
import AdminLogin from './Components/AdminLogin';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const AppContent = () => {
    const { darkMode } = useTheme();
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <div className={`h-full w-full min-w-96 items-center transition-colors duration-300 ${darkMode ? '[background:radial-gradient(125%_125%_at_50%_10%,#020220_30%,#0a1399_100%)]' : 'bg-gray-100'}`}>
            <Navbar isActive={isActive} toggleClass={toggleClass} />
            <Hero toggleClass={toggleClass} />
            <About toggleClass={toggleClass} />
            <Projects toggleClass={toggleClass} />
            <Contact toggleClass={toggleClass} />
        </div>
    );
};

const App = () => (
    <ThemeProvider>
        <Router>
            <Routes>
                <Route path="/" element={<AppContent />} />
                <Route path="/admin" element={<AdminLogin />} />
            </Routes>
        </Router>
    </ThemeProvider>
);

export default App;

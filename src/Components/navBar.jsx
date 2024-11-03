import { BiAdjust } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoVolumeMute,IoVolumeMediumSharp } from "react-icons/io5";
const Navbar = () => {

    const [isActive, setActive] = useState(false);
    const [isMuted, setMuted] = useState(true);
    const [isPlaying, setPlaying] = useState(false);
    const [isPaused, setPaused] = useState(false);
    const toggleClass = () => {
    setActive(!isActive);
    }

    const navClicked = () => {

        const audio = document.querySelector('audio')
        if(isPlaying==false && isPaused==false){
            setMuted(!isMuted)
            setPlaying(true);
            audio.play()}
    }

    const Btns = (props) => {
        return (
            <div className="text-white font-rubi font-bold text-2xl ml-10 text-center hover:bg-slate-300 cursor-pointer hover:scale-110 hover:text-darkBlue rounded-xl p-1 transition duration-300 ease-in-out hover:shadow-md hover:shadow-blue-500" onClick={navClicked}>{props.navBtns}</div>
        )
    }

    Btns.propTypes = {
        navBtns: PropTypes.string.isRequired
    };




    return (
        <nav className="backdrop-blur-lg bg-black/40 flex items-center justify-center py-4 z-50 top-0 w-full fixed ">
            <div className="flex justify-between items-center h-12 w-full">
                <div className="hidden sm:h-full sm:justify-center sm:items-center sm:flex-wrap sm:w-full sm:flex">
                    <Link to="hero" smooth={true} duration={500}><Btns navBtns="Home" /></Link>
                    <Link to="about" smooth={true} duration={500}><Btns navBtns="About" /></Link>
                    <Link to="projects" smooth={true} duration={500}><Btns navBtns="Project" /></Link>
                    <Link to="contact" smooth={true} duration={500}><Btns navBtns="Contact" /></Link>
                </div>
                <div className={`sm:hidden ${isActive ? 'flex' : 'hidden'} flex-col fixed top-20 right-0 bg-black/40 pr-8 gap-2 rounded-b-xl pb-8`}>
                    <Link to="hero" smooth={true} duration={500}> <Btns navBtns="Home" />  </Link>
                    <Link to="about" smooth={true} duration={500}> <Btns navBtns="About" />  </Link>
                    <Link to="projects" smooth={true} duration={500}> <Btns navBtns="Project" />  </Link>
                    <Link to="contact" smooth={true} duration={500}> <Btns navBtns="Contact" />  </Link>
                </div>
                <h1 className="text-white sm:hidden mx-10 font-signi font-bold text-3xl">Portfolio</h1>
                <div className="flex">
                    <BiAdjust className="text-white/30 my-4 size-5 hover:text-white hover:scale-110 rounded-full h-12 w-12 py-3 transition duration-100 ease-in-out" />
                    {isMuted ?(
                        <IoVolumeMute onClick={() => {
                            const audio = document.querySelector('audio');
                            {isPlaying ? audio.pause(): audio.play()}
                            setMuted(!isMuted);
                        }} className="text-white/30 my-4 size-5 hover:text-white hover:scale-110 rounded-full h-12 w-12 py-3 transition duration-100 ease-in-out">
                        </IoVolumeMute>
                    ): (
                        <IoVolumeMediumSharp onClick={() => {
                            const audio = document.querySelector('audio');
                            audio.pause();
                            setMuted(!isMuted);
                            setPaused(true);
                            setPlaying(false);
                        }}  className="text-white/30 my-4 size-5 hover:text-white hover:scale-110 rounded-full h-12 w-12 py-3 transition duration-100 ease-in-out">
                        </IoVolumeMediumSharp>
                    )  }
                    <GiHamburgerMenu className="sm:hidden text-white/30 my-4 size-5 hover:text-white hover:scale-110 rounded-full h-12 w-12 py-2 transition duration-100 ease-in-out" onClick={toggleClass}></GiHamburgerMenu>
                </div>
            </div>
        </nav>
    )
}



export default Navbar
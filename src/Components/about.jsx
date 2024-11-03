import { skill } from "./constants.js";

const About = () => {
    return (
        <div className="min-h-screen w-full p-20 flex flex-col justify-center items-center bg-gradient-to-b from-[#000328] to-[#014449]" id="about">
            <p className="text-gray-300 font-rubi text-xl text-center mb-8">Technologies and tools I've worked with</p>
            <div className="flex flex-wrap justify-center space-x-4">

            {skill.map((prop, index) => (
                <div
                    key={index}
                    className="p-3 m-4 bg-white/10 rounded-md font-rubi flex text-white text-center transition-all duration-50 ease-in-out hover:bg-white/20 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 cursor-pointer"
                >
                    <div className="flex justify-center text-2xl items-center" style={{color: prop.color}}><prop.icon/></div>
                    <div className=" mx-2 text-lg">{prop.name}</div>
                </div>
            ))
            }
            </div>
        </div>
    )
}
export default About;

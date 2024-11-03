import { HiOutlineMail } from "react-icons/hi";


const Contact = () => {

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#0a192f] to-black" id="contact">
      <div className="text-white text-4xl text-center font-bold mb-4">
      Lets Create Something Amazing Together! 🚀
      </div>
      <div className="font-signi text-white text-lg max-w-2xl text-center px-4">
      Ready to turn your innovative ideas into reality? Im here to help!
      </div>
      <div className="font-signi text-white text-lg max-w-2xl text-center px-4">
      Dont miss out - reach out now and lets build something extraordinary! ✨
      </div>
    <div className="mt-8 flex items-center">
      <a href="mailto:raghulkannan005@gmail.com" className="text-white hover:text-gray-300 flex items-center">
      <HiOutlineMail size={30} />
      <span className="ml-2">raghulkannan005@gmail.com</span>
      </a>
    </div>
    <div className="mt-8 w-full max-w-md px-4">
      <form action="I dont know what to put" method="POST">
        <textarea
          name="message"
          className="w-full p-2 mb-4 text-black rounded-lg resize-none"
          rows="4"
          placeholder="Write your message here..."
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-lg text-white hover:scale-105 duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
    </div>
    );
};

export default Contact;
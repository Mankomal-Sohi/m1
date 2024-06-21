import { IoIosMail } from "react-icons/io";
const Contact = () => {
  return <div className="bg-plum h-full py-10   ">
    <div className="flex flex-col justify-center items-center">
        <h2 className="uppercase text-3xl">Contact me</h2>
    <p className="text-xl">You can reach me out using the mail. </p>
  		<span className="text-4xl text-aqua hover:text-[#E310CB]"><a href="mailto:mankomaldeep2003@gmail.com"><IoIosMail /></a></span></div>
      </div>
};

export default Contact;

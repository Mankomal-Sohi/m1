import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
const Skills = () => {
  return <div>
    <div className="my-20 mx-12">
        <h2 className="bg-magenta w-fit p-2 text-3xl my-3">Skills</h2>
        <div className="">
            <ul className="grid grid-rows-2 grid-flow-col gap-3">
                <li className="style-icons"><TiHtml5 /></li>
                <li className="style-icons"><FaCss3Alt /></li>
                <li className="style-icons"><IoLogoJavascript /></li>
                <li className="style-icons"><FaReact /></li>
                <li className="style-icons"><SiNextdotjs /></li>
                <li className="style-icons"><SiTypescript /></li>
                <li className="style-icons"><FaNode /></li>
                <li className="style-icons"><SiMysql /></li>
                <li className="style-icons"><BiLogoPostgresql /></li>
                <li className="style-icons"><SiMongodb /></li>
                <li className="style-icons"><FaPython /></li>

            </ul>
        </div>

    </div>
  </div>;
};

export default Skills;
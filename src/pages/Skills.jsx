import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaNodeJs,FaReact } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";

export const Skills = () => {

    const skills = [
        { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-600" /> },
        { name: "TAILWIND CSS", icon: <FaCss3Alt size={40} className="text-cyan-500" /> },
        { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-500" /> },
        { name: "JAVA", icon: <FaJava size={40} className="text-red-600" /> },
        { name: "REACT", icon: <FaReact size={40} className="text-blue-500" /> },
        { name: "NODEJS", icon: <FaNodeJs size={40} className="text-green-600" /> },
        { name: "MONGODB", icon: <FaDatabase size={40} className="text-green-500" /> },
    ];

    return (
        <section
            id="Skills"
            className="min-h-screen flex justify-center items-center bg-gradient-to-br from-white via-blue-50/30 to-blue-100/20 text-slate-800 py-16"
        >
            <div className="flex flex-col w-full max-w-6xl px-4 justify-center items-center">
                <div className="flex w-full justify-center items-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-serif font-bold text-center text-slate-800">
                        My <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Skills</span>
                    </h2>
                </div>

                <div className="w-full flex justify-center">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
                        {skills.map(({ name, icon }) => {
                            return (
                                <li 
                                    key={name} 
                                    className="flex flex-col justify-center items-center bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 p-8 hover:scale-105 border border-blue-300/30 group"
                                >
                                    <div className="mb-4 transform group-hover:rotate-12 group-hover:-translate-y-1 transition-transform duration-300">
                                        {icon}
                                    </div>
                                    <span className="text-lg font-semibold text-slate-700 text-center group-hover:text-slate-800 transition-colors duration-300">
                                        {name}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}
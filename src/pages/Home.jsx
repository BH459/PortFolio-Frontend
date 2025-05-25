import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export const Home = () => {
    const handleDownloadCV = () => {
        window.open(
            "https://drive.google.com/file/d/1rdD23XGj3RhdoLoABy7oQiKbsY7989L0/view",
            "_blank"
        );
    };

    return (
        <section
            id="Home"
            className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-blue-100/20 flex justify-center items-center px-6"
        >
            <div className="max-w-7xl w-full h-full flex flex-col justify-center items-center md:flex-row">
                {/* Profile Image */}
                <div className="flex justify-center md:items-center mt-14 mb-14 xl:mt-0 xl:mb-0 lg:ml-20 md:ml-8">
                    <img
                        id="profile-img"
                        src="/Portfolio_image.png"
                        alt="Profile"
                        loading="lazy"
                        className="rounded-full shadow-[0_0_30px_10px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_20px_rgba(37,99,235,0.4)] h-[18.5rem] w-[18.5rem] sm:h-80 sm:w-80 md:h-64 md:w-64 lg:h-96 lg:w-96 object-cover transition-all duration-500 hover:scale-105 border-4 border-white/50 backdrop-blur-sm"
                    />
                </div>

                {/* Text Content */}
                <div className="flex-1 flex flex-col max-h-full ml-10 2xl:mt-8 xl:mt-8">
                    <p className="text-slate-700 lg:text-4xl text-3xl font-semibold mt-2 tracking-wide">
                        Hello, Myself
                    </p>
                    <p className="lg:text-7xl text-5xl text-slate-800 font-bold -ml-1 mt-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                        Brij Patel
                    </p>
                    <p className="mt-4 lg:text-4xl text-3xl font-semibold text-slate-700 tracking-wide">
                        And I'm a Web Developer
                    </p>
                    <p className="mt-6 lg:mr-44 mr-14 text-xl text-slate-600 leading-relaxed">
                        I am a passionate full-stack developer with experience in HTML,
                        CSS, JavaScript, Node.js, MongoDB, and Java. I enjoy building
                        modern web applications, solving complex problems, and
                        continuously learning new technologies. Currently, I am focused
                        on enhancing my skills and working on exciting projects that
                        challenge my abilities.
                    </p>

                    {/* Social Icons */}
                    <div className="flex space-x-6 mt-8">
                        <SocialIcon href="https://in.linkedin.com" icon={<FaLinkedin />} />
                        <SocialIcon href="https://github.com" icon={<FaGithub />} />
                        <SocialIcon href="https://www.facebook.com" icon={<FaFacebook />} />
                        <SocialIcon href="https://www.instagram.com" icon={<FaInstagram />} />
                    </div>

                    {/* CV Button */}
                    <button
                        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white h-14 w-36 sm:h-16 sm:w-40 mt-8 rounded-xl text-lg sm:text-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 active:scale-95 mb-14 transition-all duration-300 border border-blue-300/30 backdrop-blur-sm"
                        onClick={handleDownloadCV}
                    >
                        Download CV
                    </button>
                </div>
            </div>
        </section>
    );
};

// Reusable icon button component
const SocialIcon = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-blue-300 rounded-full text-blue-600 text-2xl hover:scale-110 hover:-translate-y-1 hover:bg-blue-500 hover:text-white hover:shadow-xl hover:shadow-blue-500/25 bg-white/80 backdrop-blur-sm flex justify-center items-center transition-all duration-300 active:scale-95"
    >
        {icon}
    </a>
);
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
    const iconClass = "w-12 h-12 md:w-14 md:h-14 p-3 md:p-4 border-2 border-blue-300 rounded-full bg-white text-blue-600 hover:bg-blue-500 hover:text-white hover:shadow-xl hover:shadow-blue-500/25 hover:scale-110 transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1";

    const icons = [
        { href: "https://in.linkedin.com", icon: <FaLinkedin /> },
        { href: "https://github.com", icon: <FaGithub /> },
        { href: "https://www.facebook.com", icon: <FaFacebook /> },
        { href: "https://www.instagram.com", icon: <FaInstagram /> },
    ];

    return (
        <footer className="bg-gradient-to-r from-white via-blue-50 to-white w-full text-slate-800 shadow-2xl border-t border-blue-200/50">
            <div className="max-w-7xl mx-auto flex flex-col justify-center items-center py-12 md:py-16 px-6">
                <div className="flex flex-row mb-8 md:mb-10 space-x-4 md:space-x-8 flex-wrap justify-center gap-2 md:gap-0">
                    {icons.map(({ href, icon }, index) => (
                        <a
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={iconClass}
                        >
                            {icon}
                        </a>
                    ))}
                </div>
                <div className="text-center">
                    <p className="text-sm md:text-base font-mono text-slate-600 tracking-wide">
                        © {new Date().getFullYear()} Brij Patel - All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};
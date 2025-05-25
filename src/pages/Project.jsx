export const Project = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center",
            tags: ["React", "Node.js", "MongoDB"],
            demoUrl: "#",
            codeUrl: "#"
        },
        {
            title: "Weather Dashboard",
            description: "Interactive weather application with real-time data visualization, location-based forecasts, and responsive design for all devices.",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop&crop=center",
            tags: ["JavaScript", "API", "CSS"],
            demoUrl: "#",
            codeUrl: "#"
        },
        {
            title: "Task Management App",
            description: "Collaborative project management tool with drag-and-drop functionality, team collaboration features, and progress tracking.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&crop=center",
            tags: ["React", "Tailwind", "Firebase"],
            demoUrl: "#",
            codeUrl: "#"
        },
        {
            title: "Portfolio Website",
            description: "Modern, responsive portfolio showcasing creative work with smooth animations, dark mode toggle, and optimized performance.",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop&crop=center",
            tags: ["HTML", "CSS", "REACT","TAILWIND CSS","JavaScript"],
            demoUrl: "#",
            codeUrl: "#"
        }
    ];

    return (
        <section
            id="Project"
            className="min-h-screen flex justify-center items-center bg-gradient-to-br from-white via-blue-50/30 to-blue-100/20 text-slate-800 py-16"
        >
            <div className="flex flex-col w-full max-w-6xl px-4 justify-center items-center">
                <div className="flex w-full justify-center items-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-serif font-bold text-center text-slate-800">
                        My <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Projects</span>
                    </h2>
                </div>

                <div className="w-full flex justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
                        {projects.map((CurrProject, index) => (
                            <div
                                key={index}
                                className="group bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden border border-blue-300/30 hover:scale-[1.02]"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={CurrProject.image}
                                        alt={CurrProject.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {CurrProject.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full border border-blue-200"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <h3 className="text-xl font-bold font-serif text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                                        {CurrProject.title}
                                    </h3>
                                    
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                        {CurrProject.description}
                                    </p>
                                    
                                    <div className="flex gap-3">
                                        <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95">
                                            Live Demo
                                        </button>
                                        <button className="flex-1 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold py-2.5 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 active:scale-95">
                                            View Code
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
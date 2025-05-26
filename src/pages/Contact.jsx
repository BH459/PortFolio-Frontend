import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Contact = () => {
    const [user, setUser] = useState({
        Name: "",
        Email: "",
        Message: "",
    });

    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!user.Email || !emailPattern.test(user.Email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const { Name, Email, Message } = user;

    try {
        const res = await fetch(`${import.meta.env.VITE_FETCH_URL}/register`, { // ✅ Updated path
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Name, Email, Message })
        });

        if (!res.ok) {
            window.alert("Request failed: " + res.status);
            return;
        }

        const data = await res.json();

        if (data.status === 500 || !data) {
            window.alert("Invalid Registration");
        } else {
            window.alert("Successful Registration Complete");
            navigate('/');
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("Something went wrong. Please try again later.");
    }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name && value !== null && value !== undefined) {
            setUser((prev) => ({ ...prev, [name]: value }));
        }
    };

    return (
        <section 
            id="Contact" 
            className="min-h-screen flex justify-center items-center bg-gradient-to-br from-white via-blue-50/30 to-blue-100/20 text-slate-800 py-16"
        >
            <div className="flex flex-col w-full max-w-6xl px-4 justify-center items-center">
                <div className="flex w-full justify-center items-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-serif font-bold text-center text-slate-800">
                        Contact <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Me</span>
                    </h2>
                </div>

                <div className="w-full flex justify-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 p-8 border border-blue-300/30 w-full max-w-2xl">
                        <form action="POST" className="flex flex-col space-y-6">
                            <div className="group">
                                <input
                                    name="Name"
                                    type="text"
                                    onChange={handleInputChange}
                                    placeholder="Your Name"
                                    value={user.Name}
                                    className="w-full px-4 py-3 bg-white/70 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 text-slate-700 placeholder:text-slate-400 hover:border-blue-300 focus:shadow-lg focus:shadow-blue-500/10"
                                    required
                                />
                            </div>

                            <div className="group">
                                <input
                                    name="Email"
                                    type="email"
                                    onChange={handleInputChange}
                                    placeholder="Your Email"
                                    value={user.Email}
                                    className="w-full px-4 py-3 bg-white/70 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 text-slate-700 placeholder:text-slate-400 hover:border-blue-300 focus:shadow-lg focus:shadow-blue-500/10"
                                    required
                                />
                            </div>

                            <div className="group">
                                <textarea
                                    rows="5"
                                    placeholder="Your Message"
                                    name="Message"
                                    onChange={handleInputChange}
                                    value={user.Message}
                                    className="w-full px-4 py-3 bg-white/70 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 text-slate-700 placeholder:text-slate-400 hover:border-blue-300 focus:shadow-lg focus:shadow-blue-500/10 resize-none"
                                    required
                                />
                            </div>

                            <button 
                                onClick={handleFormSubmit}
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 text-lg"
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
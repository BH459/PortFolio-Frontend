import { useState } from "react";
import { Alert } from "../components/UI/Alert";

export const Contact = () => {
    const [user, setUser] = useState({
        Name: "",
        Email: "",
        Message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState({ show: false, type: '', message: '' });

    const showAlert = (type, message) => {
        setAlert({ show: true, type, message });
        setTimeout(() => {
            setAlert({ show: false, type: '', message: '' });
        }, 5000);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Validation
        if (!user.Name.trim()) {
            showAlert('error', 'Please enter your name.');
            setIsLoading(false);
            return;
        }

        if (!user.Email || !emailPattern.test(user.Email)) {
            showAlert('error', 'Please enter a valid email address.');
            setIsLoading(false);
            return;
        }

        if (!user.Message.trim()) {
            showAlert('error', 'Please enter your message.');
            setIsLoading(false);
            return;
        }

        const { Name, Email, Message } = user;

        try {            
            // Uncomment and modify for real API call:
            const res = await fetch(`${import.meta.env.VITE_FETCH_URL}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ Name, Email, Message })
            });

            if (!res.ok) {
                throw new Error(`Request failed: ${res.status}`);
            }

            const data = await res.json();

            if (data.status === 500 || !data) {
                throw new Error('Registration failed');
            }
            // Success simulation
            showAlert('success', 'Message sent successfully! Thank you for reaching out.');
            setUser({ Name: "", Email: "", Message: "" });
            
        } catch (error) {
            console.error("Error submitting form:", error);
            showAlert('error', 'Something went wrong. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name && value !== null && value !== undefined) {
            setUser((prev) => ({ ...prev, [name]: value }));
        }
    };

    const closeAlert = () => {
        setAlert({ show: false, type: '', message: '' });
    };

    return (
        <section 
            id="Contact" 
            className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/30 text-slate-800 py-16 relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            {/* Custom Alert */}
            {alert.show && ( <Alert handlebtn={closeAlert} /> )}

            <div className="flex flex-col w-full max-w-4xl px-4 justify-center items-center relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-6xl font-bold text-center text-slate-800 mb-4">
                        Get In <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl">
                        Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
                    </p>
                </div>

                {/* Form Container */}
                <div className="w-full flex justify-center">
                    <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 w-full max-w-2xl relative overflow-hidden">
                        
                        {/* Beautiful Loading Overlay */}
                        {isLoading && (
                            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-20 rounded-3xl">
                                <div className="flex flex-col items-center space-y-6">
                                    {/* Multi-layer Spinner */}
                                    <div className="relative">
                                        <div className="w-20 h-20 border-4 border-blue-100 rounded-full"></div>
                                        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
                                        <div className="absolute top-2 left-2 w-16 h-16 border-4 border-transparent border-t-purple-500 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '0.8s'}}></div>
                                        <div className="absolute top-4 left-4 w-12 h-12 border-4 border-transparent border-t-indigo-500 rounded-full animate-spin" style={{animationDuration: '0.6s'}}></div>
                                        
                                        {/* Center pulse */}
                                        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                                    </div>
                                    
                                    {/* Animated Loading Text */}
                                    <div className="text-center">
                                        <div className="flex items-center justify-center space-x-2 mb-2">
                                            <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                                Sending your message
                                            </span>
                                            <div className="flex space-x-1">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                                                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                                                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                                            </div>
                                        </div>
                                        <p className="text-slate-500 text-sm">Please wait while we process your request...</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="space-y-6">
                            {/* Name Field */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-slate-700">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <input
                                        name="Name"
                                        type="text"
                                        onChange={handleInputChange}
                                        placeholder="Enter your full name"
                                        value={user.Name}
                                        className="w-full px-4 py-4 bg-white/80 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-slate-700 placeholder:text-slate-400 hover:border-slate-300 focus:shadow-lg focus:shadow-blue-500/10 focus:bg-white"
                                        required
                                        disabled={isLoading}
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-slate-700">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input
                                        name="Email"
                                        type="email"
                                        onChange={handleInputChange}
                                        placeholder="your.email@example.com"
                                        value={user.Email}
                                        className="w-full px-4 py-4 bg-white/80 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-slate-700 placeholder:text-slate-400 hover:border-slate-300 focus:shadow-lg focus:shadow-blue-500/10 focus:bg-white"
                                        required
                                        disabled={isLoading}
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-slate-700">
                                    Your Message
                                </label>
                                <div className="relative">
                                    <textarea
                                        rows="5"
                                        placeholder="Tell me about your project, ideas, or just say hello..."
                                        name="Message"
                                        onChange={handleInputChange}
                                        value={user.Message}
                                        className="w-full px-4 py-4 bg-white/80 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-slate-700 placeholder:text-slate-400 hover:border-slate-300 focus:shadow-lg focus:shadow-blue-500/10 resize-none focus:bg-white"
                                        required
                                        disabled={isLoading}
                                    />
                                    <div className="absolute top-4 right-4">
                                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button 
                                onClick={handleFormSubmit}
                                disabled={isLoading}
                                className={`w-full font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg relative overflow-hidden group ${
                                    isLoading 
                                        ? 'bg-slate-400 cursor-not-allowed text-white' 
                                        : 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white hover:shadow-2xl hover:shadow-blue-500/25 active:scale-98 transform hover:-translate-y-0.5'
                                }`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {isLoading ? (
                                    <span className="flex items-center justify-center space-x-3 relative z-10">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        <span>Sending Message...</span>
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center space-x-3 relative z-10">
                                        <span>Send Message</span>
                                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
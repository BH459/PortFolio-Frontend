export const ErrorPage = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-white via-blue-50/30 to-blue-100/20 text-slate-800 px-4">
            <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center">
                {/* 404 Display */}
                <div className="mb-8">
                    <div className="relative">
                        {/* Main 404 Text */}
                        <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent animate-pulse font-serif">
                            404
                        </h1>
                        
                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
                        <div className="absolute -top-6 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-bounce opacity-50" style={{animationDelay: '0.5s'}}></div>
                        <div className="absolute -bottom-2 -left-6 w-4 h-4 bg-blue-600 rounded-full animate-bounce opacity-40" style={{animationDelay: '1s'}}></div>
                        <div className="absolute -bottom-4 -right-4 w-5 h-5 bg-blue-700 rounded-full animate-bounce opacity-70" style={{animationDelay: '1.5s'}}></div>
                    </div>
                </div>

                {/* Error Message */}
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
                        Oops! <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Page Not Found</span>
                    </h1>
                    <p className="text-lg text-slate-600 mb-2">
                        The page you're looking for seems to have wandered off into the digital void.
                    </p>
                    <p className="text-base text-slate-500">
                        Don't worry, even the best explorers sometimes take a wrong turn!
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <button 
                        onClick={() => window.history.back()}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
                    >
                        Go Back
                    </button>
                    <button 
                        onClick={() => window.location.href = '/'}
                        className="bg-transparent border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 active:scale-95"
                    >
                        Home Page
                    </button>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60" style={{animation: 'float 4s ease-in-out infinite'}}></div>
                <div className="absolute top-40 right-20 w-6 h-6 bg-blue-500 rounded-full opacity-40" style={{animation: 'float 4s ease-in-out infinite', animationDelay: '1s'}}></div>
                <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-600 rounded-full opacity-50" style={{animation: 'float 4s ease-in-out infinite', animationDelay: '2s'}}></div>
                <div className="absolute bottom-20 right-10 w-5 h-5 bg-blue-400 rounded-full opacity-30" style={{animation: 'float 4s ease-in-out infinite', animationDelay: '3s'}}></div>

                {/* Global styles */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                        @keyframes float {
                            0%, 100% { transform: translateY(0px); }
                            50% { transform: translateY(-20px); }
                        }
                    `
                }} />
            </div>
        </div>
    );
};
export const Alert = ({ handlebtn, alertData }) => {
    return (
        <div className="fixed top-4 sm:top-6 md:top-8 left-1/2 transform -translate-x-1/2 z-50 w-[90%] sm:w-[85%] md:w-full md:max-w-md mx-auto px-2 sm:px-0">
            <div className={`px-4 sm:px-5 md:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl backdrop-blur-xl border transition-all duration-500 ease-out transform ${
                alertData.show ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-4 opacity-0 scale-95'
            } ${
                alertData.type === 'success'
                    ? 'bg-emerald-50/95 border-emerald-200/50 text-emerald-800'
                    : 'bg-red-50/95 border-red-200/50 text-red-800'
            }`}>
                <div className="flex items-start sm:items-center space-x-2 sm:space-x-3">
                    <div className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center mt-0.5 sm:mt-0 ${
                        alertData.type === 'success' ? 'bg-emerald-100' : 'bg-red-100'
                    }`}>
                        {alertData.type === 'success' ? (
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        ) : (
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </div>
                    <div className="flex-1 min-w-0 pr-2">
                        <p className="font-medium text-xs sm:text-sm md:text-sm leading-tight sm:leading-normal break-words">
                            {alertData.message}
                        </p>
                    </div>
                    <button
                        onClick={handlebtn}
                        className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-white/50 touch-manipulation"
                        aria-label="Close alert"
                    >
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
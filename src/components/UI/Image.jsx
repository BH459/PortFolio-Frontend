export const ImageCom = () => {
    return(
        <>
            <img
                id="profile-img"
                src="/Portfolio_image.png"
                alt="Profile"
                loading="lazy"
                className="rounded-full shadow-[0_0_30px_10px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_20px_rgba(37,99,235,0.4)] h-[18.5rem] w-[18.5rem] sm:h-80 sm:w-80 md:h-64 md:w-64 lg:h-96 lg:w-96 object-cover transition-all duration-500 hover:scale-105 border-4 border-white/50 backdrop-blur-sm"
            />
        </>
    )
}
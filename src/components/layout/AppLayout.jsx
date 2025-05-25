import { Outlet, useNavigation } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const AppLayout = () => {
    const navigation = useNavigation();
    
    if(navigation.state === "loading") return <Loading />;
    return(
       <>
        <Header />
        <Outlet />
        <Footer />
       </> 
    )
}
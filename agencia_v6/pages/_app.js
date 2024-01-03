import '@/styles/globals.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {useEffect} from "react";
import MenuContainer from "@/components/menu/MenuContainer";

export default function App({Component, pageProps}) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (

            <MenuContainer>
                <Component {...pageProps} />
            </MenuContainer>
    )
}

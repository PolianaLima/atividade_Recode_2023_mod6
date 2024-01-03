import React from 'react';
import MenuSite from "@/components/menu/MenuSite";
import Footer from "@/components/menu/Footer";

function MenuContainer({children}) {
    return (
        <>
            <MenuSite/>
            <div className="min-heigth mt-3">{children}</div>
            <Footer/>
        </>

    );
}

export default MenuContainer;
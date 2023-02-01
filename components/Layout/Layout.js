import React, { Children } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
const DefaultLayout = ({children})=> {
    
        return (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
     
    );
}

export default  DefaultLayout
import React, { useState, useEffect } from "react";
import Image from "next/image";
//import { FaArrowCircleUp } from "react-icons/fa";
//import { Button } from "./Styles";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
 const [scrollTop, setScrollTop] = useState("");


  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

   useEffect(() => {
     window.addEventListener("scroll", handleScroll);

     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, [scrollTop]);

   const handleScroll = () => {
     setScrollTop(window.scrollY);
   };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className={`w-10 md:mt-[25%] sm:mt-[65%] mt-[76%] lg:ml-[95%] md:ml-[90%] ml-[76%] z-40 cursor-pointer   fixed ${
        visible ? "inline arrow " : "  hidden "
      } `}
      onClick={scrollToTop}
    >
      <Image src="/Arrow.png" alt="arrow" fill className="custom_img" />
    </div>
    // style={{ display: visible ? "inline" : "none" }}}
  );
};

export default ScrollButton;

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import { useTranslation } from "next-i18next";
import LocaleSwitcher from "../ui/Locale-switcher";
import { useRouter } from "next/router";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// //import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";



import Arrow from "../ui/Arrow";

export default  function Header()  {


  


   const router = useRouter();
    const { t } = useTranslation("");
    console.log(router)

    useEffect(() => {
      let dir = router.locale == "ar" ? "rtl" : "ltr";
      let lang = router.locale == "ar" ? "ar" : "en";
      document.querySelector("html").setAttribute("dir", dir);
      document.querySelector("html").setAttribute("lang", lang);

      
    }, [router.locale]);

  
  const [scrollTop, setScrollTop] = useState("");
  const [showHeader, setShowHeader] = useState(false);

  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScrollTop(window.scrollY);
  };

  useEffect(() => {
    //console.log("scroll top change ==> ", scrollTop);
    if (window.scrollY > 250) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  }, [scrollTop]);

  const [isMenu, setMenu] = useState(false);

  return (
    <>
      <div className=" w-full h-[50%]   relative z-40">
        <div className="w-full  bg-[#4F504D] p-1  justify-end items-end   ">
          <Container>
            <div className=" md:w-[53%]  z-10   w-[90%] flex md:justify-end justify-between sm:gap-10  text-[#FFFFFF]  font-Roboto md:ml-[44%] ml-3 md:pl-0 pl-3 md:gap-10 gap-6 md:py-[5px]">
              <div className="flex md:justify-end   gap-1 md:w-[120px] w-full ">
                <div className="sm:w-[15px] w-[10px] cursor-pointer md:ml-5 ">
                  <Image
                    src="/Call.svg"
                    fill
                    alt="call-icon"
                    className="custom_img"
                  />
                </div>
                <span className=" text-[14px] leading-[21px] cursor-pointer mt-1 md:text-medium text-xs  ">
                  800-MYRIDE
                </span>
              </div>

              <div className="md:flex hidden gap-2  md:w-[140px] ">
                <div className="w-[20px] cursor-pointer">
                  <Image
                    src="/Email.svg"
                    fill
                    alt="login-icon"
                    className="custom_img"
                  />
                </div>
                <span className=" text-[14px] leading-[21px]  mt-1 cursor-pointer md:text-medium text-xs">
                  info@myridepay.com
                </span>
              </div>

              <div className="flex md:justify-between gap-2 md:pl-0 pl-4  md:w-[50px] w-full   ">
                <div className="sm:w-[12px] w-[10px] cursor-pointer ">
                  <Image
                    src="/Login.svg"
                    fill
                    alt="login-icon"
                    className="custom_img"
                  />
                </div>
                <span className=" text-[14px] leading-[21px] mt-1 cursor-pointer md:text-medium text-xs">
                  Login
                </span>
              </div>
            </div>
          </Container>
        </div>

        <div
          className={`md:py-0 ${
            showHeader
              ? "fixed transition-all duration-[0.3s] ease-in-out "
              : "relative"
          } top-0 left-0  w-full  py-6  bg-background bg-cover bg-no-repeat z-30  shadow-sm `}
        >
          <Container>
            <div className="  w-full  flex xl:ml-0 xl:gap-24  lg:gap-12 md:gap-0 sm:gap-64 gap-32 sm:p-0   text-[#707070]">
              <div className=" flex lg:pl-2 md:pt-2 md:pb-2 ">
                <div className="lg:w-[250px] md:w-[200x] sm:w-[190px] w-[140px] lg:ml-4 md:ml-0 ml-3 p-4 lg:pl-14 md:pl-2">
                  <Image src="logo.svg" fill className="custom_img" />
                </div>
              </div>

              {isMenu ? (
                <div
                  className="w-5 h-5 mt-4  md:invisible visible "
                  onClick={() => setMenu(false)}
                >
                  <Image
                    src="/close.png"
                    alt="close"
                    fill
                    className="custom_img"
                  />
                </div>
              ) : (
                <div
                  className="w-12 h-5 mt-4 bg-black  md:invisible visible "
                  onClick={() => setMenu(!isMenu)}
                >
                  button
                </div>
              )}
              {/*============================================= mobile View=================================== */}
              {isMenu && (
                <ul className="  md:invisible visible w-[70%]   pb-8 fixed mt-[55px] shadow bg-white    items-center justify-between font-raleway leading-[26px]  ">
                  <li className=" cursor-pointer pl-14 border-b  py-3">
                    Getting Started
                  </li>

                  <li className=" pl-14 border-b  py-3 cursor-pointer">
                    Services
                  </li>

                  <li className="pl-14 border-b  py-3 cursor-pointer">
                    Get In Touch
                  </li>

                  <li className=" pl-14 border-b  py-3 cursor-pointer">
                    Packages
                  </li>

                  <li className=" pl-14 border-b  py-3 cursor-pointer ">
                    FAQs
                  </li>

                  <li className="flex  gap-1 cursor-pointer pl-14 border-b  py-3">
                    <div className="w-[30px] h-[20px] ">
                      <Image
                        src="/flag.png"
                        fill
                        alt="flag"
                        className="custom_img"
                      />
                    </div>
                    <span>عربى</span>
                  </li>
                </ul>
              )}
              {/*============================================= desktop View=================================== */}
              <ul className="md:flex hidden  lg:gap-7 pr-2  md:gap-4  items-center justify-between font-raleway leading-[26px] ">
                <li className="hover:border-b-[1px] border-[#FF0000] cursor-pointer">
                  {/* <Link href="/">Getting Started</Link> */}
                  {t("header.Getting Started")}
                </li>
                <li className="hover:border-b-[1px] border-[#FF0000] cursor-pointer">
                  {/* <Link href="/Services"> Services</Link> */}
                  {t("header.Services")}
                </li>
                <li className="hover:border-b-[1px] border-[#FF0000] cursor-pointer">
                  {t("header.Get In Touch")}
                </li>
                <li className="hover:border-b-[1px] border-[#FF0000] cursor-pointer">
                  {t("header.Packages")}
                </li>
                <li className="hover:border-b-[1px] border-[#FF0000] cursor-pointer ">
                  {t("header.FAQs")}
                </li>

                <li className="flex hover:border-b-[1px] gap-1 border-[#FF0000] cursor-pointer">
                  <LocaleSwitcher />
                  {/* {i18n.language == "en" ? "English" : "ar"} */}
                  {/* <div className="w-[30px] h-[20px]">
                    <Image
                      src="/en.png"
                      fill
                      alt="flag"
                      className="custom_img"
                    />
                  </div>
                  <span>عربى</span> */}
                </li>
              </ul>
            </div>
          </Container>
        </div>

        <div>
          <Arrow />
        </div>
      </div>
    </>
  );
};



// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"])),
//     },
//   };
// }

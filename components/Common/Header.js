import React from "react";

import Image from "next/image";
import Container from "../ui/Container";
const Header = () => {
  return (
    <>
      <div>
        <div className="w-full bg-[#4F504D]  justify-end items-end   ">
          <Container>
            <div className=" md:w-[53%] w-[90%] flex md:justify-end justify-between sm:gap-10  text-[#FFFFFF] font-sans md:ml-[40%] ml-3 md:pl-0 pl-3 md:gap-10 gap-6 md:py-[5px]">
              <div className="flex md:justify-end   gap-1 md:w-[120px] w-full ">
                <div className="sm:w-[15px] w-[10px] cursor-pointer md:ml-5 ">
                  <Image
                    src="/Call.svg"
                    fill
                    alt="call-icon"
                    className="custom_img"
                  />
                </div>
                <span className=" cursor-pointer mt-1 md:text-medium text-xs  ">
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
                <span className="mt-1 cursor-pointer md:text-medium text-xs">
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
                <span className=" mt-1 cursor-pointer md:text-medium text-xs">
                  Login
                </span>
              </div>
            </div>
          </Container>
        </div>

        <div className="py-2">
          <Container>
            <div className=" w-full  flex lg:gap-12 gap-0  sm:p-0   text-[#707070]   ">
              <div className=" flex lg:pl-2 md:pt-2 md:pb-2 ">
                <div className="lg:w-[250px] md:w-[200x] sm:w-[190px] w-[140px] lg:ml-4 ml-0 lg:pl-14 md:pl-2">
                  <Image src="logo.svg" fill className="custom_img" />
                </div>
              </div>
              <div className="w-12 h-5 bg-black  md:invisible visible ">
                button
              </div>

              <ul className="md:flex hidden lg:gap-4 md:gap-3 lg:ml-5 py-5  items-center md:justify-center font-raleway leading-[26px] ">
                <li className="hover:border-b-[1px] border-[#FF0000] cursor-pointer">
                  Getting Started
                </li>
                <li className="hover:border-b-[1px] border-[#FF0000] cursor-pointer">
                  Services
                </li>
                <li className="hover:border-b-[1px] border-[#FF0000] cursor-pointer">
                  Get In Touch
                </li>
                <li className="hover:border-b-[1px] border-[#FF0000] cursor-pointer">
                  Packages
                </li>
                <li className="hover:border-b-[1px] border-[#FF0000] cursor-pointer ">
                  FAQs
                </li>
                <li className="flex hover:border-b-[1px] gap-1 border-[#FF0000] cursor-pointer">
                  <div className="w-[30px] h-[20px]">
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
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Header;

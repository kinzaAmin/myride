import React from "react";

import Image from "next/image";
import Container from "../ui/Container";
const Header = () => {
  return (
    <>
      <div>
        <div className="w-full bg-[#4F504D] px-[15px] justify-end font-raleway  ">
          <Container>
            <div className=" w-full flex md:justify-end sm:gap-20 gap-2  text-[#FFFFFF] font-raleway sm:ml-0 ml-6  md:gap-10 md:py-[5px]">
              <div className="flex md:justify-between   gap-1 md:w-[120px] w-full md:ml-0 ml-4">
                <div className="sm:w-[20px] w-[10px] cursor-pointer md:ml-5 ">
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

              <div className="md:flex hidden gap-3  md:w-[180px] w-0 pl-3">
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

              <div className="flex md:justify-between gap-2 md:w-[80px] w-[400px] md:mr-0 mr-5 ">
                <div className="sm:w-[20px] w-[10px] cursor-pointer md:ml-5">
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

        <div className="">
          <Container>
            <div className=" w-full  flex md:justify-between md:gap-0  gap-10 py-6  sm:p-0 p-4  text-[#707070]   ">
              <div className=" flex md:pl-2 md:pt-2 md:pb-2 ">
                <div className="md:w-[250px] sm:w-[190px] w-[140px] sm:ml-0 ml-4">
                  <Image src="logo.svg" fill className="custom_img" />
                </div>
              </div>
              <div className="w-12 h-5 bg-black  md:invisible visible ">
                button
              </div>

              <ul className="md:flex hidden lg:gap-14 md:gap-6  items-center justify-end ">
                <li className="hover:border-b-[1px] border-[#FF0000]">
                  Getting Started
                </li>
                <li className="hover:border-b-[1px] border-[#FF0000]">
                  Services
                </li>
                <li className="hover:border-b-[1px] border-[#FF0000]">
                  Get In Touch
                </li>
                <li className="hover:border-b-[1px] border-[#FF0000]">FAQs</li>
                <li className="flex hover:border-b-[1px] gap-1 border-[#FF0000]">
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

import React from "react";

import Image from "next/image";
import Container from "../ui/Container";
const Header = () => {
  return (
    <>
      <div>
        <div className="w-full bg-[#4F504D] px-[15px] justify-end font-raleway ">
          <Container>
            <div className=" w-full flex md:justify-end gap-5 text-[14px] text-[#FFFFFF] font-raleway  md:gap-10 md:py-[5px]">
              <div className="flex md:justify-between md:gap-0  gap-2 md:w-[130px] w-full md:ml-0 ml-20">
                <div className="md:w-[20px] w-[10px]">
                  <Image
                    src="/Call.svg"
                    fill
                    alt="call-icon"
                    className="custom_img"
                  />
                </div>
                <span className=" mt-2 md:text-normal test:xs">
                  800-MYRIDE
                </span>
              </div>

              <div className="flex justify-between  md:w-[180px] w-0 md:visible invisible">
                <div className="w-[20px]">
                  <Image
                    src="/Email.svg"
                    fill
                    alt="login-icon"
                    className="custom_img"
                  />
                </div>
                <span className="mt-2">info@myridepay.com</span>
              </div>

              <div className="flex md:justify-between gap-2 md:w-[80px] w-[400px] md:mr-0 mr-20 ">
                <div className="md:w-[20px] w-[20px]">
                  <Image
                    src="/Login.svg"
                    fill
                    alt="login-icon"
                    className="custom_img"
                  />
                </div>
                <span className=" mt-2">Login</span>
              </div>
            </div>
          </Container>
        </div>

        <div className="">
          <Container>
            <div className=" w-full  flex md:justify-between md:gap-0 gap-10 py-6  text-[#707070]   ">
              <div className=" flex ">
                <div className="md:w-[250px] w-[190px]">
                  <Image src="logo.svg" fill className="custom_img" />
                </div>
              </div>
              <div className="w-12 h-5 bg-black  md:invisible visible ">button</div>

              <ul className="flex lg:gap-14 md:gap-6 items-center justify-end md:visible invisible ">
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

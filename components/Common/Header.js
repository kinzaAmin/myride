import React from "react";

import Image from "next/image";
import Container from "../ui/Container";
const Header = () => {
  return (
    <>
      <div className="md:w-[100%] w-full h-[40%] ">
        <div className="md:w-[100%] xs:w-[100%] w-[100%] flex  h-[10%] bg-black ">
          <Container>
            <div className="md:w-[89%]   w-[100%] md:flex items-center p-2 md:gap-10 gap-3 md:ml-[6%] ml-[30%] ">
              <div className=" flex  md:w-[70%] w-[100%]">
                <Image
                  src="Call.svg"
                  width={20}
                  height={20}
                  className="relative ml-[78%]"
                />

                <p className="text-white md:text-sm text:xs text-center w-full md:mr-0 mr-[90%]  ">
                  800-MYRIDE
                </p>
              </div>
              <div className=" flex">
                <Image
                  src="Email.svg"
                  width={20}
                  height={10}
                  className=" relative"
                />

                <p className="md:text-white text:sm text:hidden ml-2 text-center  ">
                  info@myridepay.com
                </p>
              </div>
              <div className=" flex gap-5 text-center md:ml:0 ml-10 text-white items-center sm:w-[15%] xs:w-[20%] w-[10%] ">
                <div className="flex-shrink-0">
                  <Image
                    src="Login.svg"
                    width={20}
                    height={10}
                    className="  relative "
                  />
                </div>
                <span className=" bg-gray-500  p-2 cursor-pointer rounded ">
                  Login
                </span>
              </div>
            </div>
          </Container>
        </div>

        <div className="w-full  sx:w-full flex p-5">
          <Container className="flex">
            <Image
              src="./logo.svg"
              width={20}
              height={10}
              alt="logo"
              className="relative"
            />

            <div className="md:flex justify-between ml-[25%] lg:w-[66%] md:w-full flex:hidden ">
              <div className="cursor-pointer hover:border-b-2 border-orange-500">
                Getting Statrted
              </div>
              <div className="cursor-pointer hover:border-b-2 border-orange-500">
                Services
              </div>
              <div className="cursor-pointer hover:border-b-2 border-orange-500">
                Get In Touch
              </div>
              <div className="cursor-pointer hover:border-b-2 border-orange-500">
                Packages
              </div>
              <div className="cursor-pointer hover:border-b-2 border-orange-500">
                FAQs
              </div>

              {/* <div> عربي</div> */}
              <div className="flex hover:border-b-2 border-orange-500">
                <Image
                  src="/flag.png"
                  alt="language"
                  width={30}
                  height={20}
                  className="relative"
                />

                <div className="">عربي</div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Header;

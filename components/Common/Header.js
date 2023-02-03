import React from "react";

import Image from "next/image";
import Container from "../ui/Container";
const Header = () => {
  return (
    <>
      <div className="md:w-[100%] w-full h-[40%] ">
        <div className="md:w-[100%] xs:w-[100%] w-[100%] flex  h-[10%] bg-black ">
          <Container>
            <div className="md:w-[89%]  w-[100%] md:flex items-center p-2 md:gap-10 gap-3 md:ml-[6%] ml-[30%] ">
              <div className=" flex  md:w-[70%] w-[15%]">
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
              <div className=" flex    md:visible  invisible ">
                <Image
                  src="Email.svg"
                  width={20}
                  height={10}
                  className=" relative"
                />

                <p className="md:text-white text:sm ml-2 text-center  ">
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

        <div className="w-full   flex p-5 bg-slate-600">
          <div className=" relative shrink-0 w-[400px] h-[30px]">
            <Image
              src="./logo.svg"
              fill
              // width={20}
              // height={10}
              alt="logo"
              // className="relative"
            />
          </div>
          <Container className="flex ">
            <div>
              <div className="flex justify-between lg:gap-8 gap-7 lg:ml-[16%] md:ml-[9%]  lg:w-[90%] md:w-full md:visible invisible ">
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

                  <div className=" ml-3">عربي</div>
                </div>
              </div>

              <div className="md:invisible visible w-10 h-5 bg-black ml-24">
                <hr />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Header;

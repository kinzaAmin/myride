import React from "react";

import Image from "next/image";
const Header = () => {
  return (
    <>
      <div className="md:w-[100%] w-full h-[40%] ">
        <div className="md:w-[100%] xs:w-[100%] w-[100%] flex justify-end h-[10%] bg-black ">
          <div className="md:w-[100%]   w-[100%] md:flex items-center p-2 md:gap-10 gap-3 md:ml-[6%] ml-[30%] ">
            <div className=" md:w-[100%] w-[100%]">
              <p className="text-white md:text-sm text:xs text-center md:ml-[38%] w-full md:mr-0 mr-[90%] ">
                800-MYRIDE
              </p>
            </div>
            <div className=" ">
              <p className="md:text-white text:sm text:hidden  ">
                info@myridepay.com
              </p>
            </div>
            <div className=" bg-gray-500 cursor-pointer text-center md:ml:0 ml-10 text-white p-1 rounded items-center sm:w-[15%] xs:w-[20%] w-[30%] ">
              Login
            </div>
          </div>
        </div>

        <div className="w-full sx:w-full flex p-5">
          <div className=" relative w-[20%] ">
            <Image src="./logo.svg" fill alt="logo" />
          </div>

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
            <div className="relative w-[6%]">
              <Image src="/flag.png" alt="language" fill />
            </div>

            <div className="hover:border-b-2 border-orange-500">عربي</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

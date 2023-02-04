import React from "react";

import Image from "next/image";
import Container from "../ui/Container";
const Header = () => {
  return (
    <>
      <div>
        <div className="w-full bg-[#4F504D] px-[15px] justify-end ">
          <Container>
            <div className=" w-full flex justify-end   gap-10 py-[5px]">
              <div className="flex justify-between w-[130px]">
                <div className="w-[20px]">
                  <Image
                    src="/Call.svg"
                    fill
                    alt="call-icon"
                    className="custom_img"
                  />
                </div>
                <span>800-MYRIDE</span>
              </div>

              <div className="flex justify-between w-[180px]">
                <div className="w-[20px]">
                  <Image
                    src="/Email.svg"
                    fill
                    alt="login-icon"
                    className="custom_img"
                  />
                </div>
                <span>info@myridepay.com</span>
              </div>

              <div className="flex justify-between w-[80px]">
                <div className="w-[20px]">
                  <Image
                    src="/Login.svg"
                    fill
                    alt="login-icon"
                    className="custom_img"
                  />
                </div>
                <span>Login</span>
              </div>
            </div>
          </Container>
        </div>

        <div className="">
          <Container>
            <div className="flex justify-between py-6 w-[100%]   ">
              <div className=" flex ">
                <div className="w-[250px]">
                  <Image src="logo.svg" fill className="custom_img" />
                </div>
              </div>

              <ul className="flex gap-16  items-center justify-end ">
                <li>Getting Started</li>
                <li>Services</li>
                <li>Get In Touch</li>
                <li>FAQs</li>
                <li className="flex gap-4">
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

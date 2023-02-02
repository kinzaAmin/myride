import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="w-full h-[40%] bg-slate-500 text-white flex-col pt-3 justify-between ">
        {/* <div className="flex justify-between">
          <div>
            <div>USEFUL LINKS</div>
            <div className=" flex w-full">
              <div className="w-[60%] h-[1px] bg-red-600"></div>
              <div className="w-[100%] h-[1px] bg-black"></div>
            </div>
          </div>

          <div>
            <div>USEFUL LINKS</div>
            <div className=" flex w-full">
              <div className="w-[60%] h-[1px] bg-red-600"></div>
              <div className="w-[100%] h-[1px] bg-black"></div>
            </div>
          </div>

          <div>
            <div>USEFUL LINKS</div>
            <div className=" flex w-full">
              <div className="w-[60%] h-[1px] bg-red-600"></div>
              <div className="w-[100%] h-[1px] bg-black"></div>
            </div>
          </div>

          <div>
            <div>USEFUL LINKS</div>
            <div className=" flex w-full">
              <div className="w-[60%] h-[1px] bg-red-600"></div>
              <div className="w-[100%] h-[1px] bg-black"></div>
            </div>
          </div>
        </div> */}
        <Container>
          <div className="md:flex   justify-between gap-6">
            <div className="flex-col justify-between md:w-[30%] w-full h-[10%]">
              <div className=" relative w-[30%] h-[10%]  ">
                
                <Image src="./footerLogo.svg" fill alt="logo" />
              </div>
              <div className=" flex w-full mt-2">
                <div className="w-[30%] h-[1px] bg-red-600"></div>
                <div className="w-[70%] h-[1px] bg-black"></div>
              </div>
              <div className="fex-col justify-between mt-3 md:text-sm text:xs">
                <div>
                  MyridePay is a one stop solution payment gateway for car
                  rental Industries in UAE. We provide secure, fast and easy
                  options to receive and manage your payments by your clients.
                  Owned by Myride Middle East DMCC.
                </div>
                <div className="flex gap-5 w-[68%] ml-7 mt-5">
                  <div className=" relative  md:w-full w-[6%] lg:h-11 md:h-6 h-6 bg-white rounded-full   ">
                    <Image
                      src="./Twitter.svg"
                      fill
                      alt="fb logo"
                      className="cursor-pointer "
                    />
                  </div>
                  <div className=" relative  md:w-full w-[6%] lg:h-11 md:h-6 h-6 cursor-pointer  bg-white rounded-full hover:bg-red-600 ">
                    <Image src="./Facebook.svg" fill alt="fb logo" />
                  </div>
                  <div className=" relative   md:w-full w-[6%] lg:h-11 md:h-6 h-6 cursor-pointer  bg-white rounded-full">
                    <Image src="./Insta.svg" fill alt="fb logo" />
                  </div>
                  <div className=" relative  md:w-full w-[6%] lg:h-11 md:h-6 h-6 cursor-pointer  bg-white rounded-full ">
                    <Image src="./Linkedin.svg" fill alt="fb logo" />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:mt-0 mt-6">
              <div className="lg:text-2xl  text-xs font-bold ">
                USEFUL LINKS
              </div>
              <div className=" flex w-full mt-2">
                <div className="w-[30%] h-[1px] bg-red-600"></div>
                <div className="w-[70%] h-[1px] bg-black"></div>
              </div>
              <div className="mt-3  md:text-sm text:xs">
                <ul>
                  <li className="hover:text-red-600">Getting started</li>
                  <li className="hover:text-red-600">Services</li>
                  <li className="hover:text-red-600">Get in touch</li>
                  <li className="hover:text-red-600">Packages</li>
                  <li className="hover:text-red-600">FAQs</li>

             <li className="hover:text-red-600"> <Link href="/Terms">Terms And Conditions</Link></li> 

                  <li className="hover:text-red-600"> <Link href="/Refusal"> Refusal</Link></li>
                  <li className="hover:text-red-600"> <Link href="/ReturnPolicy ">Return Policy</Link></li>
                  <li className="hover:text-red-600">
                  <Link href="/Delivery "> Delivery and Collection</Link> 
                  </li>
                  <li className="hover:text-red-600"><Link href="/PrivacyPolicy "> Privacy Policy </Link></li>
                </ul>
              </div>
            </div>

            <div className="flex-col justify-between md:mt-0 mt-6 ">
              <div className="lg:text-2xl md:text-base text-sm font-bold">
                Download App
              </div>
              <div className=" flex w-full mt-2">
                <div className="w-[30%] h-[1px] bg-red-600"></div>
                <div className="w-[70%] h-[1px] bg-black"></div>
              </div>
              <div className="flex justify-between mt-3">
                <div>
                  <div className=" md:text-sm text:xs">
                    <p className="text-red-600 leading-[2px] mb-2">
                      SCAN THE QR CODE
                    </p>
                    TO DOWNLOAD <br />
                    THE APP
                  </div>
                  <div className="mt-7">
                    {/* <div className="bg-black w-full text-center border-2 border-white ">
                      google play
                    </div>
                    <div className="bg-black w-full text-center mt-3 border-2 border-white  ">
                      Apple store
                    </div> */}

                    <div className="relative h-20  w-20">
                      <Image src="./Playstore.svg" alt="play store" fill />
                    </div>

                    <div className=" relative  w-20 h-20">
                      <Image src="./Appstore.svg" alt="play store" fill />
                    </div>
                  </div>
                </div>

                {/* <div className=" md:w-full  w-[30%]  md:ml-2 ">
                  <Image src="./QR-Design.png"  fill/>

                  
                  <div className="bg-white text-red-600 p-1 "> Scan Me</div>

                   <div className="w-full h-[50%] bg-blue-300 mt-3">
                     scan here
                   </div> 
                </div>  */}
              </div>
            </div>

            <div>
              <div className="md:mt-0 mt-6 ">
                <div className="lg:text-2xl md:text-base text-sm font-bold">
                  Address
                </div>
                <div className=" flex w-full mt-2">
                  <div className="w-[30%] h-[1px] bg-red-600"></div>
                  <div className="w-[70%] h-[1px] bg-black"></div>
                </div>
                <div className="mt-3 md:pl-4 pl-0">
                  <div>
                    <div>
                      <div></div>
                      <div>info@myridepay.com</div>
                    </div>

                    <div>
                      <div></div>
                      <div>+971 4 566 7048</div>
                    </div>
                    <div>
                      <div></div>
                      <div>+971 56 204 3727</div>
                    </div>

                    <div>
                      <div></div>
                      <div>Jumeirah Lake Towers, Dubai</div>
                    </div>
                  </div>

                  <div className="md:mt-1 mt-6 ">
                    <div className="lg:text-2xl md:text-base text-sm font-bold">
                      MAP
                    </div>
                    <div className=" flex w-full mt-2">
                      <div className="w-[30%] h-[1px] bg-red-600"></div>
                      <div className="w-[70%] h-[1px] bg-black"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            © Copyright 2022 Myride Pay. All Rights Reserved.
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;

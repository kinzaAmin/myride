import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="w-full h-[40%] grid-col-4 bg-darkGray text-[#e4e4e4] font-raleway text-white flex-col pt-3 justify-between md:p-0 p-7">
        {/* <div className="flex justify-between">
          <div>
            <div>USEFUL LINKS</div>
            <div className=" flex w-full">
              <div className="w-[60%] h-[1px] bg-[#ff0000]"></div>
              <div className="w-[100%] h-[1px] bg-black"></div>
            </div>
          </div>

          <div>
            <div>USEFUL LINKS</div>
            <div className=" flex w-full">
              <div className="w-[60%] h-[1px] bg-[#ff0000]"></div>
              <div className="w-[100%] h-[1px] bg-black"></div>
            </div>
          </div>

          <div>
            <div>USEFUL LINKS</div>
            <div className=" flex w-full">
              <div className="w-[60%] h-[1px] bg-[#ff0000]"></div>
              <div className="w-[100%] h-[1px] bg-black"></div>
            </div>
          </div>

          <div>
            <div>USEFUL LINKS</div>
            <div className=" flex w-full">
              <div className="w-[60%] h-[1px] bg-[#ff0000]"></div>
              <div className="w-[100%] h-[1px] bg-black"></div>
            </div>
          </div>
        </div> */}
        <Container>
          <div className="grid grid-cols-4   gap-6">
            <div className="flex-col justify-between md:w-[30%] w-full h-[10%]">
              <div className=" footer_logo mt-5 w-[250px] ">
                <Image src="./footerLogo.svg" fill alt="logo" className="custom_img" />
              </div>

             
              <div className=" w-60 fex-col justify-between mt-3 md:text-sm text:xs font-raleway leading-7">
                <div className="">
                  MyridePay is a one stop solution payment gateway for car
                  rental Industries in UAE. We provide secure, fast and easy
                  options to receive and manage your payments by your clients.
                  Owned by Myride Middle East DMCC.
                </div>
                <div className=" w-[65%]  flex gap-2 mt-5 ">
                  <div className=" w-[70px] h-[30px] bg-white rounded-full   ">
                    <Image
                      src="./Twitter.svg"
                      fill
                      alt="fb logo"
                      className="cursor- custom_img "
                    />
                  </div>
                  <div className=" relative  w-[70px] h-[30px]  cursor-pointer  bg-white rounded-full hover:bg-[#ff0000] ">
                    <Image src="./Facebook.svg" fill alt="fb logo" />
                  </div>
                  <div className=" relative   md:w-[70px] md:h-[30px] cursor-pointer  bg-white rounded-full">
                    <Image src="./Insta.svg" fill alt="fb logo" />
                  </div>
                  <div className=" relative w-[70px] h-[30px] cursor-pointer  bg-white rounded-full ">
                    <Image src="./Linkedin.svg" fill alt="fb logo" />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:mt-0 mt-6 font-light">
              <div className="text-2xl mt-5  font-bold ">USEFUL LINKS</div>
              <div className=" flex w-full mt-2">
                <div className="md:w-[30%] w-16 h-[1px] bg-[#ff0000]"></div>
                <div className="w-[70%] h-[1px] bg-black"></div>
              </div>
              <div className="mt-3  md:text-sm text:xs">
                <li className="hover:text-[#ff0000]">Getting started</li>
                <li className="hover:text-[#ff0000]">Services</li>
                <li className="hover:text-[#ff0000]">Get in touch</li>
                <li className="hover:text-[#ff0000]">Packages</li>
                <li className="hover:text-[#ff0000]">FAQs</li>

                <li className="hover:text-[#ff0000]">
                  <Link href="/Terms">Terms And Conditions</Link>
                </li>

                <li className="hover:text-[#ff0000]">
                  <Link href="/Refusal"> Refusal</Link>
                </li>
                <li className="hover:text-[#ff0000]">
                  <Link href="/ReturnPolicy ">Return Policy</Link>
                </li>
                <li className="hover:text-[#ff0000]">
                  <Link href="/Delivery "> Delivery and Collection</Link>
                </li>
                <li className="hover:text-[#ff0000]">
                  <Link href="/PrivacyPolicy "> Privacy Policy </Link>
                </li>
              </div>
            </div>

            <div className="flex-col justify-between md:mt-0 mt-6 ">
              <div className="text-2xl font-bold  mt-5">Download App</div>
              <div className=" flex w-full mt-2">
                <div className="md:w-[30%] w-16 h-[1px] bg-[#ff0000]"></div>
                <div className="w-[70%] h-[1px] bg-black"></div>
              </div>
              <div className="flex justify-between mt-3">
                <div>
                  <div className=" md:text-sm text:xs">
                    <p className="text-[#ff0000] leading-[2px] mb-2">
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

                  
                  <div className="bg-white text-[#ff0000] p-1 "> Scan Me</div>

                   <div className="w-full h-[50%] bg-blue-300 mt-3">
                     scan here
                   </div> 
                </div>  */}
              </div>
            </div>

            <div>
              <div className="md:mt-0 mt-6 ">
                <div className="text-2xl  mt-5  font-bold">Address</div>
                <div className=" flex w-full mt-2">
                  <div className="md:w-[30%] w-16 h-[1px] bg-[#ff0000]"></div>
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
                    <div className="text-2xl  mt-5 font-bold">MAP</div>
                    <div className=" flex w-full mt-2">
                      <div className="md:w-[30%] w-14 h-[1px] bg-[#ff0000]"></div>
                      <div className="w-[70%] h-[1px] bg-black"></div>
                    </div>
                   <div className="mt-4">

                   <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d462561.6591536894!2d55.227488!3d25.076022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8f1d1d5afb1fc4aa!2sRentMyRide%20%7C%20Luxury%20Car%20Rental%20In%20Dubai!5e0!3m2!1sen!2sus!4v1675619009645!5m2!1sen!2sus" 
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                   
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

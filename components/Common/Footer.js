import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import Link from "next/link"
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
const Footer = () => {
  const router = useRouter();
 
  const { t } = useTranslation("");
  return (
    <>
      <div className="  w-full h-[40%]  bg-darkGray text-[#e4e4e4] font-raleway  flex-col pt-3 justify-between md:p-0 p-7">
        <Container>
          <div className="grid md:grid-cols-4 grid-cols-1 md:gap-12 gap-2  md:p-3">
            <div className="flex-col justify-between md:w-[30%] w-full h-[10%]">
              <Link href="/">
                <div className=" footer_logo mt-5 lg:w-[250px] w-[180px] cursor-pointer ">
                  <Image
                    src="./footerLogo.svg"
                    fill
                    alt="logo"
                    className="custom_img"
                  />
                </div>
              </Link>

              <div className=" lg:w-60 md:w-40 w-full fex-col justify-between mt-3 md:text-sm text:xs font-raleway leading-7">
                <div className="text-[#e4e4e4] text-[16px] font-light font-sans leading-7 lg:w-[255px] md:w-[180px] w-full ">
                  MyridePay is a one stop solution payment gateway for car
                  rental Industries in UAE. We provide secure, fast and easy
                  options to receive and manage your payments by your clients.
                  Owned by Myride Middle East DMCC.
                </div>
                <div className="   w-full  flex gap-1 lg:mt-5   ">
                  <div className="lg:w-[33px] md:w-[50px]  w-[30px]  md:h-[30px] bg-white rounded-full   ">
                    <Image
                      src="./Twitter.svg"
                      fill
                      alt="fb logo"
                      className="cursor- custom_img "
                    />
                  </div>
                  <div className=" lg:w-[33px] md:w-[50px] w-[30px]  md:h-[30px]  cursor-pointer  bg-white rounded-full hover:bg-[#ff0000] ">
                    <Image
                      src="./Facebook.svg"
                      fill
                      alt="fb logo"
                      className="cursor- custom_img "
                    />
                  </div>
                  <div className=" lg:w-[33px]   md:w-[50px]  w-[30px] md:h-[30px] cursor-pointer  bg-white rounded-full">
                    <Image
                      src="./Insta.svg"
                      fill
                      alt="fb logo"
                      className="cursor- custom_img "
                    />
                  </div>
                  <div className=" lg:w-[33px] md:w-[50px]  w-[30px] h-[30px] md:h-[30px]  cursor-pointer  bg-white rounded-full ">
                    <Image
                      src="./Linkedin.svg"
                      fill
                      alt="fb logo"
                      className="cursor- custom_img "
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-[255px]h-[359px]  md:mt-0 mt-6 font-light">
              <div className=" text-[24px] leading-[29px] mt-5 gap-9  font-bold ">
                {t("footer.Useful Links")}
              </div>
              <div className=" flex w-full mt-2">
                <div className="md:w-[30%] w-16 h-[1px] bg-[#ff0000]"></div>
                <div className="w-[70%] h-[1px] bg-black"></div>
              </div>
              <div className=" gap-72 mt-3 text-[#e4e4e4] font-sans  md:text-sm text:xs gap text-[16px] font-light ">
                <div className="flex gap-2 ">
                  <div className="bg-[#ff0000] w-2 h-2 mt-2"></div>
                  <p className="hover:text-[#ff0000] text-[16px] cursor-pointer leading-[29px]">
                    {t("footer.Getting started")}
                  </p>
                </div>
                <div className="flex gap-2 mt-4">
                  <div className="bg-[#ff0000] w-2 h-2 mt-2"></div>
                  <p className="hover:text-[#ff0000] text-[16px] leading-[29px]  cursor-pointer">
                    {t("footer.Services")}
                  </p>
                </div>
                <div className="flex gap-2 mt-4">
                  <div className="bg-[#ff0000] w-2 h-2 mt-2"></div>
                  <p className="hover:text-[#ff0000] text-[16px] leading-[29px]  cursor-pointer">
                    {t("footer.Get in touch")}
                  </p>
                </div>

                <div className="flex gap-2 mt-4">
                  <div className="bg-[#ff0000] w-2 h-2 mt-2"></div>
                  <p className="hover:text-[#ff0000] text-[16px] leading-[29px]  cursor-pointer">
                    {t("footer.Packages")}
                  </p>
                </div>

                <div className="flex gap-2 mt-4">
                  <div className="bg-[#ff0000] w-2 h-2 mt-2"></div>
                  <p className="hover:text-[#ff0000] text-[16px] leading-[29px] cursor-pointer">
                    {t("footer.FAQs")}
                  </p>
                </div>

                <div className="flex gap-2 mt-4">
                  <div className="bg-[#ff0000] w-2 h-2 mt-2"></div>
                  <p className="hover:text-[#ff0000] text-[16px] leading-[29px]  cursor-pointer">
                    {t("footer.Terms & Condition")}
                  </p>
                </div>
                <div className="flex gap-2 mt-4">
                  <div className="bg-[#ff0000] w-2 h-2 mt-2"></div>
                  <p className="hover:text-[#ff0000] text-[16px] leading-[29px]  cursor-pointer">
                    {t("footer.Refusal")}
                  </p>
                </div>

                <div className="flex gap-2 mt-4">
                  <div className="bg-[#ff0000] w-2 h-2 mt-2"></div>
                  <p className="hover:text-[#ff0000] text-[16px] leading-[29px]  cursor-pointer">
                    {t("footer.Return Policy")}
                  </p>
                </div>

                <div className="flex gap-2 mt-4">
                  <div className="bg-[#ff0000] w-2 h-2 mt-2"></div>
                  <p className="hover:text-[#ff0000] text-[16px]   leading-[29px] cursor-pointer">
                    {t("footer.Delivery and Collection")}
                  </p>
                </div>

                <div className="flex gap-2 mt-4">
                  <div className="bg-[#ff0000] w-2 h-2 mt-2"></div>
                  <p className="hover:text-[#ff0000] text-[16px] leading-[29px] cursor-pointer">
                    {t("footer.Privacy Policy")}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-col justify-between md:mt-0 mt-6 ">
              <div className="text-[24px] leading-[29px] font-bold  mt-5">
                {t("footer.Download App")}
              </div>
              <div className=" flex w-full mt-2">
                <div className="md:w-[30%] w-16 h-[1px] bg-[#ff0000] "></div>
                <div className="w-[70%] h-[1px] bg-black"></div>
              </div>
              <div className="grid grid-cols-2 justify-between  gap-20 sm:mt-3 mt-6">
                <div>
                  {/* <div className="absolute xl:w-[15%] md:w-[19%] sm:w-[18%] w-[30%]">
                    <Image
                      src="https://i0.wp.com/myridepay.com/wp-content/uploads/2022/01/QR-Design.png"
                      fill
                      alt="QR_CODE"
                      className="custom_img"
                    />
                  </div> */}

                  <div className="xl:mt-16 lg:mt-24 md:mt-14 sm:mt-8 mt-6 ">
                    <div className="xl:w-20 lg:h-10 h-6 lg:w-20 sm:w-12 w-8 cursor-pointer  ">
                      <Image
                        src="./Playstore.svg"
                        alt="play store"
                        fill
                        className="custom_img"
                      />
                    </div>

                    <div className="xl:w-20 lg:w-20  sm:w-12 w-8 h-10 lg:mt-2 cursor-pointer">
                      <Image
                        src="./Appstore.svg"
                        alt="play store"
                        fill
                        className="custom_img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="md:mt-0 mt-6 ">
                <div className="text-[24px] leading-[29px]  mt-5  font-bold">
                  {t("footer.Address")}
                </div>
                <div className=" flex w-full mt-2">
                  <div className="md:w-[30%] w-16 h-[1px] bg-[#ff0000]"></div>
                  <div className="w-[70%] h-[1px] bg-black"></div>
                </div>
                <div className="mt-3 md:pl-1 md:text-sm pl-0 text-[#e4e4e4]">
                  <div>
                    <div className="flex lg:gap-2 gap-1 text:sm hover:text-[#ff0000] cursor-pointer">
                      <div className="w-5 ">
                        <Image
                          src="/email1.svg"
                          alt=""
                          fill
                          className="custom_img "
                        />
                      </div>
                      <div>info@myridepay.com</div>
                    </div>

                    <div className="flex gap-2 mt-3 hover:text-[#ff0000] cursor-pointer">
                      <div className="w-5">
                        <Image
                          src="/telephone.svg"
                          alt=""
                          fill
                          className="custom_img "
                        />
                      </div>
                      <div>+971 4 566 7048</div>
                    </div>
                    <div className="flex gap-2 mt-3 hover:text-[#ff0000] cursor-pointer">
                      <div className="w-5">
                        <Image
                          src="/phone-call.svg"
                          alt=""
                          fill
                          className="custom_img "
                        />
                      </div>
                      <div>+971 56 204 3727</div>
                    </div>

                    <div className=" md:w-[150px] w-full flex gap-2 md:mt-0 mt-4 hover:text-[#ff0000] cursor-pointer">
                      <div className="md:w-5 w-4">
                        <Image
                          src="/Map.svg"
                          alt=""
                          fill
                          className="custom_img "
                        />
                      </div>
                      <div className="md:mt-4 ">
                        Jumeirah Lake Towers, Dubai
                      </div>
                    </div>
                  </div>

                  <div className="md:mt-0 mt-4">
                    <div className="text-[24px] leading-[29px] mt-5 font-bold">
                      MAP
                    </div>
                    <div className=" flex w-full mt-2">
                      <div className="md:w-[30%] w-14 h-[1px] bg-[#ff0000]"></div>
                      <div className="w-[70%] h-[1px] bg-black"></div>
                    </div>
                    <div className="mt-4 w-full ">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d462561.6591536894!2d55.227488!3d25.076022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8f1d1d5afb1fc4aa!2sRentMyRide%20%7C%20Luxury%20Car%20Rental%20In%20Dubai!5e0!3m2!1sen!2sus!4v1675619009645!5m2!1sen!2sus"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        className="custom_img"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 md:text-base sm:text-xsw xs:text-[5px]">
            ?? Copyright 2022 Myride Pay. All Rights Reserved.
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;

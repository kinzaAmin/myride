import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
const GetInTouch = ()=> {
    return (
      <>
        <div className="from-[#25252517]   bg-background1 bg-center bg-cover bg-no-repeat mt-8 ">
          <Container className="">
            <div className="md:flex justify-between text-white  xs:p-11 p-7">
              <div className="md:w-[50%] w-full mt-5 mb-2">
                <div>
                  <span className="md:text-[25px] leading-[25px] text-[20px] font-bold text-[#FFFFFF] ">
                    Ready to get started?
                  </span>

                  <span className="text-[16px] leading-[27px] text-[#FFFFFF] font-Roboto font-light">
                    <p className="w-[90%]">
                      Apply for the MyRidePay Online Payment Gateway Program
                      online by submitting your details.
                    </p>
                    <p>
                      Our Agent will contact you and guide you through the whole
                      process.
                    </p>
                    <p>
                      Our Agent will contact you and guide you through the whole
                      process.
                    </p>
                  </span>
                </div>

                <div className="md:mt-2  mt-8">
                  <span className="md:text-[25px] leading-[30px] text-[20px] font-bold text-[#FFFFFF]">
                    Onboarding
                  </span>

                  <p className="mt-3 text-[16px] leading-[27px] text-[#FFFFFF] font-Roboto font-light ">
                    We will assess your credentials and request for relevant
                    documentation, to assess the eligibility. Within 24 to 48
                    hours we will confirm your account, and you can take the
                    test tour or simply go live by integrating our payment
                    portal.
                  </p>
                </div>

                <div className="md:mt-2 mt-8">
                  <span className="md:text-[25px] font-raleway leading-[43px] font-normal text-[20px]  text-[#FFFFFF]">
                    Integration
                  </span>

                  <p className="mt-3 text-[16px] leading-[27px] font-Roboto text-[#FFFFFF] font-light">
                    It is time to integrate our payment solutions on your car
                    rental website and start receiving your payments through a
                    secure, easier and faster method.
                  </p>
                </div>
              </div>

              <div className=" md:w-[50%] w-full mt-5 ">
                <p className="md:text-center font-medium font-Roboto leading-[24px]  text-[24px]">
                  Create Your Online Payments Account Now
                </p>

                <div className="  grid  md:grid-cols-2 grid-cols-1 justify-between gap-4 md:ml-4 mt-5 text-[#7A8489]">
                  <input
                    type="text"
                    required
                    placeholder="Company Name*"
                    className="focus:outline-0 focus:border:none w-full  p-2"
                  />

                  <input
                    type="text"
                    required
                    placeholder="Contact Person*"
                    className="focus:outline-0  w-full p-2 md:mt-0 mt-3"
                  />
                </div>

                <div className="  grid  md:grid-cols-2 grid-cols-1 justify-between  gap-1 md:ml-4 md:mt-5 mt-3 w-full text-[#7A8489]">
                  <input
                    type="text"
                    required
                    placeholder="Contact Number*"
                    className="focus:outline-0 md:w-[96%] md:mt-0 mt-3  p-2"
                  />

                  <select
                    name="Number of Cars*"
                    id="cars"
                    required
                    className=" p-2 md:w-[95%] w-full md:mt-0 mt-4 focus:outline-0  "
                  >
                    <option value="volvo">Number of Cars*</option>
                    <option value="saab">(1-10)</option>
                    <option value="mercedes">(11-30)</option>
                    <option value="audi">(31-50)</option>
                    <option value="audi">(50+)</option>
                  </select>
                </div>

                <div className="bg-[#4f504d] md:w-[240px] w-[80%] px-[14px] py-[15px] text-center sm:text-[16px] text-[12px] font-Roboto font-medium rounded mt-8 md:ml-32 sm:ml-10 ml-4 cursor-pointer">
                  REQUEST A CALL BACK
                </div>

                <div className="flex gap-3 md:visible  invisible mt-14 ml-14">
                  <div className="w-[163px]">
                    <Image
                      src="./onlineRegistration.svg"
                      fill
                      className="custom_img"
                    />
                  </div>

                  <div className="w-[163px]">
                    <Image
                      src="/getApplication.webp"
                      fill
                      className="custom_img"
                    />
                  </div>
                  <div className="w-[163px]">
                    <Image
                      src="/RecevingPayments.webp"
                      fill
                      className="custom_img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </>
    );
};

export default GetInTouch;
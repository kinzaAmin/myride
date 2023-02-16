
import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image"; 
import Slider from "react-slick";
import Link from "next/link";
//import Sliderr from "@/components/ui/Sliderr";
const Services = ()=>{
 const settings = {
   //className: "slick-prev:before",
   dots: true,
   arrows: true,

   infinite: false,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 1,

   responsive: [
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
       },
     },
   ],
 };

    return (
      <>
        <div className=" md:px-0 px-10  ">
          <p className="text-center text-4xl text-[2rem] font-normal ">
            Services
          </p>
          <div className=" mx-5  min-w-md ">
            {/* <Sliderr /> */}

            <div className="md:text-2xl sm:text:lg text-xs  font-sans">
              <Container>
                <Slider {...settings}>
                  <Link href="">
                    <div className="   ">
                      <div className=" cursor-pointer  ">
                        <Image
                          src="/OnlinePayment.webp"
                          fill
                          alt="online payment system"
                          className="custom_img cursor-pointer"
                        />
                      </div>

                      <p className="text-center cursor-pointer">
                        Online Payment Solutions
                      </p>
                    </div>
                  </Link>

                  <div className="  ">
                    <div className=" cursor-pointer ">
                      <Image
                        src="/PaymentLinks.webp"
                        fill
                        alt="online payment system"
                        className="custom_img"
                      />
                    </div>

                    <p className="text-center cursor-pointer ">Payment Links</p>
                  </div>
                  <div className=" ">
                    <div className=" cursor-pointer ">
                      <Image
                        src="/PaymentTokenization.webp"
                        fill
                        alt="online payment system"
                        className="custom_img"
                      />
                    </div>
                    <p className="text-center  cursor-pointer">
                      Payment Tokenization
                    </p>
                  </div>
                  <div className=" ">
                    <div className=" cursor-pointer ">
                      <Image
                        src="/RecurringPayments.webp"
                        fill
                        alt="online payment system"
                        className="custom_img"
                      />
                    </div>
                    <p className="text-center cursor-pointer">
                      Recurring Payments
                    </p>
                  </div>
                  <div className=" ">
                    <div className=" cursor-pointer ">
                      <Image
                        src="/RecurringPayments.webp"
                        fill
                        alt="online payment system"
                        className="custom_img"
                      />
                    </div>
                    <p className="text-center cursor-pointer">
                      Recurring Payments{" "}
                    </p>
                  </div>
                  <div className="   ">
                    <div className=" cursor-pointer">
                      <Image
                        src="/OnlinePayment.webp"
                        fill
                        alt="online payment system"
                        className="custom_img"
                      />
                    </div>
                    <p className="text-center cursor-pointer">
                      Online Payment Solutions
                    </p>
                  </div>
                </Slider>
              </Container>
            </div>
          </div>
        </div>
      </>
    );
}

export default Services;










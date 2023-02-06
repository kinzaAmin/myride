// import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
 //import Button from "../../ui/Button";
// import Container from "../../ui/Container";
import Slider from "react-slick";
import Container from "./Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliderr = ()=> {

 //const [loading, setLoading] = useState(true);
    const settings = {
      dots: true,
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
     //setTimeout(() => setLoading(false), 3000);
    return (
      <div className="">
        <Container>
          <Slider {...settings}>
            <div className=" text-[25px] font-sans ">
              <div className="w-[373px] h-[290px] ">
                <Image
                  src="/OnlinePayment.webp"
                  fill
                  alt="online payment system"
                  className="custom_img"
                />
              </div>

              <p className="text-center">Online Payment Solutions</p>
            </div>
            <div className="   text-[25px] font-sans">
              <div className=" w-[373px] h-[290px] ">
                <Image
                  src="/PaymentLinks.webp"
                  fill
                  alt="online payment system"
                  className="custom_img"
                />
              </div>

              <p className="text-center">Payment Links</p>
            </div>
            <div className=" text-[25px] font-sans">
              <div className=" w-[373px] h-[290px] ">
                <Image
                  src="/PaymentTokenization.webp"
                  fill
                  alt="online payment system"
                  className="custom_img"
                />
              </div>
              <p className="text-center">Payment Tokenization</p>
            </div>
            <div className="text-[25px] font-sans">
              <div className="w-[373px] h-[290px] ">
                <Image
                  src="/RecurringPayments.webp"
                  fill
                  alt="online payment system"
                  className="custom_img"
                />
              </div>
              <p className="text-center">Recurring Payments</p>
            </div>
            <div className="text-[25px] font-sans">
              <div className="w-[373px] h-[290px] ">
                <Image
                  src="/RecurringPayments.webp"
                  fill
                  alt="online payment system"
                  className="custom_img"
                />
              </div>
              <p className="text-center">Recurring Payments </p>
            </div>
            <div className=" text-[25px] font-sans  ">
              <div className="w-[373px] h-[290px] ">
                <Image
                  src="/OnlinePayment.webp"
                  fill
                  alt="online payment system"
                  className="custom_img"
                />
              </div>
              <p className="text-center">Online Payment Solutions</p>
            </div>
          </Slider>
        </Container>
      </div>
    );
};

export default Sliderr;
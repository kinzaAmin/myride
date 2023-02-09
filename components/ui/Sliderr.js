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
     //setTimeout(() => setLoading(false), 3000);
    return (
      <div className="md:text-2xl sm:text:lg text-xs  font-sans">
        <Container>
          <Slider {...settings}>
            <div className="  ">
              <div className=" cursor-pointer  ">
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
              <p className="text-center cursor-pointer">Recurring Payments</p>
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
              <p className="text-center cursor-pointer">Recurring Payments </p>
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
    );
};

export default Sliderr;
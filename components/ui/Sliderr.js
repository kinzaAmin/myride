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
      <div>
        <Container>
          <Slider {...settings}>
            <div className="   `">
              <div className="relative h-56 w-56 ">
                <Image
                  src="/OnlinePayment.webp"
                  fill
                  alt="online payment system"
                />
              </div>

              <p className="ml-2">Online Payment Solutions</p>
            </div>
            <div className="   `">
              <div className=" relative  h-56 w-56 ">
                <Image
                  src="/PaymentLinks.webp"
                  fill
                  alt="online payment system"
                />
              </div>

              <p className="ml-14">Payment Links</p>
            </div>
            <div className="   `">
              <div className=" relative  h-56 w-56 ">
                <Image
                  src="/PaymentTokenization.webp"
                  fill
                  alt="online payment system"
                />
              </div>

              <p className="ml-10">Payment Tokenization</p>
            </div>
            <div className="   `">
              <div className=" relative  h-56 w-56 ">
                <Image
                  src="/RecurringPayments.webp"
                  fill
                  alt="online payment system"
                />
              </div>

              <p className="ml-14">Recurring Payments</p>
            </div>
            <div className="   `">
              <div className=" relative  h-56 w-56 ">
                <Image
                  src="/RecurringPayments.webp"
                  fill
                  alt="online payment system"
                />
              </div>

              <p className="ml-14">Recurring Payments </p>
            </div>
            <div className=" ">
              <div className=" relative  h-56 w-56 ">
                <Image
                  src="/OnlinePayment.webp"
                  fill
                  alt="online payment system"
                />
              </div>

              <p className="ml-3">Online Payment Solutions</p>
            </div>

          
          </Slider>
          
        </Container>
      </div>
    );
};

export default Sliderr;
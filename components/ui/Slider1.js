// import Link from "next/link";
import Image from "next/image";
import React from "react";

import Slider from "react-slick";
 import Container from "./Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider1 = () => {
  //const [loading, setLoading] = useState(true);
  const settings = {
    dots: false,
    arrows: false,
    //infinite: true,
    autoplay: true,
    //draggable: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  //setTimeout(() => setLoading(false), 3000);
  return (
    <div>
      <Container>
        <Slider {...settings} >
          <div className="relative h-24 w-5 shadow-md border ">
            <Image
              src="/AmericanExpress.svg"
              fill
              alt="online payment system"
            />
          </div>

          <div className=" relative  h-24 w-10 shadow-md border ml-2 ">
            <Image src="/StcPay.svg" fill alt="online payment system" />
          </div>

          <div className=" relative  h-24 w-10 shadow-md border   ">
            <Image src="/PayPal.svg" fill alt="online payment system" />
          </div>

          <div className=" relative h-24 w-10 shadow-md border ml-2 ">
            <Image src="/Meeza.svg" fill alt="online payment system" />
          </div>

          <div className=" relative h-24 w-10 shadow-md border ml-1  ">
            <Image src="/UnionPay.svg" fill alt="online payment system" />
          </div>

          <div className=" relative h-24 w-10 shadow-md border ml-2 ">
            <Image src="/Mada.svg" fill alt="online payment system" />
          </div>

          <div className=" relative h-24 w-10 shadow-md border ml-1">
            <Image src="/Fawry.svg" fill alt="online payment system" />
          </div>

          <div className=" relative h-24 w-10 shadow-md border ml-2 ">
            <Image src="/VISA.svg" fill alt="online payment system" />
          </div>

          <div className=" relative h-24 w-10 shadow-md border ">
            <Image src="/MasterCard.svg" fill alt="online payment system" />
          </div>

          <div className=" relative h-24 w-10 shadow-md border ml-2">
            <Image src="/Value.svg" fill alt="online payment system" />
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Slider1;

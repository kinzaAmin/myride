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
        <div className="w-[1140px] h-[142px] gap-4 mr-7">
          <Slider {...settings}>
            <div className=" w-[120px] h-[90px] shadow-md ">
              <Image
                src="/AmericanExpress.svg"
                fill
                alt="online payment system"
                className="custom_img"
              />
            </div>

            <div className=" w-[120px] h-[90px] shadow-md   ">
              <Image
                src="/StcPay.svg"
                fill
                alt="online payment system"
                className="custom_img"
              />
            </div>

            <div className=" w-[120px] h-[90px] shadow-md   ">
              <Image
                src="/PayPal.svg"
                fill
                alt="online payment system"
                className="custom_img"
              />
            </div>

            <div className=" w-[120px] h-[90px] shadow-md  ">
              <Image
                src="/Meeza.svg"
                fill
                alt="online payment system"
                className="custom_img"
              />
            </div>

            <div className=" w-[120px] h-[90px] shadow-md    ">
              <Image
                src="/UnionPay.svg"
                fill
                alt="online payment system"
                className="custom_img"
              />
            </div>

            <div className=" w-[120px] h-[90px] shadow-md  ">
              <Image
                src="/Mada.svg"
                fill
                alt="online payment system"
                className="custom_img"
              />
            </div>

            <div className=" w-[120px] h-[90px] shadow-md  ">
              <Image
                src="/Fawry.svg"
                fill
                alt="online payment system"
                className="custom_img"
              />
            </div>

            <div className=" w-[120px] h-[90px] shadow-md  ">
              <Image
                src="/VISA.svg"
                fill
                alt="online payment system"
                className="custom_img"
              />
            </div>

            <div className=" w-[120px] h-[90px] shadow-md  ">
              <Image
                src="/MasterCard.svg"
                fill
                alt="online payment system"
                className="custom_img"
              />
            </div>

            <div className="w-[120px] h-[90px]  shadow-md  ">
              <Image
                src="/Value.svg"
                fill
                alt="online payment system"
                className="custom_img"
              />
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Slider1;

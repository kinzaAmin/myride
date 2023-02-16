import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Header2 from "@/components/Common/Header2";
import Footer from "@/components/Common/Footer";
const PaymentTokenization = () => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-2 ">
          <div className=" mt-10 p-7  font-Roboto text-[16px] leading-[27px] font-[300] text-[#57647c]">
            <p>
              Car rental business is entirely different from selling goods or
              services online. For example, if you sell a service like mobile
              car fixing, you fix the car, and you get paid, but when it comes
              to car rentals, you are providing a service, but you are also
              giving a valuable tangible asset to the client as well. In this
              case, the deal can go in many ways; the car can be damaged, the
              car can be subjected to traffic fines and tolls, or simply the
              client can keep the car for a longer time. In all these cases the
              client needs to pay you more. What would you do in such a
              scenario? MyRidePay understands your dilemma and wants to provide
              an option where you can settle all such amounts without disturbing
              the clients. If you have any unsettled amount with the client,
              with tokenization, you can log in to your MyRidePay account and
              charge the client with the due amount, sending them the receipt.
            </p>
            <p className="mt-5">
              Tokenization is the process of receiving money from clients
              through a safer medium. It is much safer then end to end
              encryption, and it is fully compliant with the Payment Card
              Industry Data Security Standard (PCI DSS).
            </p>
          </div>
          <div className="w-[469px] h-[75%] mt-24  ml-20 ">
           
              <Image
                src="/PaymentTokenization.webp"
                alt="online payment"
                fill
                className="custom_img"
              />
            </div>
          </div>
       
      </Container>
    </>
  );
};

export default PaymentTokenization;

PaymentTokenization.getLayout = function pageLayout(page) {
  return (
    <>
      <Header2 heading="Payment Tokenization​​" />
      {page}
      <Footer />
    </>
  );
};

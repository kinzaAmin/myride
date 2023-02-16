import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Header2 from "@/components/Common/Header2";
import Footer from "@/components/Common/Footer";
const PaymentLink = () => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-2">
          <div className="mt-24 ml-9  font-Roboto text-[16px] leading-[27px] font-[300] text-[#57647c]">
            <p>
              Payment links are one of the easiest and most commonly used
              payment processes. If for some reason, your client cannot make the
              payment, you can generate this link for them and your permanent
              payment link using WhatsApp, email, SMS or any messaging service.
              Once the customer opens the link, they add their information and
              send the money to you.
            </p>
            <p className="mt-5" >
              This method has many benefits. It’s faster, safer and the customer
              can reuse the same link for all future payments with you. You can
              also add an e-wallet with it, through which you can send the
              deposit back to your client.
            </p>
          </div>
          <div className="w-[469px] ml-20">
            <Image
              src="/PaymentLinks.webp"
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

export default PaymentLink;

PaymentLink.getLayout = function pageLayout(page) {
  return (
    <>
      <Header2 heading="Payment Links​" />
      {page}
      <Footer />
    </>
  );
};

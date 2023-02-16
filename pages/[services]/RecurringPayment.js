import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Header2 from "@/components/Common/Header2";
import Footer from "@/components/Common/Footer";
const RecurringPayment = () => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-2 p-5">
          <div className="mt-24 ml-10  font-Roboto text-[16px] leading-[27px] font-[300] text-[#57647c]">
            Car rental businesses usually face many problems regarding payments.
            These problems can be due to many reasons, but most of the time
            there is some glitch in the system or the server may be down, you
            didn’t receive the complete amount, payment portal is not working
            etc. With MyRidePay payment gateway all these problems can be solved
            as we have a complete solution that can help you tackle your car
            rental payment receiving problems.
          </div>
          <div className="w-[469px] ml-20">
            <Image
              src="/RecurringPayments.webp"
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

export default RecurringPayment;

RecurringPayment.getLayout = function pageLayout(page) {
  return (
    <>
      <Header2 heading="Recurring Payments​​" />
      {page}
      <Footer />
    </>
  );
};

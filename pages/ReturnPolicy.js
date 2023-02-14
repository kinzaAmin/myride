import React from "react";
import Container from "@/components/ui/Container";
import Header2 from "@/components/Common/Header2";
import Footer from "@/components/Common/Footer";
const ReturnPolicy = () => {
    return (
      <>
        <Container>
          <div className="mt-24 py-4  font-Roboto text-[16px] leading-[27px] font-[300] text-[#57647c]">
            MyridePAY is an online platform that connects the customers with
            their ideal cars available. Once a customer enters a contract with
            the car rental company at the time of Pickup/Delivery they accept to
            follow and obey the terms and policies of that specific company
            including their refund policy. myridePAY holds the responsibility
            towards the fund of a client until the moment a customer enters an
            agreement with the car rental company. Once entered myridePAY does
            not hold liability towards the funds of a customer as myridePAY
            forwards the funds to the Car rental company.
          </div>
        </Container>
      </>
    );
}
export default ReturnPolicy;

ReturnPolicy.getLayout = function pageLayout(page){
return (
  <>
    <Header2 heading="ReturnPolicy" />
    {page}
    <Footer />
  </>
);
}
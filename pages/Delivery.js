import React from "react";
import Container from "@/components/ui/Container";
import Header2 from "@/components/Common/Header2";
import Footer from "@/components/Common/Footer";
const Delivery = () => {
    return (
      <>
        <Container>
          <div className=" pb-4 font-Roboto text-[16px] leading-[27px] font-[300] text-[#57647c]">
            Car Delivery is Free at the customer location in Dubai. All bookings
            with myridePAY.com are inclusive of delivery and collection services
            based on the selected options. A customer can choose to self-pick
            the car from the rental location as well. Irrespective of the model
            of car handover method for car renting services, it is essential for
            a customer to present their required documents uploaded online to
            the service person handing over the car.
          </div>
        </Container>
      </>
    );
}
export default Delivery;

Delivery.getLayout =  function pageLayout(page){
  return( <>
    <Header2 heading="Delivery and Collection" />;{page}
    <Footer />
  </>);
}
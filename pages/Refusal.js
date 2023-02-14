import React from "react";
import Container from "@/components/ui/Container";
import Header2 from "@/components/Common/Header2";
import Footer from "@/components/Common/Footer";
const Refusal = ()=> {
    return (
      <div className="mt-2">
        <Container>
          <div className="w-full pb-5 pt-2">
            <div className="font-Roboto text-[16px] leading-[27px] font-[300] text-[#57647c]">
              <p>
                – In case myridePAY.com fails to deliver the chosen car, then an
                upgrade is proposed free of cost if not accepted then
                myridePAY.com is liable to refund the full amount to the renter
                for their convenience.
              </p>
              <p>
                – In case of a refusal by myridePAY.com or partnered company due
                to any reason prior to entering the rental agreement, then
                myridePAY is liable to refund the full amount to the renter for
                their convenience.
              </p>
            </div>

            <div className="mt-8 font-Roboto text-[14px] leading-[21px] font-[600] text-[#212529]">
              <p className="font-Roboto text-[20px] leading-[20px] font-[600] text-[#212529]">
                Cancellation Policy:
              </p>

              <div className="mt-4 ">
                <p>
                  2. If the booking is cancelled within 24-48 hours prior to the
                  delivery/pickup time, then 50% of the payment will be charged
                </p>
                <p className="ml-14">
                  1. If a booking is made and the payment is already taken, then
                  the full payment will be refunded within 5 working days.
                </p>
              </div>
              <div className="">
                <p>
                  1. Once a booking is made and wished to be cancelled, a flat
                  150 AED is applicable as an administrative cost.
                </p>
                <p className="ml-14">
                  1. If a booking is made and the payment is already taken, then
                  the full payment will be refunded within 5 working days.
                </p>
              </div>

              <div>
                <p>
                  3. In case the booking is cancelled within 12-24 hours prior
                  to the delivery/pickup time, then 75% payment is applicable,
                  and the renter will be refunded the remaining amount within 5
                  working days.
                </p>
                <p className="ml-14">
                  1. In case a booking is cancelled within 12 hours prior to
                  pickup/delivery, then full payment is charged and
                  non-refundable.
                </p>
              </div>

              <div>
                <p>
                  4. Bookings made within 24 hours or less notice are
                  non-refundable and in the case of cancellation, full payment
                  for the one day is charged.
                </p>
                <p className="ml-14">
                  1. The remaining sum will be refunded back within 5 working
                  days.
                </p>
              </div>
              <div>
                <p>
                  5. Once the service already started and the guest wants to
                  cancel the booking at any stage of the service, the balance
                  payment is non-refundable.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <p className="font-Roboto text-[20px] leading-[20px] font-[600] text-[#212529]">
                Accidents and Unexpected Faults for the Booked Vehicle:
              </p>

              <p className="mt-4 font-Roboto text-[16px] leading-[27px] font-[300] text-[#57647c]">
                The customer understands that the vehicle they book can be
                subjected to unexpected accidents and technical faults. If a
                situation of such arises, the customer will be offered a
                substitute/Similar car right away. The customer can not and
                shall not hold myridePAY.com responsible for such situations. If
                the client refuses to have a substitute, then the customer will
                be liable for a full refund of the amount paid minus 3%.
              </p>
            </div>
            <div className="mt-6">
              <p className="font-Roboto text-[20px] leading-[20px] font-[600] text-[#212529]">
                Reckless driving
              </p>

              <p className="mt-4 font-Roboto text-[16px] leading-[27px] font-[300] text-[#57647c]">
                All cars are monitored with GPS and system trackers, in case of
                reckless driving or over speeding a notification will be sent,
                more than 3 warnings will lead turning off the vehicle
                cancelling the booking of the customer.
              </p>
            </div>

            <div className="mt-6">
              <p className="font-Roboto text-[20px] leading-[20px] font-[600] text-[#212529]">
                Refunds
              </p>

              <p className="mt-4 font-Roboto text-[16px] leading-[27px] font-[400] text-[#57647c]">
                MyridePAY.com is an online platform that connects the customers
                with their ideal cars available. Once a customer enters a
                contract with the car rental company at the time of
                Pickup/Delivery they accept to follow and obey the terms and
                policies of that specific company including their refund policy.
                myridePAY.com holds the responsibility towards the fund of a
                client until the moment a customer enters an agreement with the
                car rental company. Once entered, myridePAY.com does not hold
                liability towards the funds of a customer as myridePAY.com
                forwards the funds to the Car rental company.
              </p>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default Refusal;

Refusal.getLayout = function PageLayout (page){
  return (
    <>
      <Header2 heading="Refusal" />
      {page}
      <Footer />
    </>
  );
}
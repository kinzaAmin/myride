import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
const Package = () => {
  return (
    <>
      <Container>
        <div>
          <p className="text-center">Packages</p>
          <div className="mx-20 my-8 border grid   text-center items-center ">
            <div className="grid grid-cols-4 border-b-2">
              <div className="row-span-2">Packages</div>
              <div className="grid grid-rows-2  border-x">
                <div className="">Start-Up Plan</div>
                <div className=" border-t">Up to AED 20,000 /Monthly</div>
              </div>

              <div className="grid grid-rows-2  border-x">
                <div>POPULARGrowth Plan</div>
                <div className=" border-t">
                  POPULARGrowth Plan Enterprise Plan Up to AED 20,000 /Monthly
                  Up to AED 100,000 /Monthy
                </div>
              </div>
              <div className="grid grid-rows-2  border-x">
                <div>Enterprise Plan</div>
                <div className=" border-t">Above AED 100,000 /Monthly</div>
              </div>
            </div>

            <div className="grid grid-cols-4 border-b-2 ">
              <div className="p-4">Monthly Constant Value</div>
              <div className=" border-x p-4">
                <div className="w-5 ml-3">
                  <Image
                    src="/close.png"
                    alt="cross"
                    fill
                    className="custom_img"
                  />
                </div>
              </div>
              <div className=" border-x  p-4">
                <div className="w-5">
                  <Image
                    src="/close.png"
                    alt="cross"
                    fill
                    className="custom_img"
                  />
                </div>
              </div>
              <div className=" border-x  p-4">
                <div className="w-5">
                  <Image
                    src="/close.png"
                    alt="cross"
                    fill
                    className="custom_img"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 border-b-2">
              <div className="p-4">Transaction Charges</div>
              <div className=" border-x p-4">3%+ AED 1 per Transaction</div>
              <div className=" border-x p-4">2.85% + AED 1 per transaction</div>
              <div className=" border-x p-4">Bespoke pricing plan</div>
            </div>

            <div className="grid grid-cols-4 border-b-2">
              <div className="p-4">Standard Set-Up Charges</div>
              <div className=" border-x p-4">FREE</div>
              <div className=" border-x p-4">FREE</div>
              <div className=" border-x p-4">FREE</div>
            </div>

            <div className="grid grid-cols-4 border-b-2">
              <div className="p-4">Tokenization Service / Yearly</div>
              <div className=" border-x p-4">AED 5,000</div>
              <div className=" border-x p-4">AED 5,000</div>
              <div className=" border-x p-4">AED 5,000</div>
            </div>

            <div className="grid grid-cols-4 border-b-2">
              <div className=" p-4 ">Pre-Auth Service / Yearly</div>
              <div className=" border-x p-4">AED 3,000</div>
              <div className=" border-x p-4">AED 3,000</div>
              <div className=" border-x p-4">AED 3,000</div>
            </div>

            <div className="grid grid-cols-4 border-b-2">
              <div className=" p-4 ">Tailored Integration Charges</div>
              <div className=" border-x p-4">To be determined</div>
              <div className=" border-x p-4">To be determined</div>
              <div className=" border-x p-4">To be determined</div>
            </div>

            <div className="grid grid-cols-4 border-b-2">
              <div className=" p-4 ">Moneyback Charges</div>
              <div className=" border-x p-4">AED 350</div>
              <div className=" border-x p-4">AED 350</div>
              <div className=" border-x p-4">AED 350</div>
            </div>
            <div className="grid grid-cols-4 border-b-2">
              <div className=" p-4 ">Security Payment</div>
              <div className=" border-x p-4">AED 10,000</div>
              <div className=" border-x p-4">AED 10,000</div>
              <div className=" border-x p-4">AED 10,000</div>
            </div>

            <div className="grid grid-cols-4 border-b-2">
              <div className=" p-4 ">Refund Charges</div>
              <div className=" border-x p-4">No Service Fees</div>
              <div className=" border-x p-4">No Service Fees</div>
              <div className=" border-x p-4">No Service Fees</div>
            </div>

            <div className="grid grid-cols-4 border-b-2">
              <div className=" p-4 ">Exchange Price/Forex Conversion</div>
              <div className=" border-x p-4">1.00%</div>
              <div className=" border-x p-4">1.00%</div>
              <div className=" border-x p-4">1.00%</div>
            </div>

            <div className="grid grid-cols-4 border-b-2">
              <div className=" p-4 ">Pre-Authentication Charges</div>
              <div className=" border-x p-4">1 AED per Authorization </div>
              <div className=" border-x p-4">1 AED per Authorization </div>
              <div className=" border-x p-4">1 AED per Authorization </div>
            </div>

            <div className="grid grid-cols-4 border-b-2">
              <div className=" p-4 ">Tokenization Request Charges</div>
              <div className=" border-x p-4">FREE</div>
              <div className=" border-x p-4">FREE</div>
              <div className=" border-x p-4">FREE</div>
            </div>
            <div className="grid grid-cols-4 border-b-2">
              <div className=" p-4 ">Tokenized Transaction Charges</div>
              <div className=" border-x p-4">Standard Transaction Rate</div>
              <div className=" border-x p-4">Standard Transaction Rate</div>
              <div className=" border-x p-4">Standard Transaction Rate</div>
            </div>
            <div className="grid grid-cols-4 border-b-2">
              <div className=" p-4 ">Retention Days</div>
              <div className=" border-x p-4">10 days</div>
              <div className=" border-x p-4">10 days</div>
              <div className=" border-x p-4">10 days</div>
            </div>

            <div className="grid grid-cols-4 border-x ">
              <div className=" p-4 ">
                Least Amount of Funds to be Maintained in the Car Rental Account
              </div>
              <div className="row-span-2 border-x p-4">
                <div className="">AED 500</div>
                <div className="border-t">signup</div>
              </div>
              <div className="row-span-2 border-x p-4">
                <div>AED 500</div>
                <div className="border-t">signup</div>
              </div>
              <div className="row-span-2 border-x p-4 ">
                <div>AED 500</div>
                <div className="border-t">signup</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Package;

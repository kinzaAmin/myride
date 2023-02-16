import React, {useState} from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
const FAQ = ()=> {

    const [Faq1, setFaq1] = useState(false);
    const [Faq2, setFaq2] = useState(false);
    const [Faq3, setFaq3] = useState(false);
    const [Faq4, setFaq4] = useState(false);
    const [Faq5, setFaq5] = useState(false);
    const [Faq6, setFaq6] = useState(false);
    const [Faq7, setFaq7] = useState(false);
    const [Faq8, setFaq8] = useState(false);
    const [Faq9, setFaq9] = useState(false);
    const [Faq10, setFaq10] = useState(false);
    return (
      <>
        <div className=" mt-8 ">
          <Container>
            <div className="w-full justify-between md:p-4 sm:p-0 p-8   ">
              <span className="text-4xl text-[#212529] text-[24px] indent-[22px] font-raleway px-6 ">
                FAQs
              </span>
              <div className="md:flex justify-between w-full mt-5">
                <div className="md:w-[50%] w-full bg-gray-100">
                  <div className="bg-white w-full ">
                    <div className="flex h-12 text-[#0e314c] font-medium font-raleway text-[16px] ">
                      {Faq1 ? (
                        <div
                          className="sm:w-[10%] w-[13%] h-full bg-[#ff0000] p-2  text-center text-white font-bold cursor-pointer"
                          onClick={() => setFaq1(false)}
                        >
                          <div className="w-5">
                            <Image
                              src="/SubtractWhite.svg"
                              fill
                              alt="plus"
                              className="custom_img lg:ml-3 md:ml-[2px] mt-[6px] "
                            />
                          </div>
                        </div>
                      ) : (
                        <div
                          className="sm:w-[10%] w-[13%] h-full bg-[#ff0000]  p-2  text-center text-white font-bold cursor-pointer"
                          onClick={() => {
                            setFaq1(true);
                            setFaq2(false);
                            setFaq3(false);
                            setFaq4(false);
                            setFaq5(false);
                          }}
                        >
                          {/* <FontAwesomeIcon icon="fa-solid fa-plus" style={{color:"white"}} /> */}
                          <div className="w-5">
                            <Image
                              src="/AddWhite.svg"
                              fill
                              alt="plus"
                              className="custom_img lg:ml-[8px] md:ml-[2px] mt-[6px] "
                            />
                          </div>
                        </div>
                      )}

                      <div className=" p-3 leading-[16px]">
                        When Can You Integrate with MyridePay Payment Gateway?
                      </div>
                    </div>

                    {Faq1 ? (
                      <SlideDown>
                        <div className="flex border-t-2 pt-3">
                          <div className="px-8 font-normal text-[16px] font-raleway  text-[#212529] shadow-sm  ">
                            MyridePay offers a test before you go live. You can
                            register online and test our services. Once you are
                            satisfied, you can integrate the gateway and go
                            live.
                          </div>
                        </div>
                      </SlideDown>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    <div className="bg-white ">
                      <div className="flex h-12  mt-5 text-[#0e314c] font-medium font-raleway text-[16px] items-center">
                        {Faq2 ? (
                          <div
                            className="sm:w-[10%] w-[13%] h-full bg-[#ff0000] p-2  text-center text-white font-bold cursor-pointer"
                            onClick={() => setFaq2(false)}
                          >
                            <div className="w-5">
                              <Image
                                src="/SubtractWhite.svg"
                                fill
                                alt="plus"
                                className="custom_img lg:ml-[7px] md:ml-[2px] mt-[6px] "
                              />
                            </div>
                          </div>
                        ) : (
                          <div
                            className="sm:w-[10%] w-[13%] h-full bg-[#ff0000] p-2  text-center text-white font-bold cursor-pointer"
                            onClick={() => {
                              setFaq1(false),
                                setFaq2(true),
                                setFaq3(false),
                                setFaq4(false),
                                setFaq5(false);
                            }}
                          >
                            <div className="w-5">
                              <Image
                                src="/AddWhite.svg"
                                fill
                                alt="plus"
                                className="custom_img lg:ml-[8px] md:ml-[2px] mt-[6px] "
                              />
                            </div>
                          </div>
                        )}
                        <div className="p-3 leading-[16px]">
                          What is a Payment Gateway?
                        </div>
                      </div>

                      {Faq2 ? (
                        <SlideDown>
                          <div className="flex border-t-2 pt-3">
                            <div className="px-8 font-[300] text-[16px] leading-[27px] font-raleway text-[#57647c] shadow-sm">
                              Whenever someone makes a payment through their
                              credit card, the information is sent to the
                              cardholder’s account to check if the transaction
                              is allowed or not. In an E-commerce setting, this
                              process is done via Payment Gateway. Every company
                              who wishes to accept credit cards require a safe
                              portal through which the transactions can pass.
                              MyridePay offers a secure portal for online
                              payments for car rental companies.
                            </div>
                          </div>
                        </SlideDown>
                      ) : (
                        " "
                      )}
                    </div>
                    <div className="bg-white">
                      <div className="flex h-16 mt-5 text-[#0e314c] font-medium font-raleway text-[16px] items-center">
                        {Faq3 ? (
                          <div
                            className="sm:w-[10%] w-[13%] h-full bg-[#ff0000] p-2 text-center text-white font-bold cursor-pointer"
                            onClick={() => setFaq3(false)}
                          >
                            <div className="w-5">
                              <Image
                                src="/SubtractWhite.svg"
                                fill
                                alt="plus"
                                className="custom_img lg:ml-[7px] md:ml-[2px] mt-3 "
                              />
                            </div>
                          </div>
                        ) : (
                          <div
                            className="sm:w-[10%] w-[13%] h-full  bg-[#ff0000] p-2 text-center text-white font-bold cursor-pointer"
                            onClick={() => {
                              setFaq1(false),
                                setFaq2(false),
                                setFaq3(true),
                                setFaq4(false),
                                setFaq5(false);
                            }}
                          >
                            <div className="w-5">
                              <Image
                                src="/AddWhite.svg"
                                fill
                                alt="plus"
                                className="custom_img lg:ml-2 md:ml-[2px] mt-3 "
                              />
                            </div>
                          </div>
                        )}
                        <div className="p-3 leading-[16px] ">
                          How Long Does It Take To Integrate MyridePay Payment
                          Gateway?
                        </div>
                      </div>

                      {Faq3 ? (
                        <SlideDown>
                          <div className="flex border-t-2 pt-3 transition duration-500 ease-in-out">
                            <div className="px-8 font-normal text-[16px]  leading-[24px] font-raleway text-[#212529] shadow-sm">
                              The integration process of MyridePay Payment
                              Gateway can take anywhere between 24 to 48 hours.
                            </div>
                          </div>
                        </SlideDown>
                      ) : (
                        " "
                      )}
                    </div>
                  </div>

                  <div className="bg-white">
                    <div className="flex h-12  mt-5 text-[#0e314c] font-medium font-raleway text-[16px] items-center">
                      {Faq4 ? (
                        <div
                          className="md:w-[10%] sm:w-[8%] w-[13%] h-full bg-[#ff0000] p-2 text-center text-white font-bold cursor-pointer"
                          onClick={() => setFaq4(false)}
                        >
                          <div className="w-5">
                            <Image
                              src="/SubtractWhite.svg"
                              fill
                              alt="plus"
                              className="custom_img lg:ml-[7px] md:ml-[2px] mt-[6px] "
                            />
                          </div>
                        </div>
                      ) : (
                        <div
                          className="md:w-[10%] w-[13%] h-full bg-[#ff0000] p-2 text-center text-white font-bold cursor-pointer "
                          onClick={() => {
                            setFaq1(false),
                              setFaq2(false),
                              setFaq2(false),
                              setFaq3(false),
                              setFaq4(true),
                              setFaq5(false);
                          }}
                        >
                          <div className="w-5">
                            <Image
                              src="/AddWhite.svg"
                              fill
                              alt="plus"
                              className="custom_img lg:ml-[8px] md:ml-[2px] mt-[6px] "
                            />
                          </div>
                        </div>
                      )}
                      <div className="p-3 leading-[16px]">
                        What Do I Need to Start Accepting Credit Cards?
                      </div>
                    </div>

                    {Faq4 ? (
                      <SlideDown>
                        <div className="flex  border-t-2 pt-3">
                          <div className="px-8 font-normal text-[16px]  leading-[24px] font-raleway text-[#212529] shadow-sm">
                            You need a working online website for renting cars.
                            Once we have verified your credentials, you will be
                            provided with a login and password bank account with
                            our affiliated bank.
                          </div>
                        </div>
                      </SlideDown>
                    ) : (
                      " "
                    )}
                  </div>

                  <div className="">
                    <div className="bg-white">
                      <div className="flex h-12  mt-5 text-[#0e314c] font-medium font-raleway text-[16px] items-center">
                        {Faq5 ? (
                          <div
                            className="sm:w-[10%] w-[13%]  bg-[#ff0000] p-2 h-full text-center text-white font-bold cursor-pointer"
                            onClick={() => setFaq5(false)}
                          >
                            <div className="w-5">
                              <Image
                                src="/SubtractWhite.svg"
                                fill
                                alt="plus"
                                className="custom_img lg:ml-[7px] md:ml-[2px] mt-[6px] "
                              />
                            </div>
                          </div>
                        ) : (
                          <div
                            className="sm:w-[10%] w-[13%] bg-[#ff0000] p-2 h-full text-center text-white font-bold cursor-pointer "
                            onClick={() => {
                              setFaq1(false),
                                setFaq1(false),
                                setFaq2(false),
                                setFaq3(false),
                                setFaq4(false),
                                setFaq5(true);
                            }}
                          >
                            <div className="w-5">
                              <Image
                                src="/AddWhite.svg"
                                fill
                                alt="plus"
                                className="custom_img lg:ml-[8px] md:ml-[2px] mt-[6px]  "
                              />
                            </div>
                          </div>
                        )}
                        <div className="p-3 leading-[16px]">
                          What Kind of Credit/Debit Cards are Accepted?
                        </div>
                      </div>

                      {Faq5 ? (
                        <SlideDown>
                          <div className="flex justify-between border-t-2 pt-3 ">
                            <div className="px-8 font-normal text-[16px] font-raleway shadow-sm leading-[24px] text-[#212529]">
                              You will be able to accept major credit/debit
                              cards from MasterCard, Visa, American Express* at
                              this moment. We will be adding more card
                              processors
                            </div>
                          </div>
                        </SlideDown>
                      ) : (
                        " "
                      )}
                    </div>
                  </div>
                </div>

                {/*=============================================== FAQs 2nd part ===========================================================*/}

                <div className="md:w-[50%] bg-gray-100 w-full md:mt-0 mt-5">
                  <div>
                    <div className="bg-white">
                      <div className="flex h-12  text-[#0e314c] font-medium font-raleway text-[16px] items-center">
                        {Faq6 ? (
                          <div
                            className="sm:w-[10%] w-[13%] h-full bg-[#ff0000] p-2  text-center text-white font-bold cursor-pointer"
                            onClick={() => setFaq6(false)}
                          >
                            <div className="w-5">
                              <Image
                                src="/SubtractWhite.svg"
                                fill
                                alt="plus"
                                className="custom_img lg:ml-[10px] md:ml-[3px] mt-[6px] "
                              />
                            </div>
                          </div>
                        ) : (
                          <div
                            className="sm:w-[10%] w-[13%] h-full bg-[#ff0000] p-2 text-center text-white font-bold cursor-pointer "
                            onClick={() => {
                              setFaq6(true),
                                setFaq7(false),
                                setFaq8(false),
                                setFaq9(false),
                                setFaq10(true);
                            }}
                          >
                            <div className="w-5">
                              <Image
                                src="/AddWhite.svg"
                                fill
                                alt="plus"
                                className="custom_img lg:ml-[10px] md:ml-[3px] mt-[6px] "
                              />
                            </div>
                          </div>
                        )}

                        <div className="p-3 leading-[16px]">
                          Do I Need Another Software for Credit Card Payments?
                        </div>
                      </div>

                      {Faq6 ? (
                        <SlideDown>
                          <div className="flex border-t-2 pt-3 ">
                            <div className=" px-7 font-[300] text-[16px]  leading-[27px] font-raleway text-[#57647c] shadow-sm">
                              Our system works with all the operating systems
                              and mobile operating systems, so you don’t have to
                              plug in any other software.Once you have created
                              an account with us, we will provide you with
                              simple coding and you’re done.
                            </div>
                          </div>
                        </SlideDown>
                      ) : (
                        " "
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="bg-white">
                      <div className="flex h-12  mt-5 text-[#0e314c] font-medium font-raleway text-[16px] items-center">
                        {Faq7 ? (
                          <div
                            className="sm:w-[10%] w-[13%] h-full bg-[#ff0000] p-2 text-center text-white font-bold cursor-pointer"
                            onClick={() => setFaq7(false)}
                          >
                            <div className="w-5">
                              <Image
                                src="/SubtractWhite.svg"
                                fill
                                alt="plus"
                                className="custom_img lg:ml-[10px] md:ml-[3px] mt-[6px] "
                              />
                            </div>
                          </div>
                        ) : (
                          <div
                            className="sm:w-[10%] w-[13%] h-full bg-[#ff0000] p-2  text-center text-white font-bold cursor-pointer "
                            onClick={() => {
                              setFaq6(false),
                                setFaq7(true),
                                setFaq8(false),
                                setFaq9(false),
                                setFaq10(false);
                            }}
                          >
                            <div className="w-5">
                              <Image
                                src="/AddWhite.svg"
                                fill
                                alt="plus"
                                className="custom_img lg:ml-[10px] md:ml-[3px] mt-[6px] "
                              />
                            </div>
                          </div>
                        )}
                        <div className="p-3 leading-[16px]">
                          Can I Get Details of the Payments?
                        </div>
                      </div>

                      {Faq7 ? (
                        <SlideDown>
                          <div className="flex border-t-2 pt-3 ">
                            <div className="px-8 font-normal text-[16px]  leading-[24px] font-raleway text-[#212529] shadow-sm">
                              Details of transactions are available 24/7 in your
                              account. You can check them anytime.
                            </div>
                          </div>
                        </SlideDown>
                      ) : (
                        " "
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="bg-white">
                      <div className="flex h-16 mt-5 text-[#0e314c] font-medium font-raleway text-[16px] items-center">
                        {Faq8 ? (
                          <div
                            className="w-[15%] bg-[#ff0000] p-2 h-full text-center text-white font-bold cursor-pointer"
                            onClick={() => setFaq8(false)}
                          >
                            <div className="w-5">
                              <Image
                                src="/SubtractWhite.svg"
                                fill
                                alt="plus"
                                className="custom_img lg:ml-[10px] md:ml-[3px] mt-3 "
                              />
                            </div>
                          </div>
                        ) : (
                          <div
                            className="w-[15%] bg-[#ff0000] p-2 h-full text-center text-white font-bold cursor-pointer "
                            onClick={() => {
                              setFaq6(false),
                                setFaq7(false),
                                setFaq8(true),
                                setFaq9(false),
                                setFaq10(false);
                            }}
                          >
                            <div className="w-5">
                              <Image
                                src="/AddWhite.svg"
                                fill
                                alt="plus"
                                className="custom_img lg:ml-[10px] md:ml-[3px] mt-3 "
                              />
                            </div>
                          </div>
                        )}
                        <div className="p-3 leading-[16px]">
                          What Documents do I require to get a Payment
                          Gateway?an I have multiple activities in a single
                          feature?
                        </div>
                      </div>

                      {Faq8 ? (
                        <SlideDown>
                          <div className="flex  border-t-2 pt-3 text-[#0e314c] font-medium font-raleway text-[16px] items-center ">
                            <div className="px-8 font-normal text-[16px]  leading-[24px] font-raleway text-[#212529] shadow-sm">
                              To activate your application, MyridePay requires
                              clear scanned copy the following documents:
                              <li>
                                Personal IDs issued by the Government of Your
                                Car Rental Business owner and partner(s) if any.
                              </li>
                              <li>
                                Government Issued Business License/Commercial
                                Registration (CR).
                              </li>
                              <li>
                                Company’s Bank Statement (3 months) on the
                                Bank’s official letterhead, containing complete
                                account information IBAN, account number,
                                beneficiary name etc.
                              </li>
                              <li>
                                Your logo will be required after signing up when
                                you have started using the payment gateway.
                              </li>
                              <li>
                                Proof of Address (eg: Rental lease, Electricity
                                Bill)
                              </li>
                              <li>Rental Company’s Terms and Conditions.</li>
                              <li>MOA / if Applicable.</li>
                              Further documentation can be demanded to help
                              demonstrate the financial stability and continuity
                              of the business. Note: Upload clear copies of the
                              requested documents. State required details as
                              accurately as possible to avoid delays in the
                              approval process. Contact us for further
                              assistance.
                            </div>
                          </div>
                        </SlideDown>
                      ) : (
                        " "
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="bg-white">
                      <div className="flex h-12 mt-5 text-[#0e314c] font-medium font-raleway text-[16px] items-center">
                        {Faq9 ? (
                          <div
                            className="sm:w-[10%] w-[13%] h-full bg-[#ff0000] p-2  text-center text-white font-bold cursor-pointer"
                            onClick={() => setFaq9(false)}
                          >
                            <div className="w-5">
                              <Image
                                src="/SubtractWhite.svg"
                                fill
                                alt="plus"
                                className="custom_img lg:ml-[10px] md:ml-[3px] mt-[6px] "
                              />
                            </div>
                          </div>
                        ) : (
                          <div
                            className="sm:w-[10%] w-[13%] h-full bg-[#ff0000] p-2  text-center text-white font-bold cursor-pointer "
                            onClick={() => {
                              setFaq6(false),
                                setFaq7(false),
                                setFaq8(false),
                                setFaq9(true),
                                setFaq10(false);
                            }}
                          >
                            <div className="w-5">
                              <Image
                                src="/AddWhite.svg"
                                fill
                                alt="plus"
                                className="custom_img lg:ml-[10px] md:ml-[3px] mt-[6px] "
                              />
                            </div>
                          </div>
                        )}
                        <div className="p-3 leading-[16px]">
                          Why is My Payment Gateway Taking Long to be Live?
                        </div>
                      </div>

                      {Faq9 ? (
                        <SlideDown>
                          <div className="flex   border-t-2 pt-3 ">
                            <div className="px-8 font-normal text-[16px] shadow-sm leading-[24px] font-raleway text-[#212529] ">
                              Here are some reasons for delays in your Account.
                              <li>
                                There is an issue with the validity of the
                                documents.
                              </li>
                              <li>
                                We require additional documentation regarding
                                your establishment.
                              </li>
                              <li>
                                There might be a delay in the bank’s process.
                              </li>
                              <li>
                                The application requires special approval.
                              </li>
                            </div>
                          </div>
                        </SlideDown>
                      ) : (
                        " "
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="bg-white">
                      <div className="flex h-12 mt-5 text-[#0e314c] font-medium font-raleway text-[16px] items-center">
                        {Faq10 ? (
                          <div
                            className="sm:w-[10%] w-[13%] bg-[#ff0000] p-2 h-full text-center text-white font-bold cursor-pointer"
                            onClick={() => setFaq10(false)}
                          >
                            <div className="w-5 ">
                              <Image
                                src="/SubtractWhite.svg"
                                fill
                                alt="plus"
                                className="custom_img lg:ml-[10px] md:ml-[3px] mt-[6px] "
                              />
                            </div>
                          </div>
                        ) : (
                          <div
                            className="sm:w-[10%] w-[13%] bg-[#ff0000] p-2 h-full items-center text-center text-white font-bold cursor-pointer "
                            onClick={() => {
                              setFaq6(false),
                                setFaq7(false),
                                setFaq8(false),
                                setFaq9(false),
                                setFaq10(true);
                            }}
                          >
                            <div className="w-5  ">
                              <Image
                                src="/AddWhite.svg"
                                fill
                                alt="plus"
                                className="custom_img lg:ml-[10px] md:ml-[3px] mt-[6px] "
                              />
                            </div>
                          </div>
                        )}
                        <div className="p-3 leading-[16px]">
                          What is a Pay-Out Schedule?
                        </div>
                      </div>

                      {Faq10 ? (
                        <SlideDown>
                          <div className="flex  border-t-2 pt-3 ">
                            <div className="px-8 font-normal text-[16px]  leading-[24px] font-raleway text-[#212529] shadow-sm">
                              Car rentals will be paid within 10-20 days.
                              However, MyridePay may hold the amount for a
                              longer period, including but not limited to a
                              proprietary set of rules, chargeback rates,
                              transaction behaviour, and other supplemental data
                              about your business.
                            </div>
                          </div>
                        </SlideDown>
                      ) : (
                        " "
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </>
    );
}
export default FAQ;
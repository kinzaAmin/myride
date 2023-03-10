import React from "react";
import Container from "@/components/ui/Container";
import Header2 from "@/components/Common/Header2";
import Footer from "@/components/Common/Footer";
const PrivacyPolicy = () => {
    return (
      <>
        <Container>
          <div className="mt-4 pb-4 font-Roboto text-[16px] leading-[27px] font-[300] text-[#57647c]">
            <div>
              <div>
                Your privacy is important to us. We value your trust and are
                committed to protecting and safeguarding any personal
                information you give us. This document, which we update from
                time to time, describes how we use and process your personal
                data and how we use cookies. It also tells you how you can
                contact us if you have questions about your personal
                information.
              </div>

              <div>
                MyridePay provides online Payment services through its own
                websites and mobile apps and through other online platforms such
                as partners’ websites and social media. The information that
                follows applies to all of these platforms.
              </div>
            </div>

            <div>
              <div className="font-Roboto text-[32px] leading-[38px] font-[600] text-[#212529]">
                Privacy
              </div>
              <div
                className="font-Roboto text-[16px] leading-[27px] font-[600] text-[#57647c]"
              >
                What kind of personal information does MyridePay use?
              </div>
              <div>
                When you make a reservation, you’ll be asked for your name,
                address, telephone number, email address, payment details, the
                names of guests traveling with you and your preferences for your
                stay.
              </div>
              <div>
                To make it easier to manage your reservations, you can open a
                user account. This allows you to save your personal settings,
                review previous bookings and manage future reservations.
              </div>
              <div>
                When you visit our website, even if you don’t make a
                reservation, we may collect certain information, like your IP
                address, or browser, and information about your computer’s
                operating system, application version, language settings and
                pages that have been shown to you. If you’re using a mobile
                device, we might also collect data that identifies your mobile
                device, device-specific settings and characteristics and
                latitude/longitude details.
              </div>
            </div>
          </div>
        </Container>
      </>
    );
}
export default PrivacyPolicy;

PrivacyPolicy.getLayout = function PageLayout (page){
  return (
    <>
      <Header2 heading="Privacy Policy" />
      {page}
      <Footer />
    </>
  );
}

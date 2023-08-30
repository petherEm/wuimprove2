"use client";


import { ResponsiveFunnel } from "@nivo/funnel";

const data = [
  {
    id: "cash_intended",
    value: 18322,
    label: "Cash Intended",
  },
  {
    id: "sms_sent",
    value: 10747,
    label: "SMS sent to Receivers in RO",
  },
  {
    id: "success_sms_sent",
    value: 9531,
    label: "Success SMS",
  },
  {
    id: "receiver_clicked",
    value: 5716,
    label: "Receiver clicks on SMS",
  },
  {
    id: "receiver_redirect",
    value: 287,
    label: "Purchased",
  },
  {
    id: "new_customers",
    value: 90,
    label: "New customers",
  },
];

const SMSSection = () => {

  return (
    <div className="flex flex-col bg-black">
      {/* CONTENT MANAGEMENT */}
      <div className="hidden bg-black h-auto mb-10 md:flex md:flex-wrap justify-center">
        {/* OPTION A (PREVIOUS) */}
        <div className="p-10">
          <div className="">
            <h1 className="text-white text-center mt-2 mb-4">
              Option A (PREVIOUS)
            </h1>
            <div className="mockup-phone border-primary">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1">
                  <div className="chat chat-start">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img src="favicon.png" />
                      </div>
                    </div>
                    <div className="chat-bubble text-sm">
                      Money transfer MTCN 1234567890 is ready for pickup. You
                      can redirect
                      <br /> money to you Western Union Digital Bank Account.{" "}
                      <br />
                      <span className="font-bold text-white">
                        https://go.wu.com/WUPlus_en
                      </span>
                    </div>
                  </div>
                  {/* <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="favicon.png" />
            </div>
          </div>
          <div className="chat-bubble">
            .......
          </div>
        </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OPTION B (below 1000 RON - not set) */}
        <div className="p-10">
          <div>
            <h1 className="text-white text-center mt-2 mb-4">
              Option B (below 1000 RON)
            </h1>
            <div className="mockup-phone border-primary">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1">
                  <div className="chat chat-start">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img src="favicon.png" />
                      </div>
                    </div>
                    <div className="chat-bubble text-sm">
                      Your money transfer MTCN 1234567890 is ready for pickup.
                      <br /> Redirect it to the Western Union Digital Bank
                      account
                      <br />
                      <span className="font-bold text-white">
                        https://go.wu.com/WUPlus_en
                      </span>
                      <br />
                      to enjoy benefits of our digital banking.
                    </div>
                  </div>
                  {/* <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="favicon.png" />
            </div>
          </div>
          <div className="chat-bubble">
            .......
          </div>
        </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OPTION C (CURRENT) */}
        <div className="p-10">
          <div>
            <h1 className="text-white text-center mt-2 mb-4">
              Option C (CURRENT)
            </h1>
            <div className="mockup-phone border-secondary">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1">
                  <div className="chat chat-start">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img src="favicon.png" />
                      </div>
                    </div>
                    <div className="chat-bubble text-sm">
                      Your money transfer MTCN 1234567890 is ready for pickup.
                      <br /> Redirect it to the Western Union Digital Bank
                      account
                      <br />
                      <span className="font-bold text-white">
                        https://go.wu.com/WUPlus_en
                      </span>
                      <br />
                      and get a 100 RON bonus.
                    </div>
                  </div>
                  {/* <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="favicon.png" />
            </div>
          </div>
          <div className="chat-bubble">
            .......
          </div>
        </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RESULTS */}
      <div className="w-full bg-black h-[1500px] flex flex-col md:flex-row items-center justify-around p-10 mx-auto">
        <div className="flex-1 flex justify-around">
          <div>
            <h1 className="text-white text-center mt-2 mb-4">
              Option C (CURRENT)
            </h1>
            <div className="mockup-phone border-secondary mb-14">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1">
                  <div className="chat chat-start">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img src="favicon.png" />
                      </div>
                    </div>
                    <div className="chat-bubble text-sm">
                      Your money transfer MTCN 1234567890 is ready for pickup.
                      <br /> Redirect it to the Western Union Digital Bank
                      account
                      <br />
                      <span className="font-bold text-white">
                        https://go.wu.com/WUPlus_en
                      </span>
                      <br />
                      and get a 100 RON bonus.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[800px] flex flex-col">
          <h1 className="text-white">Live in US</h1>
          <ResponsiveFunnel
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            valueFormat=">-.2s"
            colors={{ scheme: "orange_red" }}
            borderWidth={20}
            labelColor={{
              from: "color",
              modifiers: [["darker", 3]],
            }}
            beforeSeparatorLength={100}
            beforeSeparatorOffset={50}
            afterSeparatorLength={100}
            afterSeparatorOffset={20}
            currentPartSizeExtension={10}
            currentBorderWidth={40}
            motionConfig="wobbly"
            style={{ fontSize: "4.5rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SMSSection;

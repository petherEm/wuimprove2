import React from "react";

const AlreadyBankUser = ({
  firstName,
  lastName,
  email,
  mobile,
  IBAN,
  fundsInAmount,
  fee,
  country,
}) => {
  return (
    <div className="flex justify-around">
      {/* LEFT */}
      <form className="relative mt-8 md:p-10 bg-slate-50 md:max-w-[700px] flex flex-col justify-center">
        {IBAN && (
          <h1 className="mb-3 p-3 bg-[#fbd721] rounded-md">
            <span className="font-bold">Great News!</span> {firstName}{" "}
            {lastName} is already using Western Union ecosystem. Your funds will
            be credited instantly.
          </h1>
        )}
        {/* Pointer */}
        <div
          className="absolute -top-3 -right-1 h-5 w-5 rounded-full bg-secondary animate-pulse tooltip tooltip-primary tooltip-left"
          data-tip="Adapting Review Page after successfull lookup of Receiver"
        />

        <h1 className="px-2 md:px-0 text-xl font-bold mb-6">
          Review and Confirm
        </h1>
        <div className="p-2 md:p-0">
          {/* ROW 1 */}
          <div className="flex justify-start space-x-4">
            <div
              type="text"
              className="bg-transparent flex flex-col outline-none md:w-[400px]"
            >
              <p className="uppercase">Purpose of transaction</p>
              <hr className="h-[2px] bg-gray-500" />
              <p>Gift</p>
            </div>
            <div
              type="text"
              className="bg-transparent flex flex-col outline-none md:w-[400px]"
            >
              <p className="uppercase">Source of funds</p>
              <hr className="h-[2px] bg-gray-500" />
              <p>Savings</p>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="mt-6 flex justify-start space-x-4">
            <div
              type="text"
              className="bg-transparent flex flex-col outline-none md:w-[400px]"
            >
              <p className="uppercase">Sending Details</p>
              <hr className="h-[2px] bg-gray-500" />
              <p>Piotr Maciejewski</p>
              <p className="text-[12px]">+48 8888888</p>
              <p>Credit/Debit card</p>
              <p className="text-[12px]">VISA ending in 8902</p>
            </div>
            <div
              type="text"
              className="relative bg-transparent flex flex-col outline-none md:w-[400px]"
            >
              <p className="uppercase">Receiving Details</p>
              <hr className="h-[2px] bg-gray-500" />
              <p>
                {firstName} {lastName}
              </p>
              <p className="text-[12px]">{mobile}</p>
              <p>Western Union Digital Bank</p>
              <p className={`${IBAN ? "bg-[#fbd721] p-1" : ""} text-[12px]`}>
                IBAN: {IBAN}
              </p>
              {/* Pointer */}
              <div
                className="absolute top-3 -right-1 h-5 w-5 rounded-full bg-secondary animate-pulse tooltip tooltip-primary tooltip-left"
                data-tip="Displaying IBAN after successfull lookup of Receiver"
              />
            </div>
          </div>
          {/* ROW 3 */}
          <div className="mt-6 flex justify-start space-x-4">
            <div
              type="text"
              className="bg-transparent flex flex-col outline-none md:w-[400px]"
            >
              <p className="uppercase">Payout</p>
              <hr className="h-[2px] bg-gray-500" />
              <p>{country}</p>
            </div>
            <div
              type="text"
              className="bg-transparent flex flex-col outline-none md:w-[400px]"
            >
              <p className="uppercase">Summary</p>
              <hr className="h-[2px] bg-gray-500" />
              <div className="flex justify-between">
                <div>
                  <p>Transfer amount</p>

                  <p>Transfer fee</p>
                  <p className="">Total</p>
                  <p className="font-bold mt-2">Total credited amount:</p>
                </div>
                <div className="flex flex-col items-end">
                  <p>210 EUR</p>

                  <p>+0.00 EUR</p>
                  <p className="">210 EUR</p>
                  <p className="font-bold mt-2">1139.06 RON</p>
                </div>
              </div>
            </div>
          </div>

          {/* INFO BOX */}
          <div className="mt-6">
            <p className="text-[12px]">
              For all transfers, receiver may receive less due to foreign taxes
            </p>
            <p className="text-[12px]">
              <span className="font-bold">Important: </span>Western Union relies
              on the information you provide us to send money. Please review all
              the transaction details for accuracy before continuing your
              transaction.
            </p>
            <hr className="mt-6 mb-4 h-[2px] bg-gray-500" />
            <p className="text-[12px]">
              I agree to the Western Union Terms of service and Online privacy
              statement. I confirm that I'm not sending this transaction on
              behalf of another person.
            </p>
          </div>
        </div>

        {/* CTA */}

        <div className="collapse">
          <input type="checkbox" className="peer" />
          <button className="collapse-title mt-8 mb-8 mx-auto md:w-[600px] bg-blue-500 text-white py-4 text-lg">
            Accept
          </button>
          <div className="mt-4 collapse-content flex flex-col gap-y-2 items-start">
            <div className="flex items-center space-x-2">
              <input
                className="bg-transparent border-b-2 border-black py-2 placeholder:text-black outline-none"
                type="text"
                placeholder="Source of funds"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                className="bg-transparent border-b-2 border-black py-2 placeholder:text-black outline-none"
                type="text"
                placeholder="Purpose of transaction"
              />
            </div>
            <button className="mt-8 mb-8 mx-auto w-full md:w-[600px] bg-blue-500 text-white py-4 text-lg">
              Continue
            </button>
          </div>
        </div>
      </form>

      {/* RIGHT */}

      <div className="hidden md:inline-block">
        <h1 className="text-white text-center font-bold mb-4">
          Receiver's mobile
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
                <div className="chat-bubble hover:animate-bounce">
                  Hi {firstName}, Piotr sent you{" "}
                  <span className="text-white">{fundsInAmount} EUR</span>, your
                  account will be credited shortly.
                </div>
              </div>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="favicon.png" />
                  </div>
                </div>
                <div className="chat-bubble transition-all ease-in duration-300 animate-wiggle hover:animate-bounce">
                  Hi {firstName}, your Western Union Digital Bank account has
                  been credited with{" "}
                  <span className="text-white">{fundsInAmount} EUR</span>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlreadyBankUser;

"use client";

import { useState, useEffect } from "react";
import Summary from "@/components/Summary";
import ReceiverDetails from "@/components/digitalBankSend/ReceiverDetails";
import SummaryBox from "@/components/digitalBankSend/SummaryBox";
import AlreadyBankUser from "@/components/digitalBankSend/AlreadyBankUser";
import NoBankUser from "@/components/digitalBankSend/NoBankUser";
import NoBankUserReceipt from "@/components/digitalBankSend/NoBankUserReceipt";
import AlreadyBankUserReceipt from "@/components/digitalBankSend/AlreadyBankUserReceipt";

import { usePayStore } from "@/store/PayStore";
import { useUserStore } from "@/store/UserStore";

const SendToBank = () => {
  const [returnedData, setReturnedData] = useState({});

  const [
    fundsInAmount,
    setFundsInAmount,
    fundsIn,
    fundsOut,
    setFundsIn,
    setFundsOut,
    country,
    setCountry,
    currency,
    setCurrency,
    rates,
    setRates,
    banner,
    setBanner,
    fee,
    setFee,
  ] = usePayStore((state) => [
    state.fundsInAmount,
    state.setFundsInAmount,
    state.fundsIn,
    state.fundsOut,
    state.setFundsIn,
    state.setFundsOut,
    state.country,
    state.setCountry,
    state.currency,
    state.setCurrency,
    state.rates,
    state.setRates,
    state.banner,
    state.setBanner,
    state.fee,
    state.setFee,
  ]);

  const [
    firstName,
    setFirstName,
    lastName,
    setLastName,
    mobile,
    setMobile,
    email,
    setEmail,
    IBAN,
    setIBAN,
  ] = useUserStore((state) => [
    state.firstName,
    state.setFirstName,
    state.lastName,
    state.setLastName,
    state.mobile,
    state.setMobile,
    state.email,
    state.setEmail,
    state.IBAN,
    state.setIBAN,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { firstName, lastName, email, mobile };

    console.log("Sending data...", data);
    const res = await fetch("/api/banklookup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      console.error(`Error: ${res.status}`);
      return;
    }

    const returnedData = await res.json();
    console.log(returnedData);
    setReturnedData(returnedData);
  };

  return (
    <div className="bg-gray-300 text-black">
      <div className="min-h-screen max-w-7xl mx-auto flex flex-col lg:flex-row justify-between p-2 md:p-10">
        {/* LEFT */}
        <div className="flex-[60%] p-2 md:p-10">
          <div>
            <h1 className="text-2xl mb-4">Provide receiver's information</h1>
          </div>

          {/* ------------------> FORM <------------------ */}
          <div>
            {returnedData?.user?.IBAN ? (
              <h1 className="mb-3 p-3 bg-yellow-400 rounded-md max-w-[700px] transition-all ease-in duration-300 animate-wiggle">
                <span className="font-bold">Great News!</span>{" "}
                {returnedData.user.firstName} {returnedData.user.lastName} is
                already using Western Union ecosystem. Your funds will be
                credited instantly.
              </h1>
            ) : (
              <p className="text-[14px]">
                We will notify your receiver about this transfer and help them
                access their funds in Romania.
                <br />
              </p>
            )}
          </div>
          <form
            className="relative mt-8 p-2 md:p-10 bg-slate-50 max-w-[700px] flex flex-col justify-center"
            onSubmit={handleSubmit}
          >
            {/* Pointer */}
            <div
              className="absolute -top-3 -right-1 h-5 w-5 rounded-full bg-secondary animate-pulse tooltip tooltip-primary tooltip-left"
              data-tip="Changing receiver's form to make look up based on FName, LName, Email, Mobile"
            />

            <div>
              <div className="flex justify-start space-x-4">
                <input
                  type="text"
                  className="bg-transparent border-b-[1px] border-gray-500 outline-none  placeholder:text-gray-800 md:w-[400px]"
                  placeholder="Receiver's first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  className="bg-transparent outline-none border-b-[1px] border-gray-500 placeholder:text-gray-800 w-full"
                  placeholder="Receiver's last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              {/* <div className="mt-8">
            <input
              type="text"
              className="bg-transparent outline-none border-[4px] border-red-500 placeholder:text-gray-800 w-full"
              placeholder="Receiver's last name"
            />
          </div> */}
              <div className="mt-6 font-semibold">
                <h1 className="text-xl">Preferred receiver notification:</h1>
              </div>
              <div className="mt-8 flex justify-start space-x-4">
                <input
                  type="text"
                  className="bg-transparent outline-none placeholder:text-gray-800 w-full md:w-[400px]"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-6 mb-6 text-center">
                <p>OR</p>
              </div>
              <div className="mt-8 flex justify-start space-x-4">
                <input
                  type="text"
                  className="bg-transparent outline-none border-b-[1px] border-gray-500 placeholder:text-gray-800 w-fit"
                  placeholder="Code (40 RO)"
                />
                <input
                  type="text"
                  className="p-1 bg-transparent outline-none placeholder:text-gray-800 w-[400px]"
                  placeholder="Mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>

              {/* <div className="mt-8 flex flex-col gap-y-6">
            <input
              type="text"
              className="bg-transparent outline-none border-b-[1px] border-gray-500 placeholder:text-gray-800 w-[400px]"
              placeholder="Purpose of transaction"
            />
            <input
              type="text"
              className="bg-transparent outline-none border-b-[1px] border-gray-500 placeholder:text-gray-800 w-[400px]"
              placeholder="Source of funds"
            />
          </div> */}
            </div>

            {/* CTA */}
            <button
              className="mt-8 mb-8 mx-auto w-full md:w-[600px] bg-blue-500 text-white py-4 text-lg"
              type="submit"
            >
              Continue
            </button>
          </form>
          <div>
            {/* <div>
          <div>
            {returnedData.user
              ? `IBAN: ${returnedData.user.IBAN}`
              : "Loading..."}
          </div>
          <div>
            {returnedData.user
              ? `Email: ${returnedData.user.email}`
              : "Loading..."}
          </div>
          <div>
            {returnedData.user
              ? `First Name: ${returnedData.user.firstName}`
              : "Loading..."}
          </div>
          <div>
            {returnedData.user
              ? `Last Name: ${returnedData.user.lastName}`
              : "Loading..."}
          </div>
          <div>
            {returnedData.user
              ? `Mobile: ${returnedData.user.mobile}`
              : "Loading..."}
          </div>
        </div> */}
          </div>
        </div>

        {/* RIGHT */}
        {/* RIGHT SIDE --------- SUMMARY */}
        <Summary rates={rates} currency={currency} banner={banner} />
      </div>

      <div className="bg-black h-[5500px]">
        <div className="p-2 md:p-10">
          <h1 className="text-white text-2xl md:text-4xl">
            Happy Path (Review - already WU Digital Bank user)
          </h1>
          <AlreadyBankUser
            firstName={returnedData?.user?.firstName}
            lastName={returnedData?.user?.lastName}
            email={returnedData?.user?.email}
            mobile={returnedData?.user?.mobile}
            IBAN={returnedData?.user?.IBAN}
            fundsInAmount={fundsInAmount}
            country={country}
            fee={fee}
          />
        </div>
        <div className="p-2 md:p-10">
          <h1 className="text-white text-2xl md:text-4xl">
            Happy Path (Review - no Bank account yet)
          </h1>
          <NoBankUser
            firstName={returnedData?.user?.firstName}
            lastName={returnedData?.user?.lastName}
            email={returnedData?.user?.email}
            mobile={returnedData?.user?.mobile}
            fundsInAmount={fundsInAmount}
            country={country}
            fee={fee}
          />
        </div>
        <div className="p-2 md:p-10">
          <h1 className="text-white text-2xl md:text-4xl">
            Happy Path (Receipt - already WU Digital Bank user)
          </h1>
          <AlreadyBankUserReceipt />
        </div>
        <div className="p-2 md:p-10">
          <h1 className="text-white text-2xl md:text-4xl">
            Happy Path (Receipt - no Bank account yet)
          </h1>
          <NoBankUserReceipt />
        </div>
      </div>
    </div>
  );
};

export default SendToBank;

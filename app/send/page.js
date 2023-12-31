"use client";

import React, { useState, useEffect } from "react";
import { BsCashCoin, BsBank } from "react-icons/bs";
import Image from "next/image";
import ReactFlagsSelect from "react-flags-select";
import Link from "next/link";

import { usePayStore } from "@/store/PayStore";
import Summary from "@/components/Summary";
import countries from "@/utils/allowedCountries";

const fetchRates = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

const SendMoney = () => {
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
    bonusAmount,
    setBonusAmount,
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
    state.bonusAmount,
    state.setBonusAmount,
  ]);

  const [select, setSelect] = useState("PL");
  const [name, setName] = useState("Poland");

  // const [currency, setCurrency] = useState("PLN");

  const [sendAmount, setSendAmount] = useState("0");

  console.log(fundsInAmount);

  useEffect(() => {
    fetchRates(
      `https://v6.exchangerate-api.com/v6/5f408f6dc33a575a92904c53/pair/EUR/${currency}`
    ).then((data) => {
      const conversion_rate = data.conversion_rate;
      console.log("conversion_rate", conversion_rate);
      setRates(conversion_rate);
    });
  }, [currency]);

  useEffect(() => {
    updateCodes();
  }, [country]);

  const onSelect = (code) => {
    setCountry(code);
    console.log("SELECT", country);
    console.log("currency", currency);
  };

  const updateCodes = () => {
    if (country === "PL") {
      setCurrency("PLN");
      setName("Poland");
      setBanner(true);
    } else if (country === "RO") {
      setCurrency("RON");
      setName("Romania");
      setBanner(true);
    } else if (country === "UA") {
      setCurrency("UAH");
      setName("Ukraine");
      setBanner(false);
    } else if (country === "US") {
      setCurrency("USD");
      setName("United States");
      setBanner(false);
    } else if (country === "DE") {
      setCurrency("EUR");
      setName("Germany");
      setBanner(false);
    } else if (country === "fi") {
      setCurrency("EUR");
      setName("Finland");
      setBanner(false);
    } else if (country === "GB") {
      setCurrency("GBP");
      setName("United Kingdom");
      setBanner(false);
    } else if (country === "IE") {
      setCurrency("EUR");
      setName("Ireland");
      setBanner(false);
    } else if (country === "IT") {
      setCurrency("EUR");
      setName("Italy");
      setBanner(false);
    } else if (country === "NL") {
      setCurrency("EUR");
      setName("Netherlands");
      setBanner(false);
    } else if (country === "SE") {
      setCurrency("SEK");
      setName("Sweden");
      setBanner(false);
    }
  };

  return (
    <div data-theme="light" className="relative bg-gray-300 text-black">
      {/* YELLOW UPSELL BANNER */}
      <div
        className={`${
          !banner
            ? "hidden"
            : "bg-[#fbd721] border-0 border-red-500 h-24 flex items-center justify-center transition-all ease-in duration-300 animate-wiggle"
        }`}
      >
        <div className="flex flex-col ">
          <h1 className="text-center text-[13px] md:text-[18px]">
            Sending to <span className="font-bold">{name}? </span>Send directly
            to Western Union Ecosystem and reward your receiver{" "}
            <span className="font-bold">
              now with additional 100 {currency} bonus.
            </span>
          </h1>
        </div>
      </div>
      {/* Pointer */}
      <div
        className="absolute z-50 top-8 right-8 h-5 w-5 rounded-full bg-green-600 animate-pulse tooltip tooltip-primary tooltip-left"
        data-tip="To add a prominent banner to upsell Ecosystem and inform about the bonus."
        onClick={banner ? () => setBanner(false) : () => setBanner(true)}
      />
      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row justify-between md:p-6">
        <div className="md:flex-[50%] md:p-8">
          <div className="p-4 bg-white md:max-w-[720px]">
            <h1 className="text-2xl">Send Money Online from Germany</h1>
            <h2 className="mt-4">Your receiver's country and send amount</h2>
            <div className="mt-4">
              <label className="text-[14px] text-gray-400">Send to</label>
              <ReactFlagsSelect
                className="text-center w-full rounded-xl"
                selected={country}
                onSelect={onSelect}
                countries={countries}
                searchable={true}
                optionsSize={20}
                showSelectedLabel={true}
                fullWidth={true}
                /*showSelectedLabel={showSelectedLabel}
                selectedSize={selectedSize}
                showOptionLabel={showOptionLabel}
                optionsSize={optionsSize}
                placeholder={placeholder}
                searchable={searchable}
                searchPlaceholder={searchPlaceholder}
                alignOptionsToRight={alignOptionsToRight}
                fullWidth={fullWidth}
                disabled={disabled} */
              />
            </div>

            {/* WUDB UPSELL */}
            {/* <div
              className={`${
                !banner ? "hidden" : "mt-4 border-[4px] border-red-500 p-4"
              }`}
            >
              <p className="text-[12px]">
                Up to 100 {currency} in bonuses for your receiver! Send more
                than 1000 {currency} to Western Union Digital Banking (WU+)
                accounts in Romania. Send money directly or for cash pickup for
                your receiver to redirect money to their Digital Banking account
                to earn the bonus*.{" "}
              </p>
              
            </div> */}

            {/* AMOUNT AND RECEIVER GETS */}
            <div>
              <div className="mt-6 flex  flex-row justify-between space-x-4">
                <div className="relative flex border-[1px] border-gray-400 p-4">
                  <p className="absolute text-[9px] top-1 left-1">
                    Send amount
                  </p>
                  <input
                    type="number"
                    className="bg-white w-[100px] md:w-[250px] outline-none placeholder:text-black"
                    placeholder={fundsInAmount}
                    value={fundsInAmount}
                    onChange={(e) => setFundsInAmount(e.target.value)}
                  />
                  <p className="text-blue-500 text-[14px]">EUR</p>
                </div>
                <div className="relative flex border-[1px] border-gray-400 p-4">
                  <p className="absolute text-[9px] top-1 left-1">
                    Receiver gets
                  </p>
                  <input
                    type="text"
                    className="bg-white w-[100px] md:w-[250px] outline-none placeholder:text-black"
                    placeholder={Math.round(fundsInAmount * rates * 100) / 100}
                    onChange={(e) => setSendAmount(e.target.value)}
                  />
                  <p className="text-blue-500 text-[14px]"> {currency}</p>
                </div>
              </div>
              <div className="flex items-center mt-6 mb-6 alert alert-info shadow-lg rounded-none text-[13px] md:h-5">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-current flex-shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>Send up to 5,000.00 EUR</span>
                </div>
              </div>
              {/* CURRENCY CONVERSION  */}

              <div className="mt-6 mb-6 flex flex-col items-center justify-center">
                <p className="font-bold">
                  1.00 EUR = {rates} ({currency})
                </p>
                <p className="text-[11px]">
                  Exchange rate varies with delivery and payment method.
                  <span className="text-blue-500 font-semibold cursor-pointer">
                    {" "}
                    Details.
                  </span>
                </p>
              </div>
            </div>

            {/* INSTRUCTION */}
            <div className="px-4 py-2 bg-blue-800/80 rounded-sm text-white">
              <h1 className="text-center text-[14px]">
                Select below to see exchange rate and receive amount.
              </h1>
            </div>

            {/* HOW DOES YOUR RECEIVER WANT THE MONEY */}
            <div className="mt-10">
              <h1 className="text-xl mt-6 mb-6">
                How does your receiver want the money?
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-4 md:w-5/6 gap-y-4 ">
                <div
                  onClick={() => {
                    setFundsOut("Cash"), setFee(2.99);
                  }}
                  className={`${
                    fundsOut === "Cash" ? "bg-slate-300" : "bg-white"
                  } border-[1.5px] border-black h-28 w-32 rounded-md flex flex-col items-center justify-center cursor-pointer`}
                >
                  <BsCashCoin className="text-3xl" />
                  <p className="mt-2 text-[12px] font-normal">Cash</p>
                </div>
                <div
                  onClick={() => {
                    setFundsOut("Bank"), setFee(0.0), setBonusAmount(null);
                  }}
                  className={`${
                    fundsOut === "Bank" ? "bg-slate-300" : "bg-white"
                  } border-[1.5px] border-black h-28 w-32 rounded-md flex flex-col items-center justify-center cursor-pointer`}
                >
                  <BsBank className="text-3xl" />
                  <p className="mt-2 text-[12px] font-normal">Bank account</p>
                </div>
                {country === "RO" || country === "PL" ? (
                  <div
                    onClick={() => {
                      setFundsOut("Ecosystem"),
                        setFee(0.0),
                        setBonusAmount(100);
                    }}
                    className={`${
                      fundsOut === "Ecosystem" ? "bg-slate-300" : "bg-white"
                    } border-[1.5px] border-black h-28 w-32 rounded-md flex flex-col items-center justify-center cursor-pointer`}
                  >
                    <Image src="/wumin2.png" width="90" height="90" />
                    <p className="mt-2 text-[12px] font-normal text-center">
                      Western Union Ecosystem
                    </p>
                  </div>
                ) : (
                  <div
                    className={`bg-slate-100 border-[1.5px] border-black h-28 w-32 rounded-md flex flex-col items-center justify-center cursor-disabled`}
                  >
                    <Image src="/wumin2.png" width="90" height="90" />
                    <p className="mt-2 text-[12px] font-normal text-center">
                      Western Union Ecosystem{" "}
                      <span className="text-red-400">(coming soon)</span>
                    </p>
                  </div>
                )}

                <div
                  onClick={() => {
                    setFundsOut("Card"), setFee(0.0);
                  }}
                  className={`${
                    fundsOut === "Card" ? "bg-slate-300" : "bg-white"
                  } border-[1.5px] border-black h-28 w-32 rounded-md flex flex-col items-center justify-center cursor-pointer`}
                >
                  <Image src="/masterc2.png" width="90" height="90" />
                  <p className="mt-2 text-[12px] font-normal text-center">
                    Debit card
                  </p>
                </div>
              </div>
            </div>

            {/* HOW WOULD YOU LIKE TO PAY */}

            <div className="mt-10">
              <h1 className="text-xl mt-6 mb-6">How would you like to pay?</h1>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 md:w-5/6 gap-y-4">
                <div
                  onClick={() => setFundsIn("Card")}
                  className={`${
                    fundsIn === "Card" ? "bg-slate-300" : "bg-white"
                  } border-[1.5px] border-black h-28 w-32 rounded-md flex flex-col items-center justify-center cursor-pointer`}
                >
                  <BsCashCoin className="text-3xl" />
                  <p className="mt-2 text-[12px] font-normal">
                    Credit/Debit card
                  </p>
                </div>
                <div
                  onClick={() => setFundsIn("Instant")}
                  className={`${
                    fundsIn === "Instant" ? "bg-slate-300" : "bg-white"
                  } border-[1.5px] border-black h-28 w-32 rounded-md flex flex-col items-center justify-center cursor-pointer`}
                >
                  <BsCashCoin className="text-3xl" />
                  <p className="mt-2 text-[12px] text-center font-normal">
                    Instant bank transfer
                  </p>
                </div>
                <div
                  onClick={() => setFundsIn("Bank")}
                  className={`${
                    fundsIn === "Bank" ? "bg-slate-300" : "bg-white"
                  } border-[1.5px] border-black h-28 w-32 rounded-md flex flex-col items-center justify-center cursor-pointer`}
                >
                  <BsBank className="text-3xl" />
                  <p className="mt-2 text-[12px] font-normal">Bank transfer</p>
                </div>

                <div className="bg-slate-50  h-28 w-32 rounded-md flex flex-col items-center justify-center">
                  <p className="hidden mt-2 text-[12px] font-bold text-center">
                    Debit card
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-8 mb-8 w-full bg-blue-500 text-white py-4 text-lg">
              <Link href="/new-send-to-bank">Continue</Link>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE --------- SUMMARY */}
        <div className="flex-[50%] mx-auto p-2 md:p-8">
          <Summary rates={rates} currency={currency} banner={banner} />
        </div>
      </div>
      Legal Disclaimers
    </div>
  );
};

export default SendMoney;

import React from "react";
import Image from "next/image";

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="bg-secondary2 flex flex-col justify-center items-center pt-16 pb-16 pl-4 pr-4"
    >
      <div className="mx-auto gap-8 max-w-7xl flex flex-col lg:flex-row justify-center items-center">
        <div className="w-2/4 lg:w-full lg:h-full">
          <Image
            src="/PNG/Altcoin.png"
            width={2000}
            height={2000}
            alt="coins-icon"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-primary font-bold text-4xl md:text-5xl leading-tight mb-6 text-center">
            Why Choose Globpay?
          </h1>
          <section className="flex flex-col gap-1 mb-4">
            <h3 className="text-secondary font-bold text-xl">
              Low Fees, Zero Chargebacks
            </h3>
            <p className="text-black">
              Keep more of every sale with predictable pricing and stablecoin
              settlement. Say goodbye to costly chargeback disputes.
            </p>
          </section>

          <section className="flex flex-col gap-1 mb-4">
            <h3 className="text-secondary font-bold text-xl">
              Enterprise-Grade Security
            </h3>
            <p className="text-black">
              Enjoy multi-layer protection, on-chain transparency, and
              continuous monitoring certified by industry-leading auditors.
            </p>
          </section>

          <section className="flex flex-col gap-1 mb-4">
            <h3 className="text-secondary font-bold text-xl">
              Built For Global Reach
            </h3>
            <p className="text-black">
              Accept leading cryptocurrencies, settle in your preferred
              currency, and expand into new markets without banking friction.
            </p>
          </section>

          <section className="flex flex-col gap-1 mb-8">
            <h3 className="text-secondary font-bold text-xl">
              Compliance-Ready Operations
            </h3>
            <p className="text-black">
              Leverage automated KYC, AML checks, and jurisdictional controls to
              operate confidently and stay audit-ready at all times.
            </p>
          </section>

          <button className="font-bold primary-btn pl-6 pr-6 pt-4 pb-4 rounded-full self-start text-primary bg-gradient-to-r from-[#BAFF7A] to-[#4FFFC4] hover:brightness-120 active:scale-95 transition-all">
            See All Features
          </button>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Download() {
  return (
    <section
      id="download"
      className="bg-primary2 flex flex-col justify-center items-center pt-16 pb-16 pl-4 pr-4"
    >
      <div className="mx-auto gap-8 max-w-7xl flex flex-col lg:flex-row justify-center items-center">
        <div className="flex flex-col">
          <h1 className="font-bold text-4xl md:text-5xl leading-tight mb-6 text-center">
            Globpay Wherever You Work
          </h1>

          <section className="flex flex-col gap-1 mb-8">
            <h3 className="font-bold text-xl text-center">
              Monitor & Approve On Mobile
            </h3>
            <p className="text-secondary text-center">
              Receive instant notifications, approve large settlements, and
              track payment flows from your phone.
            </p>
          </section>

          <div className="self-center flex justify-center items-center w-2/5">
            {/* <Image
							src="/PNG/downloadbadges.svg"
							width={600}
							height={200}
							alt="download badges"
							className="cursor-pointer"
						/> */}
            <Button className="font-bold text-xl primary-btn pl-6 pr-6 pt-6 pb-6 rounded-full self-start flex items-center gap-2n text-primary bg-gradient-to-r from-[#BAFF7A] to-[#4FFFC4] hover:brightness-120 active:scale-95 transition-all">
              Start Itegrating
            </Button>
          </div>
        </div>
        <div className="w-4/5 md:w-1/2">
          <Image
            src="/PNG/cryptophone.png"
            width={2500}
            height={2222}
            alt="download-app image"
          />
        </div>
      </div>
    </section>
  );
}

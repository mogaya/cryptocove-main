import React from 'react';
import Card from '../Card';
import Image from 'next/image';
import OpenSideBarBtn from '@/components/common/OpenSideBarBtn';

export default function Section1() {
	return (
		<section className="px-4 pb-16 pt-32 flex flex-col gap-12 bg-primary justify-center items-center min-h-screen w-screen">
			<div className="mx-auto max-w-7xl flex flex-col lg:grid lg:grid-cols-2 place-items-center gap-6 h-full">
				<div className="flex flex-col gap-6">
					<h1 className="font-bold text-4xl">A Crypto Gateway Built For Global Scale</h1>
					<p className="text-secondary">
						Orchestrate every payment flow through Globpay. Accept digital currencies at checkout,
						trigger instant conversions, and manage treasury operations from a single merchant
						dashboard.
					</p>

					<div className="flex flex-col gap-4 self-start font-bold">
						<div className="flex gap-4 items-center">
							<Image src="/PNG/tick-icon.svg" width={24} height={24} alt="tick icon" />
							<p>Accept 30+ digital currencies with one integration</p>
						</div>
						<div className="flex gap-4 items-center">
							<Image src="/PNG/tick-icon.svg" width={24} height={24} alt="tick icon" />
							<p>Auto-convert to 20+ fiat currencies and stablecoins</p>
						</div>
						<div className="flex gap-4 items-center">
							<Image src="/PNG/tick-icon.svg" width={24} height={24} alt="tick icon" />
							<p>Configure multi-entity routing and compliance controls</p>
						</div>
					</div>

					<OpenSideBarBtn
						ButtonText="Launch Merchant Dashboard"
						ClassNames="primary-btn px-6 py-4 rounded-full self-start mb-4"
					/>

					<p className="self-start">
						See our <span className="font-bold">8,762</span> reviews on Trustpilot
					</p>
				</div>
				<Image
					src="/PNG/section1-img.png"
					width={500}
					height={500}
					alt="section 1 image"
					className="mt-[-32px] scale-[125%]"
				/>
			</div>

			<div className="mx-auto max-w-4xl flex flex-col gap-4 items-center">
				<h1 className="font-bold text-2xl text-center">Plug Globpay Into Your Payment Stack</h1>
				<p className="text-secondary text-center mb-2">
					From custodial wallets to on-ramp partners, choose the services that keep your gateway in sync.
				</p>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
					<Card CardTitle={'Binance'} CardImage="binance-icon.png" />
					<Card CardTitle={'MetaMask'} CardImage="metamask-icon.png" />
					<Card CardTitle={'Coinbase'} CardImage="coinbase-icon.png" />
					<Card CardTitle={'More'} CardImage="allwallets-icon.svg" />
				</div>
			</div>
		</section>
	);
}

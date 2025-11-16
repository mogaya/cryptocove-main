import React from 'react';
import Image from 'next/image';

export default function HowItWorks() {
	return (
		<section id="how-it-works" className="bg-primary2 flex pl-4 pr-4 pt-16 pb-16 justify-center">
			<div className="mx-auto max-w-7xl flex flex-col gap-4 justify-center items-center">
				<h1 className="font-bold text-4xl md:text-5xl leading-tight">How Our Crypto Gateway Works</h1>
				<div
					id="steps"
					className="flex flex-col md:flex-row justify-between items-start gap-8 w-full"
				>
					<div id="step1" className="flex flex-col justify-center items-center w-full">
						<Image src="/PNG/Encryption.png" width={120} height={120} alt="download-icon" />
						<p className="text-secondary mb-1">Step 1</p>
						<h3 className="font-bold text-xl mb-4 text-center">Create Your Account</h3>
						<p className="text-secondary text-center">
							Sign up for Globpay, complete compliance checks, and invite your team.
						</p>
					</div>
					<Image
						className="hidden xl:block mt-16"
						src="/PNG/connect-line.png"
						width={160}
						height={12}
						alt="connect-line"
					/>

					<div id="step2" className="flex flex-col justify-center items-center w-full">
						<Image src="/PNG/Hot wallet.png" width={120} height={120} alt="wallet-icon" />
						<p className="text-secondary mb-1">Step 2</p>
						<h3 className="font-bold text-xl mb-4 text-center">Connect Infrastructure</h3>
						<p className="text-secondary text-center">
							Link wallets, custodians, or bank accounts to define settlement destinations.
						</p>
					</div>
					<Image
						className="hidden xl:block mt-16"
						src="/PNG/connect-line.png"
						width={160}
						height={12}
						alt="connect-line"
					/>

					<div id="step3" className="flex flex-col justify-center items-center w-full">
						<Image src="/PNG/Peer to Peer.png" width={120} height={120} alt="trading-icon" />
						<p className="text-secondary mb-1">Step 3</p>
						<h3 className="font-bold text-xl mb-4 text-center">Integrate & Test</h3>
						<p className="text-secondary text-center">
							Use our SDK or API to embed Globpay checkout, then simulate payments in sandbox.
						</p>
					</div>

					<Image
						className="hidden xl:block mt-16"
						src="/PNG/connect-line.png"
						width={160}
						height={12}
						alt="connect-line"
					/>

					<div id="step4" className="flex flex-col justify-center items-center w-full">
						<Image src="/PNG/IDO.png" width={120} height={120} alt="earn-money-icon" />
						<p className="text-secondary mb-1">Step 4</p>
						<h3 className="font-bold text-xl mb-4 text-center">Launch Globally</h3>
						<p className="text-secondary text-center">
							Go live with instant crypto payments, automatic conversions, and real-time reporting.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

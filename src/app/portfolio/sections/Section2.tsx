import React from 'react';
import Image from 'next/image';
import OpenSideBarBtn from '@/components/common/OpenSideBarBtn';

export default function Section2() {
	return (
		<section className="px-4 py-16 flex flex-col bg-primary2 justify-center w-screen">
			<div className="mx-auto max-w-7xl flex flex-col lg:grid lg:grid-cols-2 place-items-center gap-6 items-center">
				<div className="flex flex-col gap-6">
					<h1 className="font-bold text-2xl">Integrate In Minutes, Scale Everywhere</h1>
					<p className="text-secondary">
						Connect Globpay to your commerce stack using our REST API or drop-in checkout. Support
						mobile, web, and point-of-sale experiences with the same secure infrastructure.
					</p>

					<p className="text-secondary">
						Choose preferred settlement partners like Binance, Coinbase, or your own custody stack,
						and configure routing rules that match regional compliance needs without extra code.
					</p>

					<OpenSideBarBtn
						ButtonText="View Integration Docs"
						ClassNames="primary-btn px-6 py-4 rounded-full self-start mb-4"
					/>
				</div>
				<Image src="/PNG/section2-img.png" width={500} height={500} alt="section 2 image" />
			</div>
		</section>
	);
}

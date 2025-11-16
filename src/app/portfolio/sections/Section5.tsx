import React from 'react';
import Image from 'next/image';
import OpenSideBarBtn from '@/components/common/OpenSideBarBtn';

export default function Section5() {
	return (
		<section className="px-4 py-16 flex flex-col bg-primary justify-center w-screen">
			<div className="mx-auto max-w-7xl flex flex-col lg:grid lg:grid-cols-2 place-items-center gap-6 items-center">
				<Image
					src="/PNG/section5-img.svg"
					width={600}
					height={600}
					alt="section 5 image"
					className="scale-[125%]"
				/>
				<div className="flex flex-col gap-6">
					<h1 className="font-bold text-2xl">Benchmark Your Payment Economics</h1>
					<p className="text-secondary">
						Understand how Globpay&apos;s blended FX, fee schedules, and on-chain costs compare to
						your historical payment rails. Adjust routing to hit margin targets in every market.
					</p>

					<p className="text-secondary">
						Layer in network data, treasury performance, and demand forecasts to build smarter
						settlement strategies without spreadsheets.
					</p>

					<OpenSideBarBtn
						ButtonText="Run Benchmark"
						ClassNames="primary-btn px-6 py-4 rounded-full self-start mb-4"
					/>
				</div>
			</div>
		</section>
	);
}

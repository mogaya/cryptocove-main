import React from 'react';
import Image from 'next/image';
import OpenSideBarBtn from '@/components/common/OpenSideBarBtn';

export default function Section4() {
	return (
		<section className="px-4 py-16 flex flex-col bg-primary2 justify-center w-screen">
			<div className="mx-auto max-w-7xl flex flex-col lg:grid lg:grid-cols-2 place-items-center gap-6 items-center">
				<div className="flex flex-col gap-6">
					<h1 className="font-bold text-2xl">Monitor Performance In Real Time</h1>
					<p className="text-secondary">
						Globpay delivers a unified command center for authorizations, settlements, and treasury
						movements. Drill into channels, currencies, and regions with one intuitive dashboard.
					</p>

					<p className="text-secondary">Operational teams can track:</p>

					<div className="flex flex-col gap-4 self-start font-bold">
						<div className="flex gap-4 items-center">
							<Image src="/PNG/tick-icon.svg" width={24} height={24} alt="tick icon" />
							<p>Authorization, settlement, and refund performance by geography</p>
						</div>
						<div className="flex gap-4 items-center">
							<Image src="/PNG/tick-icon.svg" width={24} height={24} alt="tick icon" />
							<p>Conversion economics across fiat, stablecoins, and on-chain assets</p>
						</div>
						<div className="flex gap-4 items-center">
							<Image src="/PNG/tick-icon.svg" width={24} height={24} alt="tick icon" />
							<p>Compliance thresholds, velocity limits, and anomaly alerts</p>
						</div>
					</div>

					<OpenSideBarBtn
						ButtonText="Open Analytics"
						ClassNames="primary-btn px-6 py-4 rounded-full self-start mb-4"
					/>
				</div>
				<Image
					src="/PNG/section4-img.svg"
					width={800}
					height={800}
					alt="section 4 image"
					className="scale-[125%]"
				/>
			</div>
		</section>
	);
}

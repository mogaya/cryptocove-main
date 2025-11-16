import React from 'react';
import Image from 'next/image';
import OpenSideBarBtn from '@/components/common/OpenSideBarBtn';

export default function Section3() {
	return (
		<section className="px-4 py-16 flex flex-col bg-primary justify-center w-screen">
			<div className="mx-auto max-w-7xl flex flex-col lg:grid lg:grid-cols-2 place-items-center gap-6 items-center">
				<Image
					src="/PNG/section3-img.svg"
					width={700}
					height={700}
					alt="section 3 image"
					className="scale-[125%]"
				/>
				<div className="flex flex-col gap-6">
					<h1 className="font-bold text-2xl">Automation Without Complexity</h1>
					<p className="text-secondary">
						Globpay streamlines crypto payment acceptance, treasury ops, and reporting so finance,
						dev, and compliance teams stay aligned. With Globpay, you can:
					</p>

					<div className="flex flex-col gap-4 self-start font-bold">
						<div className="flex gap-4">
							<Image src="/PNG/tick-icon.svg" width={24} height={24} alt="tick icon" />
							<p>Route payments across wallets, exchanges, and banks automatically</p>
						</div>

						<div className="flex gap-4 items-center">
							<Image src="/PNG/tick-icon.svg" width={24} height={24} alt="tick icon" />
							<p>Trigger instant conversions with configurable FX and fee logic</p>
						</div>

						<div className="flex gap-4 items-center">
							<Image src="/PNG/tick-icon.svg" width={24} height={24} alt="tick icon" />
							<p>Sync transaction data to ERP, billing, and tax platforms</p>
						</div>

						<div className="flex gap-4 items-center">
							<Image src="/PNG/tick-icon.svg" width={24} height={24} alt="tick icon" />
							<p>Generate audit-ready ledgers with full blockchain transparency</p>
						</div>
					</div>

					<OpenSideBarBtn
						ButtonText="Automate Workflows"
						ClassNames="primary-btn px-6 py-4 rounded-full self-start mb-4 z-10"
					/>
				</div>
			</div>
		</section>
	);
}

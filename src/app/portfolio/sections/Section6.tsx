import React from 'react';
import Image from 'next/image';
import OpenSideBarBtn from '@/components/common/OpenSideBarBtn';

export default function Section6() {
	return (
		<section className="px-4 py-16 flex flex-col bg-primary2 justify-center w-screen">
			<div className="mx-auto max-w-7xl flex flex-col lg:grid lg:grid-cols-2 place-items-center gap-6 items-center">
				<div className="flex flex-col gap-6">
					<h1 className="font-bold text-2xl">Move Value At Lightning Speed</h1>
					<p className="text-secondary">
						Execute conversions, payouts, and treasury transfers directly from Globpay. Access deep
						liquidity pools to guarantee best execution without leaving the dashboard.
					</p>

					<p className="text-secondary">
						We aggregate institutional liquidity, stablecoin markets, and bank partners to keep your
						settlements instant even during peak demand.
					</p>

					<p className="text-secondary">
						Trigger single or batched transfers with automated reconciliation and notifications for
						every stakeholder.
					</p>

					<OpenSideBarBtn
						ButtonText="Schedule Transfers"
						ClassNames="primary-btn px-6 py-4 rounded-full self-start mb-4"
					/>
				</div>
				<Image src="/PNG/section6-img.svg" width={800} height={800} alt={'section 6 image'} />
			</div>
		</section>
	);
}

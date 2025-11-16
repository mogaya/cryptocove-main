import React from 'react';
import ReviewCard from '../ReviewCard';
import OpenSideBarBtn from '@/components/common/OpenSideBarBtn';

export default function Section7() {
	return (
		<section className="px-4 py-16 flex flex-col bg-primary justify-center w-screen">
			<div className="mx-auto max-w-7xl flex flex-col gap-6 items-center">
				<h1 className="font-bold text-2xl">Trusted By Merchants Worldwide</h1>

				<div className="flex flex-col lg:flex-row gap-6">
					<ReviewCard
						ReviewName="Amina K."
						ReviewText="ecommerce team cut settlement delays from days to minutes with Globpay automations"
					/>

					<ReviewCard
						ReviewName="Rafael S."
						ReviewText="fintech scale-up launched in 6 new markets thanks to instant stablecoin payouts"
					/>

					<ReviewCard
						ReviewName="Claire L."
						ReviewText="operations team reconciles crypto payments alongside card and bank data seamlessly"
					/>
				</div>

				<OpenSideBarBtn
					ButtonText="Talk To Sales"
					ClassNames="primary-btn px-6 py-4 rounded-full self-start mb-4 self-center"
				/>
			</div>
		</section>
	);
}

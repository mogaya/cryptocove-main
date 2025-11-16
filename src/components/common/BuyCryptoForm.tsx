import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import React from 'react';
import SidebarPopup from './SidebarPopup';
import OpenSideBarBtn from './OpenSideBarBtn';

export default function BuyCryptoForm() {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-3xl font-bold text-center mb-4">Accept Crypto Payments</h1>
			<p className="text-secondary text-center">
				Route customer payments into your Globpay merchant wallet or auto-convert to fiat with one click.
			</p>
			<div className="mb-4 flex text-secondary justify-between items-center rounded-2xl border-input bg-background px-4 py-3 text-sm">
				<span>Settlement Destination</span>
				<OpenSideBarBtn
					ButtonText="Configure"
					ClassNames="primary-btn px-6 py-2 rounded-full text-secondary2"
				/>
			</div>
			<button className="primary-btn self-center px-6 py-4 rounded-full">Generate Checkout Link</button>
		</div>
	);
}

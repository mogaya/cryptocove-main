import Market from '@/components/common/market/Market';

export default function Cryptocurrencies() {
	return (
		<main className="mx-auto flex-grow w-full">
			<div className="flex flex-col pt-32 bg-primary">
				<h1 className="font-bold text-4xl md:text-5xl leading-tight text-center mb-6">
					Rates & Networks
				</h1>
				<p className="text-center text-secondary">
					Monitor live pricing, liquidity, and network performance to keep every Globpay checkout in sync.
				</p>
				<Market isHomePage={false} />
			</div>
		</main>
	);
}

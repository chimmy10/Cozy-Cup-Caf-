import List from "./List";

function App() {
	return (
		<div className="bg-[#111315] min-h-screen relative pb-9">
			{/* Background Image */}
			<img src="/bg-cafe.jpg" className="h-80 md:h-64 w-full object-cover" />

			{/* List Component - Positioned Over the Image */}
			<div className="relative -mt-60 md:-mt-28 z-10">
				<List />
			</div>
		</div>
	);
}

export default App;

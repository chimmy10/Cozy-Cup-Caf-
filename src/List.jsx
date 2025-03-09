import { useDispatch, useSelector } from "react-redux";
import Available from "./Available";
import Item from "./Item";
import { setAllProducts, setAvailable } from "./Slice";

function List() {
	const allProducts = useSelector((state) => state.coffee.allProducts);
	const available = useSelector((state) => state.coffee.available);
	const dispatch = useDispatch();

	return (
		<div className="relative bg-[#1B1D1F] max-w-sm mx-auto border py-12 px-7 text-center rounded-xl overflow-hidden sm:max-w-md sm:px-12 md:max-w-xl lg:max-w-2xl xl:max-w-4xl lg:pt-20">
			<img
				src="/vector.svg"
				className="absolute top-0 right-17 lg:right-24 lg:top-7 object-contain opacity-50 pointer-events-none xl:right-40"
			/>

			<h1 className="text-[32px] mb-2 font-bold text-[#FEF7EE] relative z-10">
				Our Collection
			</h1>
			<p className="text-[14px] lg:mx-16 md:mx-7 xl:mx-36 font-semibold text-[#6F757C] relative z-10">
				Introducing our Coffee Collection, a selection of unique coffees from
				different roast types and origins, expertly roasted in small batches and
				shipped fresh weekly.
			</p>

			<div className="flex mt-5 justify-between items-center mx-9 relative z-10 md:justify-center md:gap-3">
				<button
					onClick={() => dispatch(setAllProducts())}
					className={`px-4 text-[14px] py-2 ${
						allProducts ? "bg-[#4D5562]" : ""
					} font-semibold text-[#FEF7EE] rounded-lg`}
				>
					All Products
				</button>
				<button
					onClick={() => dispatch(setAvailable())}
					className={`px-4 py-2 text-[14px] rounded-lg bg-[#1B1D1F] ${
						available ? "bg-[#4D5562]" : ""
					} font-semibold text-[#FEF7EE]`}
				>
					Available Now
				</button>
			</div>
			{allProducts ? <Item /> : <Available />}
		</div>
	);
}

export default List;

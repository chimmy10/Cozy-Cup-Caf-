import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "./Slice";
import { motion, AnimatePresence } from "framer-motion";

function Available() {
	const reveal = useSelector((state) => state.coffee.reveal);
	const loading = useSelector((state) => state.coffee.loading);
	const dispatch = useDispatch();

	useEffect(function () {
		setTimeout(() => {
			dispatch(setLoading(false)); // Stop loading after 1 second
		}, 1000);
	}, []);

	return (
		<>
			{!loading ? (
				<motion.div
					className="mt-9 md:grid md:grid-cols-2 xl:grid-cols-3"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					<AnimatePresence>
						{reveal
							.filter((s) => s.available)
							.map((s, index) => (
								<motion.div
									key={s.id}
									className="mb-8 mx-4"
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.95 }}
									transition={{
										duration: 0.3,
										delay: index * 0.1, // Staggered effect
									}}
								>
									<div>
										<div className="relative group">
											<img
												src={s.image}
												className="rounded-xl w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
											/>

											{s.popular && (
												<p className="absolute top-2 left-2 bg-[#F6C768] font-bold py-1 px-2 w-16 rounded-xl text-[10px] text-[#1B1D1F]">
													Popular
												</p>
											)}
										</div>

										<div className="flex justify-between mt-3 mb-2 items-center">
											<h1 className="text-[#FEF7EE] text-[16px] font-semibold">
												{s.name}
											</h1>
											<div className="bg-[#BEE3CC] rounded-md px-2 py-1 text-[12px] text-[#1B1D1F] font-semibold">
												{s.price}
											</div>
										</div>
										<div className="flex justify-between items-center">
											<div className="flex items-center gap-1">
												{s.rating !== null ? (
													<img src="/Star_fill.svg" className="mb-0.5" />
												) : (
													<img src="/Star.svg" className="mb-0.5" />
												)}
												{s.rating !== null ? (
													<p className="text-[#FEF7EE] font-semibold text-[14px]">
														{Number(s.rating)
															.toFixed(2)
															.replace(/(\.\d)0$/, "$1")}{" "}
														<span className="text-[#6F757C] text-[14px] font-semibold">
															({s.votes} votes)
														</span>
													</p>
												) : (
													<p className="text-[#6F757C] text-[14px] font-semibold">
														No ratings
													</p>
												)}
											</div>
										</div>
									</div>
								</motion.div>
							))}
					</AnimatePresence>
				</motion.div>
			) : (
				<div className="flex justify-center items-center h-20">
					<div className="animate-spin rounded-full h-10 w-10 border-4 border-[#F6C768] border-t-transparent"></div>
				</div>
			)}
		</>
	);
}

export default Available;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	reveal: [],
	allProducts: true,
	available: false,
	loading: true,
};

const coffeeSlice = createSlice({
	name: "coffee",
	initialState,
	reducers: {
		setReveal(state, action) {
			state.reveal = action.payload;
		},
		setAllProducts(state) {
			if (!state.allProducts) {
				state.allProducts = true;
				state.available = false;
				state.loading = true; // ✅ Only set loading when switching
			}
		},
		setAvailable(state) {
			if (!state.available) {
				state.allProducts = false;
				state.available = true;
				state.loading = true; // ✅ Only set loading when switching
			}
		},
		setLoading(state, action) {
			state.loading = action.payload;
		},
	},
});

export const { setReveal, setAvailable, setAllProducts, setLoading } =
	coffeeSlice.actions;
export default coffeeSlice.reducer;

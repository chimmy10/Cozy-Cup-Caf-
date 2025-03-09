import { configureStore } from "@reduxjs/toolkit";
import coffeeReducer from "./Slice";

export const store = configureStore({
	reducer: {
		coffee: coffeeReducer,
	},
});

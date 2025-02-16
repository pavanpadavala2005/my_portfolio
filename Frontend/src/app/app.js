import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "../provider/DataSlice";

export const store = configureStore({
	reducer: {
		data: DataSlice,
	},
});

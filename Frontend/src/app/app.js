import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../provider/DataSlice";
export const store = configureStore({
	reducer: {
		data: dataReducer,
	},
});

import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import dataSlice from "../provider/dataSlice";

export const store = configureStore({
	reducer: {
		data: dataSlice,
=======
import DataSlice from "../provider/DataSlice";

export const store = configureStore({
	reducer: {
		data: DataSlice,
>>>>>>> ba8c7a792208094dbbd1719798c48fef89533169
	},
});

import {
	createSlice,
	type Draft,
} from "@reduxjs/toolkit";

interface PageSpinnerState {
	isVisible: boolean;
}

const initialState: PageSpinnerState = {
	isVisible: false,
};

const pageSpinnerSlice = createSlice({
	initialState,
	name: "pageSpinner",
	reducers: {
		hideSpinner: (
			state: Draft<PageSpinnerState>,
		): void => {
			state.isVisible = false;
		},
		showSpinner: (
			state: Draft<PageSpinnerState>,
		): void => {
			state.isVisible = true;
		},
	},
});

const pageSpinnerReducer = pageSpinnerSlice.reducer;
const {
	showSpinner,
	hideSpinner,
} = pageSpinnerSlice.actions;

export {
	hideSpinner,
	pageSpinnerReducer,
	type PageSpinnerState,
	showSpinner,
};

import { createSlice } from "@reduxjs/toolkit";
import {
	addContact,
	deleteContact,
	fetchContacts,
	updateContact,
} from "./operations";
import { logout } from "../auth/operations";

const handlePending = (state) => {
	state.loading = true;
};

const handleRejected = (state, action) => {
	state.loading = false;
	state.error = action.payload;
};

const setSuccessState = (state) => {
	state.loading = false;
	state.error = null;
};

const contactsSlice = createSlice({
	name: "contacts",
	initialState: {
		items: [],
		loading: false,
		error: null,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchContacts.pending, handlePending)
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.items = action.payload;
				setSuccessState(state);
			})
			.addCase(fetchContacts.rejected, handleRejected)
			.addCase(addContact.pending, handlePending)
			.addCase(addContact.fulfilled, (state, action) => {
				state.items.push(action.payload);
				setSuccessState(state);
			})
			.addCase(addContact.rejected, handleRejected)
			.addCase(updateContact.pending, handlePending)
			.addCase(updateContact.fulfilled, (state, action) => {
				const index = state.items.findIndex(
					(contact) => contact.id === action.payload.id
				);

				if (index !== -1) {
					state.items[index] = action.payload;
				}
				setSuccessState(state);
			})
			.addCase(updateContact.rejected, handleRejected)
			.addCase(deleteContact.pending, handlePending)
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.items = state.items.filter(
					(task) => task.id !== action.payload.id
				);
				setSuccessState(state);
			})
			.addCase(deleteContact.rejected, handleRejected)
			.addCase(logout.fulfilled, (state) => {
				state.items = [];
				setSuccessState(state);
			});
	},
});

export default contactsSlice.reducer;
export const contactsReducer = contactsSlice.reducer;

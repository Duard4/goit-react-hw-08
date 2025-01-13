import { createSlice } from "@reduxjs/toolkit";
import {
	addContact,
	deleteContact,
	fetchContacts,
	updateContact,
} from "./operations";

const handlePending = (state) => {
	state.loading = true;
};

const handleRejected = (state, action) => {
	state.loading = false;
	state.error = action.payload;
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
				state.loading = false;
				state.error = null;
				state.items = action.payload;
				console.log(state.items);
			})
			.addCase(fetchContacts.rejected, handleRejected)
			.addCase(addContact.pending, handlePending)
			.addCase(addContact.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				state.items.push(action.payload);
			})
			.addCase(addContact.rejected, handleRejected)
			.addCase(updateContact.pending, handlePending)
			.addCase(updateContact.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				const index = state.items.findIndex(
					(contact) => contact.id === action.payload.id
				);

				if (index !== -1) {
					state.items[index] = action.payload;
				}
			})
			.addCase(updateContact.rejected, handleRejected)
			.addCase(deleteContact.pending, handlePending)
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				state.items = state.items.filter(
					(task) => task.id !== action.payload.id
				);
			})
			.addCase(deleteContact.rejected, handleRejected);
	},
});

export default contactsSlice.reducer;
export const contactsReducer = contactsSlice.reducer;

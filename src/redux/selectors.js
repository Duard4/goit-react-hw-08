import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectNameFilter = (state) => state.filters.name;

// export const selectVisibleContacts = (state) => {
// 	const contacts = selectContacts(state);
// 	const nameFilter = selectNameFilter(state);

// 	return contacts.filter((contact) =>
// 		contact.name.toLowerCase().includes(nameFilter.toLowerCase())
// 	);
// };

export const selectFilteredContacts = createSelector(
	[selectContacts, selectNameFilter],
	(contacts, nameFilter) =>
		contacts.filter((contact) =>
			contact.name.toLowerCase().includes(nameFilter.toLowerCase())
		)
);

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const performRequest = async (method, url, thunkAPI, postData = null) => {
	try {
		const { data } = await axios({ method, url, data: postData });
		return data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
};

export const fetchContacts = createAsyncThunk(
	"contacts/fetchAll",
	async (_, thunkAPI) => {
		return await performRequest("GET", "/contacts", thunkAPI);
	}
);

export const addContact = createAsyncThunk(
	"contacts/addContact",
	async (contact, thunkAPI) => {
		return await performRequest("POST", "/contacts", thunkAPI, contact);
	}
);

export const updateContact = createAsyncThunk(
	"contacts/updateContact",
	async (contact, thunkAPI) => {
		return await performRequest("PATCH", `/contacts/${contact.id}`, thunkAPI, {
			name: contact.name,
			number: contact.number,
		});
	}
);

export const deleteContact = createAsyncThunk(
	"contacts/deleteContact",
	async (contactId, thunkAPI) => {
		return await performRequest("DELETE", `/contacts/${contactId}`, thunkAPI);
	}
);

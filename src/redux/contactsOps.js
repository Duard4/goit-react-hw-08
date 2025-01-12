import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6782e01bc51d092c3dd110dc.mockapi.io/";

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

export const deleteContact = createAsyncThunk(
	"contacts/deleteContact",
	async (contactId, thunkAPI) => {
		return await performRequest("DELETE", `/contacts/${contactId}`, thunkAPI);
	}
);

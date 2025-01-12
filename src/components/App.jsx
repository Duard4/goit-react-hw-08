import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../redux/selectors";
import Loader from "./Loader/Loader";

export default function App() {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<>
			<h1>Phonebook</h1>
			{isLoading && <Loader />}
			{error && <p>{error}</p>}
			<ContactForm />
			<SearchBox />
			<ContactList />
		</>
	);
}

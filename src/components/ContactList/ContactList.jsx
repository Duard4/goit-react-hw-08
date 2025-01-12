import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
	const filteredContacts = useSelector(selectFilteredContacts);

	return (
		<ul className={css.contacList}>
			{filteredContacts.map((contact) => (
				<li key={contact.id}>
					<Contact contact={contact}></Contact>
				</li>
			))}
		</ul>
	);
};

export default ContactList;

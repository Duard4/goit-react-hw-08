import { CustomGrid } from "../components/MuiStyledComponents";
import {
	ContactForm,
	ContactList,
	SearchBox,
} from "../components/ContactsPageComponents";

const ContactsPage = () => {
	return (
		<CustomGrid>
			<ContactForm />
			<SearchBox />
			<ContactList />
		</CustomGrid>
	);
};

export default ContactsPage;

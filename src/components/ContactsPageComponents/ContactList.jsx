import Contact from "./Contact";
import { useDispatch, useSelector } from "react-redux";
import {
	selectFilteredContacts,
	selectIsLoading,
} from "../../redux/contacts/selectors";
import { Grid2, Typography } from "@mui/material";
import CustomBox from "../MuiStyledComponents/CustomBox";
import Loader from "../Loader";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactList = () => {
	const filteredContacts = useSelector(selectFilteredContacts);
	const dispatch = useDispatch();
	const isLoading = useSelector(selectIsLoading);

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<CustomBox boxShadow={3}>
			<Typography
				variant="h6"
				component="h2"
				sx={{
					bgcolor: "primary.main",
					color: "primary.contrastText",
					textAlign: "center",
					py: 2,
					borderRadius: 1,
				}}
			>
				Contact List
			</Typography>
			<Grid2
				container
				spacing={2}
				sx={{
					mt: 2,
					justifyContent: "center",
				}}
			>
				{isLoading ? (
					<Loader minHeight={190} />
				) : filteredContacts.length > 0 ? (
					filteredContacts.map((contact) => (
						<Grid2
							key={contact.id}
							xs={12}
							sm={6}
							md={4}
							lg={3}
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							<Contact contact={contact} />
						</Grid2>
					))
				) : (
					<Typography
						variant="body1"
						sx={{
							textAlign: "center",
							py: 3,
							color: "text.secondary",
							width: "100%",
						}}
					>
						No contacts found.
					</Typography>
				)}
			</Grid2>
		</CustomBox>
	);
};

export default ContactList;

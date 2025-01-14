import { List, Typography } from "@mui/material";
import CustomListItem from "../components/MuiStyledComponents/CustomListItem";

const HomePage = () => {
	return (
		<>
			<Typography
				variant="h2"
				component="h1"
				color="primary"
				sx={{ letterSpacing: 2, textAlign: "center" }}
			>
				Contact Book
			</Typography>
			<Typography
				variant="h5"
				component="h3"
				color="textSecondary"
				sx={{
					maxWidth: 800,
					mb: 4,
					fontSize: 20,
					letterSpacing: 1.5,
					textAlign: "center",
					mx: "auto",
				}}
			>
				Welcome to your personal contact management assistant!
			</Typography>
			<Typography
				variant="h5"
				color="textPrimary"
				gutterBottom
				sx={{ textAlign: "center" }}
			>
				Main Features:
			</Typography>
			<List
				component="ul"
				sx={{
					maxWidth: "600px",
					mx: "auto",
					display: "grid",
					gap: 2,
					p: 0,
				}}
			>
				<CustomListItem text="User registration and authorization" />
				<CustomListItem text="Adding, editing, and deleting contacts" />
				<CustomListItem text="Private contact collection for each user" />
				<CustomListItem text="Contact filtering by name or phone number" />
				<CustomListItem text="Automatic user state update on reload" />
			</List>
		</>
	);
};

export default HomePage;

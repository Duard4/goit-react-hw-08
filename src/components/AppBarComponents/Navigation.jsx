import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Navigation = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return (
		<Box sx={{ display: "flex", gap: { xs: 0.5, sm: 1 } }} component="nav">
			<Button
				component={NavLink}
				to="/"
				color="inherit"
				sx={{
					textTransform: "none",
					fontSize: "1rem",
					"&.active": { fontWeight: "bold", textDecoration: "underline" },
					"&:hover": {
						color: "error.main",
					},
				}}
			>
				Home
			</Button>
			{isLoggedIn && (
				<Button
					component={NavLink}
					to="/contacts"
					color="inherit"
					sx={{
						textTransform: "none",
						fontSize: "1rem",
						"&.active": { fontWeight: "bold", textDecoration: "underline" },
						"&:hover": {
							color: "error.main",
						},
					}}
				>
					Contacts
				</Button>
			)}
		</Box>
	);
};

export default Navigation;

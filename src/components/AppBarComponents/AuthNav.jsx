import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
	return (
		<Box sx={{ display: "flex", gap: 1 }}>
			<Button
				component={NavLink}
				to="/register"
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
				Register
			</Button>
			<Button
				component={NavLink}
				to="/login"
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
				Log In
			</Button>
		</Box>
	);
};

export default AuthNav;

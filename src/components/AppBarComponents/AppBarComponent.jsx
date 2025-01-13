import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const AppBarComponent = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return (
		<AppBar position="static" color="primary" component="header">
			<Toolbar>
				<Typography
					variant="h6"
					component="div"
					sx={{ flexGrow: 1, fontSize: { xs: 16, lg: 24 } }}
				>
					Contact Book
				</Typography>

				<Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
					<Navigation />
				</Box>

				{isLoggedIn ? <UserMenu /> : <AuthNav />}
			</Toolbar>
		</AppBar>
	);
};

export default AppBarComponent;

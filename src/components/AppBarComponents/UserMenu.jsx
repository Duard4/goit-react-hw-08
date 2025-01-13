import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { useMediaQuery } from "@mui/material";

const UserMenu = () => {
	const dispatch = useDispatch();
	const sm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<Button
			variant="outlined"
			color="primary"
			startIcon={<LogoutIcon />}
			onClick={() => dispatch(logout())}
			sx={{
				textTransform: "none",
				bgcolor: "white",
				borderColor: "primary",
				color: "primary",
				minWidth: { xs: "unset", sm: 64 },
				p: { xs: "2px 0 2px 6px", sm: "6px 12px" },
				"&:hover": {
					color: "error.main",
				},
			}}
		>
			{!sm && "Logout"}
		</Button>
	);
};

export default UserMenu;

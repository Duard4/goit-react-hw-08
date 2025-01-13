import { Box, CircularProgress } from "@mui/material";

const Loader = ({ minHeight = "calc(100vh - 64px)", ...rest }) => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexGrow: 1,
				minHeight: minHeight,
				marginInline: "auto",
				...rest,
			}}
		>
			<CircularProgress />
		</Box>
	);
};

export default Loader;

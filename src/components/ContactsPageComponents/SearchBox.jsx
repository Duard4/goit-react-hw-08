import { changeFilter } from "../../redux/filters/slice";
import { useDispatch } from "react-redux";
import { TextField, Typography } from "@mui/material";
import { Box } from "../MuiStyledComponents";

const SearchBox = () => {
	const dispatch = useDispatch();
	const handleFilterChange = (filter) => dispatch(changeFilter(filter));

	return (
		<Box maxWidth={"100%"}>
			<Typography
				variant="body1"
				component="p"
				color="text.secondary"
				mb={1}
				textAlign="center"
			>
				Find contacts by names
			</Typography>
			<TextField
				variant="outlined"
				fullWidth
				placeholder="Search..."
				onChange={(e) => handleFilterChange(e.target.value)}
				sx={{
					"& .MuiOutlinedInput-root": {
						borderRadius: 2,
					},
				}}
			/>
		</Box>
	);
};

export default SearchBox;

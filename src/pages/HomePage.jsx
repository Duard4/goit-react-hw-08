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
				Книга Контактів
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
				Ласкаво просимо до вашого персонального помічника з керування
				контактами!
			</Typography>
			<Typography
				variant="h5"
				color="textPrimary"
				gutterBottom
				sx={{ mb: 3, textAlign: "center" }}
			>
				Основні можливості:
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
				<CustomListItem text="Реєстрація та авторизація користувачів" />
				<CustomListItem text="Додавання, редагування та видалення контактів" />
				<CustomListItem text="Приватна колекція контактів для кожного користувача" />
				<CustomListItem text="Фільтрація контактів за ім'ям або номером телефону" />
				<CustomListItem text="Автоматичне оновлення стану користувача при перезавантаженні" />
			</List>
		</>
	);
};

export default HomePage;

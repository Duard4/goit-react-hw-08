import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@mui/material";
import "modern-normalize";
import "./index.css";
import App from "./App";
import customTheme from "./components/MuiStyledComponents/CustomTheme";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<ThemeProvider theme={customTheme}>
						<Toaster position="bottom-right" />
						<App />
					</ThemeProvider>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);

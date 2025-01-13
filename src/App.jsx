import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { RestrictedRoute, PrivateRoute } from "./components/routes";
import Layout from "./components/Layout";
import Loader from "./components/Loader";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const RegistrationPage = React.lazy(() => import("./pages/RegistrationPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const ContactsPage = React.lazy(() => import("./pages/ContactsPage"));

export default function App() {
	const dispatch = useDispatch();
	const isRefreshing = useSelector(selectIsRefreshing);

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	if (isRefreshing) return <Loader />;

	return (
		<Layout>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route
					path="/register"
					element={
						<RestrictedRoute
							redirectTo="/contacts"
							component={<RegistrationPage />}
						/>
					}
				/>
				<Route
					path="/login"
					element={
						<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
					}
				/>
				<Route
					path="/contacts"
					element={
						<PrivateRoute redirectTo="/login" component={<ContactsPage />} />
					}
				/>
			</Routes>
		</Layout>
	);
}

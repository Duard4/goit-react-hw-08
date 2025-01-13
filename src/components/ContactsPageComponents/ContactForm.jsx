import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { TextField, Button, Box, Typography } from "@mui/material";
import CustomBox from "../MuiStyledComponents/CustomBox";
import { contactValidationSchema } from "./../../services/validationSchemas";

const ContactForm = () => {
	const dispatch = useDispatch();

	const initialValues = {
		name: "",
		number: "",
	};

	const handleSubmit = (values, actions) => {
		dispatch(
			addContact({
				name: values.name,
				number: values.number,
			})
		);
		actions.resetForm();
	};

	const validationSchema = contactValidationSchema;

	return (
		<CustomBox p={3}>
			<Typography variant="h5" component="h1" textAlign="center" mb={2}>
				Add New Contact
			</Typography>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				{({ errors, touched, isSubmitting }) => (
					<Form>
						<Box mb={2}>
							<Field
								name="name"
								as={TextField}
								label="Name"
								variant="outlined"
								fullWidth
								error={touched.name && Boolean(errors.name)}
								helperText={touched.name && errors.name}
							/>
						</Box>
						<Box mb={2}>
							<Field
								name="number"
								as={TextField}
								label="Phone Number"
								variant="outlined"
								fullWidth
								error={touched.number && Boolean(errors.number)}
								helperText={touched.number && errors.number}
							/>
						</Box>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							fullWidth
							disabled={isSubmitting}
							sx={{ mt: 2 }}
						>
							{isSubmitting ? "Adding..." : "Add Contact"}
						</Button>
					</Form>
				)}
			</Formik>
		</CustomBox>
	);
};

export default ContactForm;

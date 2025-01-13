import { Box, IconButton, Divider } from "@mui/material";
import { FaUser, FaPhone } from "react-icons/fa";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import { Formik } from "formik";
import { useState } from "react";
import { contactValidationSchema } from "../../services/validationSchemas";
import CustomEditableField from "../MuiStyledComponents/CustomEditableField";

const Contact = ({ contact }) => {
	const { id, name, number } = contact;
	const dispatch = useDispatch();

	const [isEditingName, setIsEditingName] = useState(false);
	const [isEditingNumber, setIsEditingNumber] = useState(false);

	const handleDelete = () => {
		dispatch(deleteContact(id));
	};

	const handleUpdate = (field, newValue) => {
		if (contact[field] !== newValue) {
			dispatch(updateContact({ ...contact, [field]: newValue }));
		}
	};

	return (
		<Formik
			initialValues={{ name, number }}
			validationSchema={contactValidationSchema}
			onSubmit={(values) => console.log("Updated values:", values)}
		>
			{({ values, errors, touched, handleBlur, handleChange }) => (
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						p: 2,
						bgcolor: "background.paper",
						borderRadius: 2,
						boxShadow: 1,
						mb: 2,
					}}
				>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<CustomEditableField
							icon={FaUser}
							value={values.name}
							name="name"
							isEditing={isEditingName}
							setIsEditing={setIsEditingName}
							handleChange={handleChange}
							handleBlur={handleBlur}
							handleUpdate={handleUpdate}
							error={errors.name}
							touched={touched.name}
							placeholder="Enter name"
							iconStyle={{
								marginRight: "0.5rem",
								color: "grey",
							}}
						/>
						<Divider
							orientation="vertical"
							flexItem
							sx={{ mx: 1, bgcolor: "grey.300" }}
						/>
						<CustomEditableField
							icon={FaPhone}
							value={values.number}
							name="number"
							isEditing={isEditingNumber}
							setIsEditing={setIsEditingNumber}
							handleChange={handleChange}
							handleBlur={handleBlur}
							handleUpdate={handleUpdate}
							error={errors.number}
							touched={touched.number}
							placeholder="Enter phone number"
							iconStyle={{
								marginRight: "0.5rem",
								transform: "rotate(90deg)",
								color: "grey",
							}}
						/>
					</Box>
					<IconButton
						aria-label="delete contact"
						color="error"
						onClick={handleDelete}
					>
						<DeleteIcon />
					</IconButton>
				</Box>
			)}
		</Formik>
	);
};

export default Contact;

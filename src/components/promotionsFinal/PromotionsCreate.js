import React from 'react';
import {
	Create,
	SimpleForm,
	TextInput,
	ImageInput,
	ImageField,
	ReferenceInput,
	SelectInput,
	AutocompleteInput,
	required
} from 'react-admin';
import {useStyles} from './PromotionsStyles';

const PromotionsCreate = (props) => {
	const classes = useStyles();
	return (
		<Create {...props} title="Crear Promoción Abajo">
			<SimpleForm redirect="list">
				<ImageInput
					formClassName={classes.image}
					source="image"
					resource="promotionsFinal"
					accept="image/*"
					placeholder={<p>Drop your file here</p>}
					validate={required()}
				>
					<ImageField source="url" />
				</ImageInput>
				<ReferenceInput
					label="Subcategoría"
					source="subcategory"
					reference="subcategories"
				>
					<AutocompleteInput optionText="name" />
					{/* <SelectInput optionText="name" /> */}
				</ReferenceInput>
				<SelectInput
					label="Dueño"
					source="owner"
					choices={[
						{id: 'BARIA', name: 'Baria'},
						{id: 'ENCARGA', name: 'Encarga'}
					]}
				/>
			</SimpleForm>
		</Create>
	);
};
export default PromotionsCreate;

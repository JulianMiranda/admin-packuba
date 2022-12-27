import React from 'react';
import {
	Edit,
	TextInput,
	ImageInput,
	ImageField,
	SimpleForm,
	BooleanInput,
	ReferenceInput,
	AutocompleteInput,
	SelectInput
} from 'react-admin';
import {Grid} from '@material-ui/core';

const PromotionEdit = (props) => {
	return (
		<Edit {...props}>
			<SimpleForm redirect="list">
				<BooleanInput label="Vigente" source="status" />
				<ImageInput
					source="image"
					resource="promotions"
					accept="image/*"
					placeholder={<p>Drop your file here</p>}
				>
					<ImageField source="url" />
				</ImageInput>
				<ReferenceInput
					label="Subcategoría"
					source="subcategory.id"
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
		</Edit>
	);
};
export default PromotionEdit;

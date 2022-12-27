import React from 'react';
import {
	Create,
	SimpleForm,
	SelectInput,
	ImageInput,
	ImageField,
	required
} from 'react-admin';
import {useStyles} from './PromotionsStyles';

const PromotionsCreate = (props) => {
	const classes = useStyles();
	return (
		<Create {...props} title="Crear Promoción">
			<SimpleForm redirect="list">
				<ImageInput
					formClassName={classes.image}
					source="image"
					resource="promotions"
					accept="image/*"
					placeholder={<p>Drop your file here</p>}
					validate={required()}
				>
					<ImageField source="url" />
				</ImageInput>
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

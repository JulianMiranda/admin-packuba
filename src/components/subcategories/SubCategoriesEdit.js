import React, {useState} from 'react';
import {
	Edit,
	TextInput,
	ImageInput,
	ReferenceInput,
	ImageField,
	SelectInput,
	SimpleForm,
	NumberInput,
	BooleanInput,
	SelectArrayInput,
	required,
	ArrayInput,
	SimpleFormIterator
} from 'react-admin';
import {SubCategoriesTitle} from './SubCategoriesTitle';
import {makeStyles} from '@material-ui/core/styles'; /* 
import {ColorField, ColorInput} from 'react-admin-color-input'; */

export const styles = {
	first_name: {display: 'inline-block'},
	last_name: {display: 'inline-block', marginLeft: 32},
	t_name: {display: 'inline-block', marginLeft: 64},
	email: {width: 544},
	address: {maxWidth: 300},
	price: {display: 'inline-block', marginLeft: 32},
	currency: {display: 'inline-block', marginLeft: 32}
};

const useStyles = makeStyles(styles);

const SubCategoriesEdit = (props) => {
	const [index, setIndex] = useState(0);
	const classes = useStyles();
	return (
		<Edit {...props} title={<SubCategoriesTitle />}>
			<SimpleForm redirect="list">
				<ArrayInput source="description" label="Descripción">
					<SimpleFormIterator>
						<TextInput source="title" label="Título" />
						<TextInput source="content" label="Contenido" />
					</SimpleFormIterator>
				</ArrayInput>

				<TextInput
					label="Nombre"
					autoFocus
					formClassName={classes.first_name}
					fullWidth
					source="name"
					validate={required()}
				/>
				<ReferenceInput
					label="Categoría"
					fullWidth
					formClassName={classes.last_name}
					source="category.id"
					reference="categories"
					validate={required()}
				>
					<SelectInput source="name" />
				</ReferenceInput>
				<NumberInput
					formClassName={classes.price}
					label="Precio Unidad"
					source="price"
					min={1}
					step={0.5}
					validate={required()}
				/>
				<NumberInput
					formClassName={classes.price}
					label="Precio por mayor"
					source="priceGalore"
					min={1}
					step={0.5}
					validate={required()}
				/>
				<NumberInput
					formClassName={classes.price}
					label="Precio para Descuento"
					source="priceDiscount"
					min={0}
					step={0.5}
					validate={required()}
				/>
				<NumberInput
					formClassName={classes.price}
					label="Precio para Descuento por Mayor"
					source="priceGaloreDiscount"
					min={0}
					step={0.5}
					validate={required()}
				/>
				<SelectInput
					formClassName={classes.currency}
					source="currency"
					choices={[
						{id: 'USD', name: 'USD'},
						{id: 'CUP', name: 'CUP'}
					]}
				/>
				<BooleanInput
					label="Estado"
					formClassName={classes.t_name}
					source="status"
				/>
				<BooleanInput
					label="Agotada"
					formClassName={classes.t_name}
					source="soldOut"
				/>
				<NumberInput
					formClassName={classes.price}
					label="Peso en gramos"
					source="weight"
					min={1}
					step={1}
				/>
				<NumberInput
					formClassName={classes.price}
					label="Cantidad en stock"
					source="stock"
					min={1}
					step={1}
				/>
				<NumberInput
					formClassName={classes.price}
					label="Costo de compra"
					source="cost"
					min={0}
					step={0.25}
				/>

				<ArrayInput
					style={{margin: 15, minWidth: 120}}
					source="aviableColors"
					label="Colores"
				>
					<SimpleFormIterator>
						<TextInput label={`Color`} source={index} />
						{/* <ColorInput label={`Color`} source={index} /> */}
					</SimpleFormIterator>
				</ArrayInput>
				<ArrayInput
					style={{margin: 15, minWidth: 120}}
					source="aviableSizes"
					label="Tallas y Pesos"
				>
					<SimpleFormIterator>
						<SelectInput
							style={{margin: 15, minWidth: 120}}
							label="Talla"
							source="talla"
							choices={[
								{id: 'S', name: 'S'},
								{id: 'M', name: 'M'},
								{id: 'L', name: 'L'},
								{id: 'XL', name: 'XL'},
								{id: 'Talla Única', name: 'Talla Única'},
								{id: '0', name: '0'},
								{id: '1', name: '1'},
								{id: '2', name: '2'},
								{id: '3', name: '3'},
								{id: '4', name: '4'},
								{id: '5', name: '5'},
								{id: '6', name: '6'},
								{id: '7', name: '7'},
								{id: '8', name: '8'},
								{id: '9', name: '9'},
								{id: '10', name: '10'},
								{id: '11', name: '11'},
								{id: '12', name: '12'},
								{id: '13', name: '13'},
								{id: '14', name: '14'},
								{id: '15', name: '15'},
								{id: '16', name: '16'},
								{id: '17', name: '17'},
								{id: '18', name: '18'},
								{id: '19', name: '19'},
								{id: '20', name: '20'},
								{id: '21', name: '21'},
								{id: '22', name: '22'},
								{id: '23', name: '23'},
								{id: '24', name: '24'},
								{id: '25', name: '25'},
								{id: '26', name: '26'},
								{id: '27', name: '27'},
								{id: '28', name: '28'},
								{id: '29', name: '29'},
								{id: '30', name: '30'},
								{id: '31', name: '31'},
								{id: '32', name: '32'},
								{id: '33', name: '33'},
								{id: '34', name: '34'},
								{id: '35', name: '35'},
								{id: '36', name: '36'},
								{id: '37', name: '37'},
								{id: '38', name: '38'},
								{id: '39', name: '39'},
								{id: '40', name: '40'},
								{id: '41', name: '41'},
								{id: '42', name: '42'},
								{id: '43', name: '43'},
								{id: '44', name: '44'},
								{id: '45', name: '45'},
								{id: '46', name: '46'}
							]}
						/>
						<TextInput source="peso" label="Peso" />
					</SimpleFormIterator>
				</ArrayInput>
				<ImageInput
					formClassName={classes.address}
					source="images"
					resource="subcategories"
					accept="image/*"
					placeholder={<p>Drop your file here</p>}
					fullWidth
					multiple="true"
				>
					<ImageField source="url" />
				</ImageInput>
			</SimpleForm>
		</Edit>
	);
};
export default SubCategoriesEdit;

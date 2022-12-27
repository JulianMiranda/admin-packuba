import React, {useState} from 'react';

import {
	Create,
	TextInput,
	ImageInput,
	ImageField,
	ReferenceInput,
	SelectInput,
	NumberInput,
	SimpleForm,
	SelectArrayInput,
	AutocompleteArrayInput,
	ReferenceArrayInput,
	SimpleFormIterator,
	required,
	useCreate,
	useCreateSuggestionContext,
	ArrayInput
} from 'react-admin';
import {Grid} from '@material-ui/core';
import {
	Box,
	BoxProps,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	TextField
} from '@material-ui/core';
import LatLngInput from '../../common/description';
/* 
import {ColorField, ColorInput} from 'react-admin-color-input'; */

const SubCategoriesCreate = (props) => {
	const [index, setIndex] = useState(0);
	const tags = [
		{name: 'Tech', id: 'tech'},
		{name: 'Lifestyle', id: 'lifestyle'}
	];
	return (
		<>
			<Create {...props} title="Crear SubCategoría">
				<SimpleForm redirect="list">
					<Grid container style={{width: '100%'}} spacing={2}>
						<Grid item xs={12} sm={12}>
							<TextInput
								style={{margin: 15}}
								label="Nombre"
								autoFocus
								source="name"
								validate={required()}
							/>
							<ReferenceInput
								style={{margin: 15}}
								source="category"
								reference="categories"
								validate={required()}
							>
								<SelectInput source="name" />
							</ReferenceInput>
							<NumberInput
								style={{margin: 15}}
								label="Costo de compra"
								source="cost"
								min={0}
								step={0.25}
							/>
							<NumberInput
								style={{margin: 15}}
								label="Precio Unidad"
								source="price"
								min={1}
								step={0.5}
								validate={required()}
							/>
						</Grid>
						<Grid item xs={12} sm={12}>
							<NumberInput
								style={{margin: 15}}
								label="Precio por Mayor"
								source="priceGalore"
								min={1}
								step={0.5}
								validate={required()}
							/>
							<NumberInput
								style={{margin: 15}}
								label="Peso en gramos"
								source="weight"
								min={1}
								step={1}
							/>
							<NumberInput
								style={{margin: 15}}
								label="Cantidad en stock"
								source="stock"
								min={0}
								step={1}
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
						</Grid>
						<Grid item xs={12} sm={12}>
							<ArrayInput source="description" label="Descripción">
								<SimpleFormIterator>
									<TextInput source="title" label="Título" />
									<TextInput source="content" label="Contenido" />
								</SimpleFormIterator>
							</ArrayInput>
						</Grid>
						<ImageInput
							source="images"
							resource="subcategories"
							accept="image/*"
							placeholder={<p>Drop your file here</p>}
							multiple="true"
							fullWidth
							validate={required()}
						>
							<ImageField source="url" />
						</ImageInput>
					</Grid>
				</SimpleForm>
			</Create>
		</>
	);
};
const CreateTag = () => {
	const {filter, onCancel, onCreate} = useCreateSuggestionContext();
	const [value, setValue] = React.useState(filter || '');
	const [create] = useCreate('tags');

	const handleSubmit = (event) => {
		event.preventDefault();
		create(
			{
				payload: {
					data: {
						title: value
					}
				}
			},
			{
				onSuccess: ({data}) => {
					setValue('');
					onCreate(data);
				}
			}
		);
	};

	return (
		<Dialog open onClose={onCancel}>
			<form onSubmit={handleSubmit}>
				<DialogContent>
					<TextField
						label="New tag"
						value={value}
						onChange={(event) => setValue(event.target.value)}
						autoFocus
					/>
				</DialogContent>
				<DialogActions>
					<Button type="submit">Save</Button>
					<Button onClick={onCancel}>Cancel</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
};
export default SubCategoriesCreate;

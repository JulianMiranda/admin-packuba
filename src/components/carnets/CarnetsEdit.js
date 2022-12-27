import React, {useState} from 'react';
import {
	Edit,
	TextInput,
	SimpleForm,
	required,
	BooleanInput,
	ReferenceInput,
	AutocompleteInput,
	SelectInput
} from 'react-admin';
import {CarnetsTitle} from './CarnetsTitle';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import {provincias} from '../../util/provincias';

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

const CarnetsEdit = (props) => {
	const [index, setIndex] = useState(0);
	const classes = useStyles();

	const selectedProvincias = provincias.map((provincia) => {
		return {name: provincia.nombre, id: provincia.nombre};
	});
	const selectedMunicipios = []; /* 
	const allMun = provincias.map((provincia) => {...provincia.municipios}); */
	provincias.forEach((provincia) => {
		provincia.municipios.map((mun) =>
			selectedMunicipios.push({name: mun, id: mun})
		);
	});
	return (
		<Edit {...props} title={<CarnetsTitle />}>
			<SimpleForm redirect="list">
				<Grid container style={{width: '100%'}} spacing={2}>
					<Grid item xs={12} sm={12}>
						<BooleanInput style={{margin: 15}} label="Estado" source="status" />
						<ReferenceInput label="Usuario" source="user.id" reference="users">
							<AutocompleteInput optionText="name" />
							{/* <SelectInput optionText="name" /> */}
						</ReferenceInput>
						<TextInput
							style={{margin: 15}}
							label="Nombre"
							autoFocus
							source="name"
							validate={required()}
						/>
						<TextInput
							style={{margin: 15}}
							label="1 Apellido"
							source="firstLastName"
							validate={required()}
						/>
						<TextInput
							style={{margin: 15}}
							label="2 Apellido"
							source="secondLastName"
							validate={required()}
						/>

						<TextInput
							style={{margin: 15}}
							label="Num. Carnet"
							source="carnet"
							validate={required()}
						/>

						<TextInput
							style={{margin: 15}}
							label="Dirección"
							source="address"
							validate={required()}
						/>

						<TextInput
							style={{margin: 15}}
							label="Num. Casa"
							source="number"
							validate={required()}
						/>

						<TextInput
							style={{margin: 15}}
							label="1 entre Calle"
							source="firstAccross"
						/>

						<TextInput
							style={{margin: 15}}
							label="2 entre Calle"
							source="secondAccross"
						/>
						<TextInput
							style={{margin: 15}}
							label="Departamento"
							source="deparment"
						/>
						<TextInput style={{margin: 15}} label="Piso" source="floor" />
						<SelectInput
							style={{margin: 15, minWidth: 120}}
							label="Provincia"
							source="provincia"
							choices={selectedProvincias}
							validate={required()}
						/>
						<AutocompleteInput
							style={{margin: 15, minWidth: 120}}
							choices={selectedMunicipios}
							label="Municipio"
							source="municipio"
							validate={required()}
						/>
						<TextInput
							style={{margin: 15}}
							label="Teléfono"
							source="phoneNumber"
							validate={required()}
						/>
					</Grid>
				</Grid>
			</SimpleForm>
		</Edit>
	);
};
export default CarnetsEdit;

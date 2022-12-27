import React from 'react';

import {
	Create,
	TextInput,
	SimpleForm,
	ReferenceInput,
	AutocompleteInput,
	required,
	SelectInput
} from 'react-admin';
import {Grid} from '@material-ui/core';
import {provincias} from '../../util/provincias';
/* 
import {ColorField, ColorInput} from 'react-admin-color-input'; */

const CarnetsCreate = (props) => {
	const tags = [
		{name: 'Tech', id: 'tech'},
		{name: 'Lifestyle', id: 'lifestyle'}
	];
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
	console.log(selectedMunicipios);
	return (
		<>
			<Create {...props} title="Crear Carnet">
				<SimpleForm redirect="list">
					<Grid container style={{width: '100%'}} spacing={2}>
						<ReferenceInput label="Usuario" source="user" reference="users">
							<AutocompleteInput optionText="name" />
							{/* <SelectInput optionText="name" /> */}
						</ReferenceInput>

						<Grid item xs={12} sm={12}>
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
							{/* <TextInput
								style={{margin: 15}}
								label="Municipio"
								source="municipio"
								validate={required()}
							/> */}
							{/* <TextInput
								style={{margin: 15}}
								label="Provincia"
								source="provincia"
								validate={required()}
							/> */}
							<TextInput
								style={{margin: 15}}
								label="Teléfono"
								source="phoneNumber"
								validate={required()}
							/>
						</Grid>
					</Grid>
				</SimpleForm>
			</Create>
		</>
	);
};
export default CarnetsCreate;

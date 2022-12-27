import React from 'react';
import {
	Filter,
	AutocompleteInput,
	SearchInput,
	SelectInput,
	TextInput,
	ReferenceInput
} from 'react-admin';
import {provincias} from '../../util/provincias';

const CarnetsFilter = (props) => {
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
		<Filter {...props}>
			<SearchInput source="q" alwaysOn />
			<AutocompleteInput
				style={{margin: 15, minWidth: 120}}
				choices={selectedMunicipios}
				label="Municipio"
				source="municipio"
			/>
			<SelectInput
				style={{margin: 15, minWidth: 120}}
				label="Provincia"
				source="provincia"
				choices={selectedProvincias}
			/>
			<TextInput source="name" label="Nombre" />
			<TextInput source="carnet" label="Carnet" />
			<ReferenceInput
				label="Usuario"
				source="user"
				reference="users"
				sort={{field: 'id', order: 'ASC'}}
			>
				<AutocompleteInput source="name" />
			</ReferenceInput>
			{/* <SelectInput
				label="Descuento Unidad"
				source="priceDiscount"
				choices={[
					{id: '1', name: 'Con Descuento'},
					{id: '0', name: 'Sin Descuento'}
				]}
			/>
			<SelectInput
				label="Descuento por Mayor"
				source="priceGaloreDiscount"
				choices={[
					{id: '1', name: 'Con Descuento'},
					{id: '0', name: 'Sin Descuento'}
				]}
			/>
			<SelectInput
				label="Agotadas"
				source="soldOut"
				choices={[
					{id: '1', name: 'Agotadas'},
					{id: '0', name: 'No Agotadas'}
				]}
			/> */}
		</Filter>
	);
};
export default CarnetsFilter;

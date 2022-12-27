import React from 'react';
import {Filter, ReferenceInput, SearchInput, SelectInput} from 'react-admin';

const SubcategoryFilter = (props) => {
	return (
		<Filter {...props}>
			<SearchInput source="q" alwaysOn />
			<ReferenceInput
				label="Categoría"
				source="category"
				reference="categories"
				sort={{field: 'id', order: 'ASC'}}
			>
				<SelectInput source="name" />
			</ReferenceInput>
			<SelectInput
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
			/>
		</Filter>
	);
};
export default SubcategoryFilter;

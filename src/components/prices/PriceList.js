import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	SimpleList,
	NumberField,
	EditButton,
	FunctionField
} from 'react-admin';
import {CustomBoolean} from '../../common/fields/Boolean';
import {CustomDate} from '../../common/fields/Date';
import {useMediaQuery} from '@material-ui/core';

const PriceList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));

	return (
		<List
			{...props}
			title="Precios"
			sort={{field: 'createdAt', order: 'DESC'}}
			exporter={false}
		>
			{isSmall ? (
				<SimpleList primaryText={(record) => record.mn} />
			) : (
				<Datagrid rowClick="show">
					<FunctionField label="Precios" render={(record) => 'Precios'} />;
					<CustomDate label="Editado" source="updatedAt" />
					<EditButton label="Editar" />
					{/* <ArrayField source="car" label="Productos">
						<Datagrid>
							<NumberField source="cantidad" />
							
							<TextField label="Producto" source="subcategory.name" />
							<TextField label="Categoría" source="subcategory.category.name" />
						</Datagrid>
					</ArrayField> */}
					{/* <CustomBoolean label="Estado" source="status" />
					<CustomDate label="Creado" source="createdAt" />
					<CustomDate label="Editado" source="updatedAt" /> */}
					{/* <EditButton label="Editar" /> */}
				</Datagrid>
			)}
		</List>
	);
};
export default PriceList;

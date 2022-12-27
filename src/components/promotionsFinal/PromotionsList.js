import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	SimpleList,
	NumberField,
	EditButton,
	ImageField
} from 'react-admin';
import {CustomBoolean} from '../../common/fields/Boolean';
import {Filters} from './Filters';
import {CustomDate} from '../../common/fields/Date';
import {useMediaQuery} from '@material-ui/core';
import FullNameField from './FullNameField';

const PromotionsList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));

	return (
		<List
			{...props}
			title="Promociones"
			sort={{field: 'createdAt', order: 'DESC'}}
			filters={<Filters />}
			exporter={false}
		>
			{isSmall ? (
				<SimpleList primaryText={(record) => record.image.url} />
			) : (
				<Datagrid rowClick="show">
					<FullNameField {...props} size={50} />
					<TextField label={'Dueño'} source="owner" />
					<CustomBoolean label="Estado" source="status" />
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
export default PromotionsList;

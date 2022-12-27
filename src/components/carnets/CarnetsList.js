import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	EditButton,
	ReferenceField,
	SimpleList,
	NumberField
} from 'react-admin';
import {useMediaQuery} from '@material-ui/core';
import {CustomBoolean} from '../../common/fields/Boolean';
import Filters from './Filters';
import ImageField from '../products/ImageField';
import FullNameField from './FullNameField';

const CarnetsList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));
	return (
		<List
			{...props}
			title="SubCategorías"
			sort={{field: 'createdAt', order: 'DESC'}}
			filters={<Filters />}
			exporter={false}
		>
			{isSmall ? (
				<SimpleList
					linkType={'show'}
					primaryText={(record) => record.name}
					secondaryText={(record) => record.price}
				/>
			) : (
				<Datagrid rowClick="show">
					{/* <ImageField {...props} />
					<TextField label="Nombre" source="name" /> */}
					<FullNameField {...props} label="Nombre" />
					<TextField source="carnet" label="C.I." />
					<TextField source="user.phone" label="Usuario" />
					<TextField source="municipio" label="Municipio" />
					<TextField source="provincia" label="Provincia" />
					<CustomBoolean label="Estado" source="status" />
					{/* <CustomBoolean label="Agotada" source="soldOut" />
					<NumberField
						source="price"
						label="Unidad"
						options={{style: 'currency', currency: 'USD'}}
					/>
					<NumberField
						source="priceGalore"
						label="Por_mayor"
						options={{style: 'currency', currency: 'USD'}}
					/>
					<ReferenceField
						label="Categoría"
						source="category"
						reference="categories"
					>
						<TextField source="name" />
					</ReferenceField>
 */}
					{/* 	<NumberField
						source="priceDiscount"
						label="Desc_x_Unidad"
						options={{style: 'currency', currency: 'USD'}}
					/>
					<NumberField
						source="priceGaloreDiscount"
						label="Desc_x_Mayor"
						options={{style: 'currency', currency: 'USD'}}
					/>
 */}
					{/* <CustomDate label="Creado" source="createdAt" /> */}
					{/* <CustomDate label="Editado" source="updatedAt" /> */}
					<EditButton label="Editar" />
				</Datagrid>
			)}
		</List>
	);
};
export default CarnetsList;

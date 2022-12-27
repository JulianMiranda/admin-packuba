import React from 'react';
import {useShowController, Show, TabbedShowLayout, Tab} from 'react-admin';
import {
	Grid,
	CardContent,
	Card,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Avatar
} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';
import {formatToCurrency} from '../../util/formatToCurrency';
import {createLavelPeso} from '../../util/labelPeso';
import {discountGalore} from '../../util/discountGalore';
import {discount} from '../../util/discount';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
		marginTop: 20
	}
});
export const Carnets = ({selectedCarnet, totalPaqReCalc}) => {
	const classes = useStyles();
	console.log(selectedCarnet);

	return (
		<>
			<Card>
				<CardContent>
					<Grid item xs={12} style={{marginBottom: 20}}>
						Total de Paquetes para el envío: {totalPaqReCalc}
					</Grid>
					{selectedCarnet.map((carnet) => (
						<Grid
							container
							spacing={1}
							style={{marginBottom: 20, borderTop: '1px solid #ccc'}}
						>
							<Grid item xs={12}>
								Nombre: {carnet.name} {carnet.firstLastName}{' '}
								{carnet.secondLastName}
							</Grid>
							<Grid item xs={12}>
								CI: {carnet.carnet}
							</Grid>
							<Grid item xs={12}>
								Dirección: Calle {carnet.address} No. {carnet.number}{' '}
								{carnet.firstAccross && 'e/ ' + carnet.firstAccross}{' '}
								{carnet.secondAccross && 'y ' + carnet.secondAccross}
								{carnet.deparment && ' Departamento ' + carnet.deparment}
								{carnet.floor && ' Piso ' + carnet.floor}
							</Grid>
							<Grid item xs={6}>
								Municipio: {carnet.municipio}
							</Grid>
							<Grid item xs={6}>
								Provincia: {carnet.provincia}
							</Grid>
							<Grid item xs={12}>
								Teléfono: {carnet.phoneNumber}
							</Grid>
						</Grid>
					))}
				</CardContent>
			</Card>
		</>
	);
};

import React from 'react';
import {useShowController, ImageField, Show} from 'react-admin';
import {Typography, Grid, CardContent, Card} from '@material-ui/core';
import {CarnetsTitle} from './CarnetsTitle';
import {CustomBoolean} from '../../common/fields/Boolean';
import {useMediaQuery} from '@material-ui/core';
import {useStyles} from './CarnetsStyles';
/* 
import {ColorField, ColorInput} from 'react-admin-color-input'; */

const CarnetsShow = (props) => {
	const {record} = useShowController(props);
	const classes = useStyles();

	const isSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));
	if (!record) return null;
	console.log(record);
	return (
		<Show title={<CarnetsTitle />} {...props}>
			{isSmall ? (
				<Card>
					<CardContent>
						<Grid
							container
							spacing={1}
							style={{marginBottom: 20, borderTop: '1px solid #ccc'}}
						>
							<Grid item xs={12}>
								Usuario Asociado: {record.user.name} {record.user.phone}
							</Grid>
							<Grid item xs={12}>
								Nombre: {record.name} {record.firstLastName}{' '}
								{record.secondLastName}
							</Grid>
							<Grid item xs={12}>
								CI: {record.carnet}
							</Grid>
							<Grid item xs={12}>
								Dirección: Calle {record.address} No. {record.number}{' '}
								{record.firstAccross && 'e/ ' + record.firstAccross}{' '}
								{record.secondAccross && 'y ' + record.secondAccross}
								{record.deparment && ', Departamento ' + record.deparment}
								{record.floor && ', Piso ' + record.floor}
							</Grid>
							<Grid item xs={6}>
								Municipio: {record.municipio}
							</Grid>
							<Grid item xs={6}>
								Provincia: {record.provincia}
							</Grid>
							<Grid item xs={12}>
								Teléfono: {record.phoneNumber}
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			) : (
				<Card>
					<CardContent>
						<Grid
							container
							spacing={1}
							style={{marginBottom: 20, borderTop: '1px solid #ccc'}}
						>
							<Grid item xs={12}>
								Usuario Asociado: {record.user.name} {record.user.phone}
							</Grid>
							<Grid item xs={12}>
								Nombre: {record.name} {record.firstLastName}{' '}
								{record.secondLastName}
							</Grid>
							<Grid item xs={12}>
								CI: {record.carnet}
							</Grid>
							<Grid item xs={12}>
								Dirección: Calle {record.address} No. {record.number}{' '}
								{record.firstAccross && 'e/ ' + record.firstAccross}{' '}
								{record.secondAccross && 'y ' + record.secondAccross}
								{record.deparment && ', Departamento ' + record.deparment}
								{record.floor && ', Piso ' + record.floor}
							</Grid>
							<Grid item xs={6}>
								Municipio: {record.municipio}
							</Grid>
							<Grid item xs={6}>
								Provincia: {record.provincia}
							</Grid>
							<Grid item xs={12}>
								Teléfono: {record.phoneNumber}
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			)}
		</Show>
	);
};

export default CarnetsShow;

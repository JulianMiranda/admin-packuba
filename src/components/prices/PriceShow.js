import React from 'react';
import {useShowController, Show, ImageField} from 'react-admin';
import {Typography, Grid, CardContent, Card} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
		marginTop: 20
	}
});

const PriceShow = (props) => {
	const {record} = useShowController(props);
	const classes = useStyles();
	if (!record) return null;
	/* console.log(record.car); */

	return (
		<Show {...props}>
			<Card>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={12}>
							<Typography variant="h4" gutterBottom align="center">
								Tasa de cambio Paquetría MN: {record.rate}
							</Typography>

							<Typography variant="h4" gutterBottom align="center">
								Moneda Nacional: {record.mn}
							</Typography>

							<Typography variant="h4" gutterBottom align="center">
								MLC: {record.mlc}
							</Typography>
							<Typography variant="h4" gutterBottom align="center">
								Precio envío 1.5Kg: {record.oneandhalfkgPrice} $
							</Typography>
							<Typography variant="h4" gutterBottom align="center">
								Precio envío 2Kg: {record.twokgPrice} $
							</Typography>
							<Typography variant="h4" gutterBottom align="center">
								Precio envío 3Kg: {record.threekgPrice} $
							</Typography>
							<Typography variant="h4" gutterBottom align="center">
								Precio envío 4Kg: {record.fourkgPrice} $
							</Typography>
							<Typography variant="h4" gutterBottom align="center">
								Precio envío 5Kg: {record.fivekgPrice} $
							</Typography>
							<Typography variant="h4" gutterBottom align="center">
								Precio envío 6Kg: {record.sixkgPrice} $
							</Typography>
							<Typography variant="h4" gutterBottom align="center">
								Precio envío 7Kg: {record.sevenkgPrice} $
							</Typography>
							<Typography variant="h4" gutterBottom align="center">
								Precio envío 8Kg Antiguo: {record.eigthkgPrice} $
							</Typography>
							<Typography variant="h4" gutterBottom align="center">
								Precio envío 8Kg Actual: {record.eightkgPrice} $
							</Typography>
							<Typography variant="h4" gutterBottom align="center">
								Precio envío 9Kg: {record.ninekgPrice} $
							</Typography>
							<Typography variant="h4" gutterBottom align="center">
								Precio envío 10Kg: {record.tenkgPrice} $
							</Typography>
							<Typography variant="h4" gutterBottom align="center">
								Precio envío 11Kg: {record.elevenkgPrice} $
							</Typography>
							<Typography variant="h4" gutterBottom align="center">
								Precio envío 12Kg: {record.twelvekgPrice} $
							</Typography>
							<Typography variant="h4" gutterBottom align="center">
								Precio envío 13Kg: {record.thirteenkgPrice} $
							</Typography>
							<Typography variant="h4" gutterBottom align="center">
								Precio envío 14Kg: {record.fourteenkgPrice} $
							</Typography>
							<Typography variant="h4" gutterBottom align="center">
								Precio envío 15Kg: {record.fifteenkgPrice} $
							</Typography>
							<Typography variant="h4" gutterBottom align="center">
								Precio envío 16Kg: {record.sixteenkgPrice} $
							</Typography>
							<Typography variant="h4" gutterBottom align="center">
								Precio envío 17Kg: {record.seventeenkgPrice} $
							</Typography>
							<Typography variant="h4" gutterBottom align="center">
								Precio envío 18Kg: {record.eighteenkgPrice} $
							</Typography>
							<Typography variant="h4" gutterBottom align="center">
								Precio envío 19Kg: {record.nineteenkgPrice} $
							</Typography>
							<Typography variant="h4" gutterBottom align="center">
								Precio envío 20Kg: {record.twentykgPrice} $
							</Typography>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Show>
	);
};

export default PriceShow;

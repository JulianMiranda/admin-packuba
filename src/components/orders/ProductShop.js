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
export const ProductosShop = ({totalPaqReCalc, cantPaqOS, prices, car}) => {
	console.log('totalPaqReCalc', totalPaqReCalc);
	const classes = useStyles();
	const carLength = car.length;
	let TotalProducts = 0;
	let TotalPrice = 0;
	function createData(peso, paquete, envio, total) {
		TotalPrice += total;
		return {
			peso,
			paquete,
			envio,
			total
		};
	}

	function createDataProd(cant, name, precio, total) {
		TotalProducts += total;
		return {
			cant,
			name,
			precio,
			total
		};
	}

	const rowsEnvio = [];

	for (const cant in cantPaqOS) {
		if (cantPaqOS[cant] !== 0) {
			const row = createData(
				createLavelPeso(cant),
				cantPaqOS[cant],
				prices[cant],
				prices[cant] * cantPaqOS[cant]
			);
			rowsEnvio.push(row);
		}
	}

	const rowsProd = car.map((item) =>
		createDataProd(
			item.cantidad,
			item.subcategory.name,
			item.cantidad > 5 || totalPaqReCalc > 4
				? discountGalore(
						item.subcategory.priceGalore,
						item.subcategory.priceGaloreDiscount
				  )
				: discount(item.subcategory.price, item.subcategory.priceDiscount),

			item.cantidad > 5 || totalPaqReCalc > 4
				? discountGalore(
						item.subcategory.priceGalore,
						item.subcategory.priceGaloreDiscount
				  ) * item.cantidad
				: discount(item.subcategory.price, item.subcategory.priceDiscount) *
						item.cantidad
		)
	);

	return (
		<>
			<Card>
				<CardContent>
					<TableContainer component={Paper}>
						<Table
							className={classes.table}
							size="small"
							aria-label="a dense table"
						>
							<TableHead style={{backgroundColor: '#93d1ff'}}>
								<TableRow>
									<TableCell align="right">Cantidad</TableCell>
									<TableCell>Producto</TableCell>
									<TableCell align="right">Precio&nbsp;($)</TableCell>
									<TableCell align="right">Total&nbsp;($)</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rowsProd.map((row) => (
									<TableRow key={row.name}>
										<TableCell>{row.cant}</TableCell>
										<TableCell component="th" scope="row">
											{row.name}
										</TableCell>
										<TableCell align="right">
											{formatToCurrency(row.precio)}
										</TableCell>

										<TableCell align="right">
											{formatToCurrency(row.total)}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					<Grid
						container
						spacing={-8}
						style={{justifyContent: 'flex-end', marginBottom: 30}}
					>
						Productos: {formatToCurrency(TotalProducts)}
					</Grid>
					<TableContainer component={Paper}>
						<Table
							className={classes.table}
							size="small"
							aria-label="a dense table"
						>
							<TableHead style={{backgroundColor: '#93d1ff'}}>
								<TableRow>
									<TableCell>Peso Kg</TableCell>
									<TableCell>Paquetes</TableCell>
									<TableCell align="right">Envío</TableCell>
									<TableCell align="right">Total&nbsp;($)</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rowsEnvio.map((row) => (
									<TableRow key={row.peso}>
										<TableCell>{row.peso}</TableCell>
										<TableCell component="th" scope="row">
											{row.paquete}
										</TableCell>
										<TableCell align="right">
											{formatToCurrency(row.envio)}
										</TableCell>
										<TableCell align="right">
											{formatToCurrency(row.total)}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					<Grid
						container
						spacing={-8}
						style={{justifyContent: 'flex-end', marginBottom: 30}}
					>
						Envío: {formatToCurrency(TotalPrice)}
					</Grid>

					<Grid
						container
						spacing={-8}
						style={{
							justifyContent: 'flex-end',
							marginTop: 30,
							border: '1px solid #f23c3c',
							alignSelf: 'flex-end'
						}}
					>
						Total: {formatToCurrency(TotalPrice + TotalProducts)}
					</Grid>
				</CardContent>
			</Card>
		</>
	);
};

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
import {OrdersTitle} from './OrdersTitle';

import {makeStyles} from '@material-ui/core/styles';
import {discount} from '../../util/discount';
import {discountGalore} from '../../util/discountGalore';
import {ProductosShop} from './ProductShop';
import {Carnets} from './Carnets';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
		marginTop: 20
	}
});

const OrdersShow = (props) => {
	const {record} = useShowController(props);
	const classes = useStyles();
	if (!record) return null;
	/* console.log(record.car); */
	function createData(
		name,
		cantidad,
		precio,
		categ,
		total,
		images,
		aviableColors,
		aviableSizes
	) {
		return {
			name,
			cantidad,
			precio,
			categ,
			total,
			images,
			aviableColors,
			aviableSizes
		};
	}
	const carLength = record.car.length;
	const rows = record.car.map((item) =>
		createData(
			item.subcategory.name,
			item.cantidad,
			item.cantidad > 5 || record.totalPaqReCalc > 4
				? discountGalore(
						item.subcategory.priceGalore,
						item.subcategory.priceGaloreDiscount
				  )
				: discount(item.subcategory.price, item.subcategory.priceDiscount),
			item.subcategory.category.name,
			item.cantidad > 5 || record.totalPaqReCalc > 4
				? discountGalore(
						item.subcategory.priceGalore,
						item.subcategory.priceGaloreDiscount
				  ) * item.cantidad
				: discount(item.subcategory.price, item.subcategory.priceDiscount) *
						item.cantidad,
			item.subcategory.images,
			item.subcategory.aviableColors ? item.subcategory.aviableColors : [],
			item.subcategory.aviableSizes ? item.subcategory.aviableSizes : []
		)
	);

	var final = 0;
	for (const item of record.car) {
		if (item.cantidad > 5 || record.totalPaqReCalc > 4) {
			final +=
				discountGalore(
					item.subcategory.priceGalore,
					item.subcategory.priceGaloreDiscount
				) * item.cantidad;
		} else {
			final +=
				discount(item.subcategory.price, item.subcategory.priceDiscount) *
				item.cantidad;
		}
	}
	return (
		<Show title={<OrdersTitle />} {...props}>
			<TabbedShowLayout>
				<Tab label="Compra">
					<Card>
						<CardContent>
							<Grid container spacing={-8}>
								{record.user.name} - {record.user.phone}
							</Grid>
							<TableContainer component={Paper}>
								<Table
									className={classes.table}
									size="small"
									aria-label="a dense table"
								>
									<TableHead>
										<TableRow>
											<TableCell>Foto</TableCell>
											<TableCell>Producto</TableCell>
											<TableCell align="right">Cantidad</TableCell>
											<TableCell align="right">Precio&nbsp;($)</TableCell>
											<TableCell align="right">Categoría&nbsp;(g)</TableCell>
											<TableCell align="right">Colores&nbsp;(g)</TableCell>
											<TableCell align="right">Tallas&nbsp;(g)</TableCell>
											<TableCell align="right">Total&nbsp;($)</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{rows.map((row) => (
											<TableRow key={row.name}>
												<TableCell align="right">
													<Avatar
														src={row.images[0].url}
														style={{
															width: parseInt(25, 15),
															height: parseInt(25, 15)
														}}
													/>
												</TableCell>
												<TableCell component="th" scope="row">
													{row.name}
												</TableCell>
												<TableCell align="right">{row.cantidad}</TableCell>
												<TableCell align="right">{row.precio}</TableCell>
												<TableCell align="right">{row.categ}</TableCell>
												<TableCell>
													{/* <div
														style={{
															maxWidth: 100
														}}
													>
														{row.aviableColors.map((color) => 'C:' + color)}
													</div> */}
													<div
														style={{
															flexDirection: 'row',
															maxWidth: 100,
															display: 'flex',
															flexWrap: 'wrap',
															justifyContent: 'space-between'
														}}
													>
														{row.aviableColors.map((as, index) => (
															<div
																key={index}
																style={{
																	borderRadius: 50,
																	height: 10,
																	width: 10,
																	padding: 2,
																	border: '1px solid black',
																	backgroundColor: as
																}}
															/>
														))}
													</div>
												</TableCell>
												<TableCell align="right">
													{row.aviableSizes.map((size) => size.talla)}
												</TableCell>
												<TableCell align="right">{row.total}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>

							<div
								style={{
									textAlign: 'right',
									marginRight: 5,
									flex: 1,
									alignSelf: 'flex-end',
									marginTop: 10,
									fontSize: 22
								}}
							>
								Precio Final - ${final}
							</div>

							<div
								style={{
									flex: 1,
									marginTop: 20
								}}
							>
								Relleno:
								{record.relleno.noone && <p>Dejar como está</p>}
								{record.relleno.refresco && <p>Refrescos</p>}
								{record.relleno.maquina && <p>Máquinas</p>}
								{record.relleno.golosina && <p>Golosinas</p>}
								{record.relleno.plantilla && <p>Plantillas</p>}
								{record.relleno.lapicero && <p>Lapiceros</p>}
							</div>
						</CardContent>
					</Card>
				</Tab>
				<Tab label="Factura">
					<Grid container spacing={-8}>
						<ProductosShop
							totalPaqReCalc={record.totalPaqReCalc}
							cantPaqOS={record.cantPaqOS}
							prices={record.prices}
							car={record.car}
						/>
					</Grid>
				</Tab>
				<Tab label="Datos">
					<Grid container spacing={-8}>
						<Carnets
							selectedCarnet={record.selectedCarnet}
							totalPaqReCalc={record.totalPaqReCalc}
						/>
					</Grid>
				</Tab>
			</TabbedShowLayout>
		</Show>
	);
};

export default OrdersShow;

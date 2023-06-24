import React, {useState, useEffect} from 'react';
import {
	useMediaQuery,
	Container,
	FormControl,
	InputLabel,
	Input,
	Button
} from '@material-ui/core';
import apiPayment from '../../fetch/apiPayment';
import apiQR from '../../fetch/apiQR';
import base64 from 'base-64';

const Payment = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));
	const [payLink, setPayLink] = useState('');
	const [payQR, setPayQR] = useState('');
	const [user, setUser] = useState({
		id: 'user_id',
		email: '',
		name: '',
		last_name: ''
	});
	const [order, setOrder] = useState({
		dev_reference: 'baria',
		description: 'Product description',
		amount: 0,
		taxable_amount: 0,
		tax_percentage: 0,
		vat: 0,
		installments_type: 0,
		currency: 'USD'
	});
	const configuration = {
		partial_payment: true,
		expiration_days: 1,
		allowed_payment_methods: ['Card'],
		success_url: 'https://baria-home.web.app/',
		failure_url: 'https://failure-payment-baria.web.app',
		pending_url: 'https://failure-payment-baria.web.app',
		review_url: 'https://failure-payment-baria.web.app'
	};
	const changeUser = (target) => {
		setUser({...user, [target.name]: target.value});
	};
	const changeOrder = (target) => {
		setOrder({...order, [target.name]: target.value});
	};
	useEffect(() => {
		console.log('Usuario', user);
		console.log('Orden', order);
	}, [user, order]);

	const pressButton = async () => {
		try {
			const response = await apiPayment.post('/linktopay/init_order/', {
				user,
				order,
				configuration
			});
			console.log('Response', response.data.data.payment);
			setPayLink(response.data.data.payment.payment_url);
			setPayQR(response.data.data.payment.payment_qr);
			if (response.data.data && response.data.data.payment.payment_qr) {
				/* const responseQR = await apiQR.get(
					`/${response.data.data.payment.payment_qr}`
				); */
				/* console.log(
					'Response QR',
					base64().decode(response.data.data.payment.payment_qr)
				); */
			}
		} catch (error) {
			console.log('Error', error);
		}
	};
	return (
		<div>
			<div>
				<div>
					<h3>Generar Link de hago</h3>
				</div>
				<h4>Datos de usuario</h4>
				<div>
					<FormControl style={{margin: 20}}>
						<InputLabel>Nombre</InputLabel>
						<Input
							onChange={(event) => changeUser(event.target)}
							name="name"
							type="text"
							placeholder="Juan"
						/>
					</FormControl>
					<FormControl style={{margin: 20}}>
						<InputLabel>Apellido</InputLabel>
						<Input
							onChange={(event) => changeUser(event.target)}
							name="last_name"
							type="text"
							placeholder="Perez"
						/>
					</FormControl>
					<FormControl style={{margin: 20}}>
						<InputLabel>Correo</InputLabel>
						<Input
							onChange={(event) => changeUser(event.target)}
							name="email"
							type="text"
							placeholder="example@example.com"
						/>
					</FormControl>
					<FormControl style={{margin: 20}}>
						<InputLabel>Id</InputLabel>
						<Input
							onChange={(event) => changeUser(event.target)}
							name="id"
							type="text"
							placeholder="1758978545"
						/>
					</FormControl>
				</div>
				<h4>Datos de orden</h4>
				<div>
					<FormControl style={{margin: 20}}>
						<InputLabel>Descripción</InputLabel>
						<Input
							onChange={(event) => changeOrder(event.target)}
							name="description"
							type="text"
							placeholder="Venta de planta"
						/>
					</FormControl>
					<FormControl style={{margin: 20}}>
						<InputLabel>Total</InputLabel>
						<Input
							onChange={(event) => changeOrder(event.target)}
							name="amount"
							type="number"
							placeholder="15"
						/>
					</FormControl>
				</div>
				<div style={{margin: 20}}>
					<Button
						onClick={() => pressButton()}
						variant="contained"
						color="primary"
					>
						Generar pago
					</Button>
				</div>
			</div>

			<p>Link de pago:</p>
			<a href={payLink} target="_blank">
				{payLink}
			</a>
		</div>
	);
};
export default Payment;

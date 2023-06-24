import axios from 'axios';
import moment from 'moment';
import base64 from 'base-64';
import sha256 from 'js-sha256';

const baseURL = 'https://ccapi-stg.paymentez.com/v2/qr';

/* const NUVEISTGECCLIENT = 'rvpKAv2tc49x6YL38fvtv5jJxRRiPs';
const codeClient = 'NUVEISTG-EC-CLIENT'; */

const NUVEISTGECSERVER = 'G8vwvaASAZHQgoVuF2eKZyZF5hJmvx';
const codeServer = 'LINKTOPAY01-EC-SERVER';
const apiQR = axios.create({baseURL});

apiQR.interceptors.request.use(async (config) => {
	/*  const headers = await getHeaders();
  const token = headers.get('x-token'); */
	const unix_timestamp = moment().unix();
	console.log('unix_timestamp' + unix_timestamp);
	const uniq_token_string = `${NUVEISTGECSERVER}${unix_timestamp}`;
	const uniq_token_hash = await sha256(uniq_token_string);

	console.log('uniq_token_hash' + uniq_token_hash);

	const auth_token = base64.encode(
		codeServer + ';' + unix_timestamp + ';' + uniq_token_hash
	);

	console.log('token' + auth_token);

	config.headers = {
		'content-type': 'application/json',
		'Auth-Token': auth_token
	};

	return config;
});

export default apiQR;

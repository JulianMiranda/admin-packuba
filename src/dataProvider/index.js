/* eslint-disable import/no-anonymous-default-export */
import {fetchUtils} from 'react-admin';
import {getHeaders} from '../util/api';
import {PrepareEditObject} from '../util/prepareEditObject';
import {PrepareGetObject} from '../util/prepareGetObject';
import {PrepareCreateObject} from '../util/prepareCreateObject';
import {PrepareGetManyRef} from '../util/prepareGetManyRef';

/* const apiUrl = 'https://web-production-0643.up.railway.app/api'; */
/* const apiUrl = 'http://localhost:5001/api'; */
const apiUrl = 'https://bariaencargaadmin.com/api';
//const apiUrl = 'https://admin-firebase-backend.herokuapp.com/api';
const httpClient = fetchUtils.fetchJson;

export default {
	getList: async (resource, params) => {
		const query = await PrepareGetObject(resource, params);
		const headers = await getHeaders();
		if (resource === 'prices') {
			return httpClient(`${apiUrl}/${resource}/getPrices`, {
				method: 'Get',
				headers
			}).then(({json}) => {
				console.log(json, 'json');
				return {
					total: 1,
					data: [json.prices]
				};
			});
		}
		const module = resource === 'products' ? 'subcategories' : resource;
		return httpClient(`${apiUrl}/${module}/getList`, {
			method: 'POST',
			body: JSON.stringify(query),
			headers
		}).then(({json}) => {
			return {
				data: json.data,
				total: json.count
			};
		});
	},
	getMany: async (resource, params) => {
		const query = {
			getAll: 'true'
		};

		const headers = await getHeaders();
		const module = resource === 'products' ? 'subcategories' : resource;
		return httpClient(`${apiUrl}/${module}/getList`, {
			method: 'POST',
			body: JSON.stringify(query),
			headers
		}).then(({json}) => {
			return {
				data: json.data,
				total: json.count
			};
		});
	},
	getManyReference: async (resource, params) => {
		const query = await PrepareGetManyRef(resource, params);
		const headers = await getHeaders();
		const module = resource === 'products' ? 'subcategories' : resource;
		return httpClient(`${apiUrl}/${module}/getList`, {
			method: 'POST',
			body: JSON.stringify(query),
			headers
		}).then(({json}) => {
			return {
				data: json.data,
				total: json.count
			};
		});
	},

	getOne: async (resource, params) => {
		const headers = await getHeaders();

		const module = resource === 'products' ? 'subcategories' : resource;

		if (resource === 'prices') {
			return httpClient(`${apiUrl}/${resource}/getPrices`, {
				method: 'Get',
				headers
			}).then(({json}) => {
				console.log(json, 'json');
				return {
					data: json.prices
				};
			});
		}

		return httpClient(`${apiUrl}/${module}/getOne/${params.id}`, {
			headers
		}).then(({json}) => ({
			data: json
		}));
	},

	create: async (resource, params) => {
		const data = await PrepareCreateObject(resource, params);

		debugger;
		const headers = await getHeaders();

		return httpClient(`${apiUrl}/${resource}/create`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers
		}).then(({json}) => {
			return {
				data: {...json, id: json._id}
			};
		});
	},

	update: async (resource, params) => {
		const data = await PrepareEditObject(resource, params);
		if (!data) return {data: {}};
		const headers = await getHeaders();
		const module = resource === 'products' ? 'subcategories' : resource;

		if (resource === 'prices') {
			return httpClient(`${apiUrl}/${resource}/updatePrices`, {
				method: 'PUT',
				body: JSON.stringify(data),
				headers
			}).then(({json}) => ({data: {id: params.id}}));
		}
		return httpClient(`${apiUrl}/${module}/update/${params.id}`, {
			method: 'PUT',
			body: JSON.stringify(data),
			headers
		}).then(({json}) => ({data: {id: params.id}}));
	},

	delete: async (resource, params) => {
		const headers = await getHeaders();
		const module = resource === 'products' ? 'subcategories' : resource;
		httpClient(`${apiUrl}/${module}/delete/${params.id}`, {
			method: 'DELETE',
			headers
		}).then(({json}) => ({data: {id: params.id}}));
	}
};

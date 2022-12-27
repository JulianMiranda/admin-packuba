import {UploadImage} from '../aws/uploadImageAWS';

export const PrepareCreateObject = async (resource, params) => {
	if (resource === 'categories') return await categories(resource, params);
	else if (resource === 'subcategories') return subcategories(resource, params);
	else if (resource === 'carnets') return carnets(resource, params);
	else if (resource === 'promotions') return promotions(resource, params);
	else if (resource === 'promotionsFinal')
		return promotionsFinal(resource, params);

	return {};
};
const categories = async (resource, params) => {
	const object = {};
	object.name = params.data.name;
	const url = await UploadImage(resource, [params.data.image]);
	object.image = {url: url[0]};

	return object;
};
const subcategories = async (resource, params) => {
	const object = {};
	object.name = params.data.name;
	object.description = params.data.description;
	object.category = params.data.category;
	object.price = params.data.price;
	object.priceGalore = params.data.priceGalore;
	object.weight = params.data.weight;
	object.cost = params.data.cost;
	object.stock = params.data.stock;
	object.aviableSizes = params.data.aviableSizes;
	object.aviableColors = params.data.aviableColors;
	let urls = [];
	urls = await UploadImage(resource, params.data.images);

	object.images = urls.map((url) => ({
		url
	}));
	/* const url = await UploadImage(resource, [params.data.image]);
	object.image = {url: url[0]}; */

	return object;
};
const promotions = async (resource, params) => {
	const object = {};
	object.owner = params.data.owner;
	const url = await UploadImage(resource, [params.data.image]);
	object.image = {url: url[0]};

	return object;
};

const promotionsFinal = async (resource, params) => {
	const object = {};
	object.owner = params.data.owner;
	const url = await UploadImage(resource, [params.data.image]);
	object.image = {url: url[0]};

	object.subcategory = params.data.subcategory;
	console.log(object);
	return object;
};

const carnets = async (resource, params) => {
	const object = {};

	console.log(params.data);

	debugger;

	object.name = params.data.name;
	object.user = params.data.user;
	object.firstLastName = params.data.firstLastName;
	object.secondLastName = params.data.secondLastName;
	object.carnet = params.data.carnet;
	object.address = params.data.address;
	object.number = params.data.number;
	object.firstAccross = params.data.firstAccross;
	object.secondAccross = params.data.secondAccross;
	object.deparment = params.data.deparment;
	object.municipio = params.data.municipio;
	object.provincia = params.data.provincia;
	object.phoneNumber = params.data.phoneNumber;
	object.floor = params.data.floor;

	console.log('object', object);

	return object;
};

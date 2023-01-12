import {UploadImage} from '../aws/uploadImageAWS';

export const PrepareEditObject = async (resource, params) => {
	const {data, previousData} = params;
	if (resource === 'users') return await user(resource, data, previousData);
	else if (resource === 'categories')
		return category(resource, data, previousData);
	else if (resource === 'subcategories')
		return subcategory(resource, data, previousData);
	else if (resource === 'products')
		return product(resource, data, previousData);
	else if (resource === 'orders') return orders(resource, data, previousData);
	else if (resource === 'promotions')
		return promotions(resource, data, previousData);
	else if (resource === 'promotionsFinal')
		return promotionsFinal(resource, data, previousData);
	else if (resource === 'prices') return prices(resource, data, previousData);
	else if (resource === 'carnets') return carnets(resource, data, previousData);
	return {};
};

const user = async (resource, data, previousData) => {
	const object = {};

	if (data.name !== previousData.name) {
		object.name = data.name;
	}
	if (data.email !== previousData.email) {
		object.email = data.email;
	}
	if (data.role !== previousData.role) {
		object.role = data.role;
	}
	/* if (!data.image.id) {
		const url = await UploadImage(resource, [data.image]);
		object.image = {url: url[0]};
	} */
	if (data.status !== previousData.status) {
		object.status = data.status;
	}

	if (JSON.stringify(object) === '{}') return null;

	return object;
};

const orders = async (resource, data, previousData) => {
	const object = {};

	if (data.status !== previousData.status) {
		object.status = data.status;
	}

	if (JSON.stringify(object) === '{}') return null;

	return object;
};

const category = async (resource, data, previousData) => {
	const object = {};

	if (data.name !== previousData.name) {
		object.name = data.name;
	}
	if (!data.image.id) {
		const url = await UploadImage(resource, [data.image]);
		object.image = {url: url[0]};
	}
	if (data.status !== previousData.status) {
		object.status = data.status;
	}

	return object;
};

const promotions = async (resource, data, previousData) => {
	const object = {};

	if (!data.image.id) {
		const url = await UploadImage(resource, [data.image]);
		object.image = {url: url[0]};
	}
	if (data.status !== previousData.status) {
		object.status = data.status;
	}

	if (data.owner !== previousData.owner) {
		object.owner = data.owner;
	}

	return object;
};

const promotionsFinal = async (resource, data, previousData) => {
	const object = {};
	const object2 = {};
	console.log('data', data);
	console.log('previousData', previousData);

	if (!data.image.id) {
		const url = await UploadImage(resource, [data.image]);
		object.image = {url: url[0]};
	}
	if (data.status !== previousData.status) {
		object.status = data.status;
	}

	if (data.owner !== previousData.owner) {
		object.owner = data.owner;
	}
	if (data.subcategory !== previousData.subcategory) {
		object.subcategory = data.subcategory.id;
	}

	console.log('object', object2);
	debugger;
	return object;
};

const prices = async (resource, data, previousData) => {
	const object = {};

	if (data.rate !== previousData.rate) {
		object.rate = data.rate;
	}
	if (data.mn !== previousData.mn) {
		object.mn = data.mn;
	}

	if (data.mlc !== previousData.mlc) {
		object.mlc = data.mlc;
	}

	if (data.oneandhalfkgPrice !== previousData.oneandhalfkgPrice) {
		object.oneandhalfkgPrice = data.oneandhalfkgPrice;
	}

	if (data.twokgPrice !== previousData.twokgPrice) {
		object.twokgPrice = data.twokgPrice;
	}

	if (data.threekgPrice !== previousData.threekgPrice) {
		object.threekgPrice = data.threekgPrice;
	}

	if (data.fourkgPrice !== previousData.fourkgPrice) {
		object.fourkgPrice = data.fourkgPrice;
	}
	if (data.fivekgPrice !== previousData.fivekgPrice) {
		object.fivekgPrice = data.fivekgPrice;
	}
	if (data.sixkgPrice !== previousData.sixkgPrice) {
		object.sixkgPrice = data.sixkgPrice;
	}
	if (data.sevenkgPrice !== previousData.sevenkgPrice) {
		object.sevenkgPrice = data.sevenkgPrice;
	}

	if (data.eightkgPrice !== previousData.eightkgPrice) {
		object.eightkgPrice = data.eightkgPrice;
	}
	if (data.eigthkgPrice !== previousData.eigthkgPrice) {
		object.eigthkgPrice = data.eigthkgPrice;
	}
	if (data.ninekgPrice !== previousData.ninekgPrice) {
		object.ninekgPrice = data.ninekgPrice;
	}
	if (data.tenkgPrice !== previousData.tenkgPrice) {
		object.tenkgPrice = data.tenkgPrice;
	}
	if (data.elevenkgPrice !== previousData.elevenkgPrice) {
		object.elevenkgPrice = data.elevenkgPrice;
	}
	if (data.twelvekgPrice !== previousData.twelvekgPrice) {
		object.twelvekgPrice = data.twelvekgPrice;
	}
	if (data.thirteenkgPrice !== previousData.thirteenkgPrice) {
		object.thirteenkgPrice = data.thirteenkgPrice;
	}
	if (data.fourteenkgPrice !== previousData.fourteenkgPrice) {
		object.fourteenkgPrice = data.fourteenkgPrice;
	}
	if (data.fifteenkgPrice !== previousData.fifteenkgPrice) {
		object.fifteenkgPrice = data.fifteenkgPrice;
	}
	if (data.sixteenkgPrice !== previousData.sixteenkgPrice) {
		object.sixteenkgPrice = data.sixteenkgPrice;
	}
	if (data.seventeenkgPrice !== previousData.seventeenkgPrice) {
		object.seventeenkgPrice = data.seventeenkgPrice;
	}
	if (data.eighteenkgPrice !== previousData.eighteenkgPrice) {
		object.eighteenkgPrice = data.eighteenkgPrice;
	}
	if (data.nineteenkgPrice !== previousData.nineteenkgPrice) {
		object.nineteenkgPrice = data.nineteenkgPrice;
	}
	if (data.twentykgPrice !== previousData.twentykgPrice) {
		object.twentykgPrice = data.twentykgPrice;
	}

	return object;
};
const product = async (resource, data, previousData) => {
	const object = {};

	if (data.value !== previousData.value) {
		object.value = data.value;
	}

	return object;
};
const subcategory = async (resource, data, previousData) => {
	const object = {};

	if (data.name !== previousData.name) {
		object.name = data.name;
	}
	if (data.soldOut !== previousData.soldOut) {
		object.soldOut = data.soldOut;
	}
	if (data.price !== previousData.price) {
		object.price = data.price;
	}
	if (data.priceDiscount !== previousData.priceDiscount) {
		object.priceDiscount = data.priceDiscount;
	}
	if (data.cost !== previousData.cost) {
		object.cost = data.cost;
	}
	if (data.stock !== previousData.stock) {
		object.stock = data.stock;
	}
	if (data.aviableSizes !== previousData.aviableSizes) {
		object.aviableSizes = data.aviableSizes;
	}
	if (data.description !== previousData.description) {
		object.description = data.description;
	}
	if (data.priceGalore !== previousData.priceGalore) {
		object.priceGalore = data.priceGalore;
	}
	if (data.priceGaloreDiscount !== previousData.priceGaloreDiscount) {
		object.priceGaloreDiscount = data.priceGaloreDiscount;
	}
	if (data.weight !== previousData.weight) {
		object.weight = data.weight;
	}
	if (data.currency !== previousData.currency) {
		object.currency = data.currency;
	}
	if (data.status !== previousData.status) {
		object.status = data.status;
	}
	if (data.category.id !== previousData.category.id) {
		object.category = data.category.id;
	}

	if (data.aviableColors !== previousData.aviableColors) {
		console.log(data.aviableColors);
		object.aviableColors = data.aviableColors;
		console.log(object);
	}
	debugger;
	if (data.images && data.images.length > 0) {
		let urls = [];

		const addImages = data.images.filter((image) => !image.id);
		if (addImages.length > 0) {
			urls = await UploadImage(resource, addImages);
		}

		if (urls.length > 0) {
			object.images = urls.map((url) => ({
				url
			}));
		}

		const deleteImages = previousData.images
			.filter(
				(x) =>
					!data.images
						.filter((image) => image.id)
						.map((x) => x.id)
						.includes(x.id)
			)
			.map((image) => image.id);

		if (deleteImages.length > 0) object.deleteImages = deleteImages;
	}
	return object;
};

const carnets = async (resource, data, previousData) => {
	const object = {};

	if (data.name !== previousData.name) {
		object.name = data.name;
	}
	if (data.firstLastName !== previousData.firstLastName) {
		object.firstLastName = data.firstLastName;
	}
	if (data.secondLastName !== previousData.secondLastName) {
		object.secondLastName = data.secondLastName;
	}
	if (data.phoneNumber !== previousData.phoneNumber) {
		object.phoneNumber = data.phoneNumber;
	}
	if (data.carnet !== previousData.carnet) {
		object.carnet = data.carnet;
	}
	if (data.address !== previousData.address) {
		object.address = data.address;
	}
	if (data.number !== previousData.number) {
		object.number = data.number;
	}
	if (data.firstAccross !== previousData.firstAccross) {
		object.firstAccross = data.firstAccross;
	}
	if (data.secondAccross !== previousData.secondAccross) {
		object.secondAccross = data.secondAccross;
	}
	if (data.deparment !== previousData.deparment) {
		object.deparment = data.deparment;
	}
	if (data.municipio !== previousData.municipio) {
		object.municipio = data.municipio;
	}
	if (data.provincia !== previousData.provincia) {
		object.provincia = data.provincia;
	}
	if (data.status !== previousData.status) {
		object.status = data.status;
	}
	if (data.user.id !== previousData.user.id) {
		object.user = data.user.id;
	}
	if (data.floor !== previousData.floor) {
		object.floor = data.floor;
	}

	return object;
};

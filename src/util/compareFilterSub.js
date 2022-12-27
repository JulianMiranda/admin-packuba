export const compareFilterSub = async (filter) => {
	if (JSON.stringify(filter) === '{}') return null;
	else {
		const object = {};

		if (filter.priceDiscount) {
			object.priceDiscount = [filter.priceDiscount === '0' ? '=' : '>', 0];
		}
		if (filter.category) {
			object.category = ['=', `${filter.category}`];
		}
		if (filter.priceGaloreDiscount) {
			object.priceGaloreDiscount = [
				filter.priceGaloreDiscount === '0' ? '=' : '>',
				0
			];
		}
		if (filter.soldOut) {
			object.soldOut = ['=', filter.soldOut === '0' ? false : true];
		}
		console.log(object);
		return object;
	}
};

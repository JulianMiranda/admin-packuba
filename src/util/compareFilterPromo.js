export const compareFilterPromo = async (filter) => {
	if (JSON.stringify(filter) === '{}') return null;
	else {
		const object = {};

		if (filter.owner) {
			object.owner = ['=', `${filter.owner}`];
		}
		/* if (typeof filter.status === 'boolean') {
			object.status = ['=', `${filter.status}`];
		} */
		console.log(object);
		return object;
	}
};

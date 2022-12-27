export const compareFilterCarnets = async (filter) => {
	if (JSON.stringify(filter) === '{}') return null;
	else {
		console.log(filter);
		const object = {};
		if (filter.provincia) {
			object.provincia = ['=', `${filter.provincia}`];
		}
		if (filter.municipio) {
			object.municipio = ['=', `${filter.municipio}`];
		}
		if (filter.name) {
			object.name = ['=', `${filter.name}`];
		}
		if (filter.carnet) {
			object.carnet = ['=', `${filter.carnet}`];
		}
		if (filter.user) {
			object.user = ['=', `${filter.user}`];
		}
		return object;
	}
};

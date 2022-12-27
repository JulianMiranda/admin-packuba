export const formatToCurrency = (amount) => {
	return '$' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

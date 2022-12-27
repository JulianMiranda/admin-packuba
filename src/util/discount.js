export const discount = (price, priceDiscount = 0) => {
	if (priceDiscount && priceDiscount !== 0) {
		return priceDiscount;
	} else {
		return price;
	}
};

export const discountGalore = (priceGalore, priceGaloreDiscount = 0) => {
	if (priceGaloreDiscount && priceGaloreDiscount !== 0) {
		return priceGaloreDiscount;
	} else {
		return priceGalore;
	}
};

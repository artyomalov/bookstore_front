const getPriceForAddToCartButton = (
  hardcoverQuantity: number,
  paperbackQuantity: number,
  paperbackPrice: number,
  hardcoverPrice: number
): number | null => {
  let price: number | null = 0;
  if (hardcoverQuantity > 0) {
    price = hardcoverPrice;
  } else if (hardcoverQuantity === 0 && paperbackQuantity !== 0) {
    price = paperbackPrice;
  } else price = null;

  return price;
};

export default getPriceForAddToCartButton;

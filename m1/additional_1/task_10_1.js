function getTotalPriceOfShoppingBag(shoppingBagArray, count) {
  return shoppingBagArray
    .reduce((total, row) => {
      const { productId, count } = row;
      const { price, discount } = groceries[productId];
      return total + count * price * (1 - discount / 100);
    }, 0)
    .toFixed(2);
}

const groceries = {
  "73Wakv": {
    name: "Orange Juice",
    price: 1.5,
    discount: 10,
  },
  "5L3db9": {
    name: "Chocolate",
    price: 2,
    discount: 0,
  },
  // more items...
};

const shoppingBag = [
  { productId: "73Wakv", count: 3 },
  { productId: "5L3db9", count: 23 },
];

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log("totalPrice", totalPrice);

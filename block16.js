// given variables budget and gift amount
// add gift prices
//subtract gift prices budget
// if budget is equal to price of gift return true
// if budget is not equal to price of gift return false

const budget = 50;
const gift = {
  price1: 20,
  price2: 25,
};
function sumOfGifts(price1, price2) {
  return gift.price1 + gift.price2;
}

const giftTotal = sumOfGifts(gift.price1, gift.price2);

function addTax(giftTotal) {
  return giftTotal + giftTotal * 0.08;
}
const giftWithTax = addTax(giftTotal);

function holidayShopping(budget, giftWithTax) {
  return budget > giftWithTax;
}
console.log(holidayShopping(budget, giftWithTax));

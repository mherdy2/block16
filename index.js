// If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
// If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
// At the end of the script, you should return and log the string "Your grand total is ${finalAmount}."
const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};
// const sarah = {
//   prescription: "diphenhydramine",
//   pricePerRefill: 50,
//   refills: 1,
//   subscription: true,
//   coupon: false,
// };

// const rocky = {
//   prescription: "phenylephrine",
//   pricePerRefill: 30,
//   refills: 5,
//   subscription: true,
//   coupon: true,
// };

function totalPrice(pricePerRefill, refills) {
  return pricePerRefill * refills;
}
const totalAmount = totalPrice(timmy.pricePerRefill, timmy.refills);

function addDiscounts(totalAmount) {
  if (timmy.subscription === true) {
    return totalAmount - totalAmount * 0.25;
  } else if (timmy.coupon === true) {
    return totalAmount - 10;
  }
}
const finalAmount = addDiscounts(totalAmount);
console.log("Your Grand Total is", finalAmount);

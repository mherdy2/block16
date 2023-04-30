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
// timmy's discount prescription is "acetaminophen"
function timmyDiscount(pricePerRefill, refills) {
  return timmy.pricePerRefill * timmy.refills;
  const totalRefills = pricePerRefill * refills;
}
if (timmy.subscription === true) {
  return totalRefills - totalRefills * 0.25;
} else if (timmy.coupon === true) {
  return totalRefills - 10;
}
const appliedDiscount = timmyDiscount(timmy.pricePerRefill, timmy.refills);
console.log(appliedDiscount);
// console.log(timmyDiscount(timmy.pricePerRefill, timmy.refills));

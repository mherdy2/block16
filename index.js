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
const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};
const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

// timmy's discount prescription is "acetaminophen"

function subscriptionDiscount(timmy, sarah, rocky) {
  const discount = timmy.pricePerRefill * timmy.refills;
  if (timmy.subscription) {
    return discount + sarah.pricePerRefill * sarah.refills;
  } else {
    return discount + rocky.pricePerRefill * rocky.refills;
  }
}

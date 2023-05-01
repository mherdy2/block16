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
  subscription: false,
  coupon: false,
};

// declaring variables for discounts
let x = 0.25;
let y = 10;

// create a function that calculates the total price of prescription
function totalPrice(pricePerRefill, refills) {
  return pricePerRefill * refills;
}
const totalAmount = totalPrice(rocky.pricePerRefill, rocky.refills);

// create a function that adds the subscription/coupon discount to the total amount using if/else statements
function addDiscounts(totalAmount) {
  if (rocky.subscription === true && rocky.coupon === true) {
    return totalAmount - (totalAmount * [x] + y);
  } else if (rocky.subscription === true) {
    return totalAmount - totalAmount * x;
  } else if (rocky.coupon === true) {
    return totalAmount - y;
  } else {
    return totalAmount;
  }
}
const finalAmount = addDiscounts(totalAmount);
console.log("Your Grand Total is", finalAmount);

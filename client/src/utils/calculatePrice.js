import { BREAD, SAUCES, TOPPINGS } from "./sandwichData";

export function calculatePrice({ bread, sauces, toppings }, prices) {
  const breadPrice = BREAD[bread].price;
  const saucesPrice = sauces.reduce(
    (price, sauce) => price + SAUCES[sauce].price,
    0
  );
  const toppingsPrice = toppings.reduce(
    (price, topping) => price + TOPPINGS[topping].price,
    0
  );

  return breadPrice + saucesPrice + toppingsPrice;
}

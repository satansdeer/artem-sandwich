import { BREAD } from "./sandwichData";

export function calculatePrice(bread, selectedToppings, toppingsData) {
  const breadPrice = BREAD[bread].price;
  const toppingsPrice = selectedToppings.reduce((price, topping) => {
    const toppingData = toppingsData.find(t => t.slug === topping)
    return price + toppingData.price;
  }, 0);

  return breadPrice + toppingsPrice;
}

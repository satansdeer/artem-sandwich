import { calculatePrice } from "./calculatePrice";
import { BREAD, SAUCES, TOPPINGS } from "./sandwichData";

export const SandwichPreview = ({ sandwich }) => {
  return (
    <>
      <p>Хлеб: {BREAD[sandwich.bread].name}</p>
      <p>
        Соусы: {sandwich.sauces.map((sauce) => SAUCES[sauce].name).join(", ")}
      </p>
      <p>
        Топпинги:{" "}
        {sandwich.toppings.map((topping) => TOPPINGS[topping].name).join(", ")}
      </p>
      <p>Цена: {calculatePrice(sandwich)}</p>
    </>
  );
};

import { IngredientsProvider } from "../contexts/IngredientsContext";
import { calculatePrice } from "../utils/calculatePrice";
import { BREAD } from "../utils/sandwichData";

export const SandwichPreview = ({ sandwich, ingredientsData }) => {
  const price = calculatePrice(sandwich.bread, [
    ...sandwich.sauces,
    ...sandwich.meats,
    ...sandwich.vegetables,
  ], ingredientsData);

  return (
    <>
      <p>Хлеб: {BREAD[sandwich.bread].name}</p>
      <p>
        Соусы: {sandwich.sauces.map((sauce) => SAUCES[sauce].name).join(", ")}
      </p>
      <p>
        Топпинги:{" "}
        {sandwich.toppings
          .map((topping) => ingredientsData.find((t) => t).name)
          .join(", ")}
      </p>
      <p>Цена: </p>
    </>
  );
};

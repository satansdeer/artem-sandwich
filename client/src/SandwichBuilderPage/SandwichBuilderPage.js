import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useIngredients } from "../contexts/IngredientsContext";
import { useSandwich } from "../contexts/SandwichContext";
import { SandwichForm } from "./SandwichForm";

export const SandwichBuilderPage = ({
  _useSandwichHook = useSandwich,
  _useIngredientsHook = useIngredients,
}) => {
  const { setSandwich } = _useSandwichHook();
  const {
    fetchIngredients,
    ingredientsByCategory,
    isLoading,
  } = _useIngredientsHook();
  const history = useHistory();

  const onSandwichChange = (sandwich) => {
    setSandwich(sandwich);
    history.push("/sandwich-preview");
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  const sauces = ingredientsByCategory("sauces");
  const meats = ingredientsByCategory("meat");
  const vegetables = ingredientsByCategory("vegetables");

  return (
    <>
      <h1>Соберите сендвич</h1>
      <SandwichForm
        sauces={sauces}
        meats={meats}
        vegetables={vegetables}
        onSandwichSubmit={onSandwichChange}
      />
    </>
  );
};

import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useIngredients } from "../contexts/IngredientsContext";
import { SandwichForm } from "./SandwichForm";
import { useDispatch, useSelector } from 'react-redux'
import { setSandwich } from "../state/sandwich/actions";
import { fetchIngredients } from "../state/ingredients/thunk";
import { getIngredientsByCategory, getIsLoading } from "../state/ingredients/selectors";
import { getIngredients } from "../api";

export const SandwichBuilderPage = () => {
  const history = useHistory();
  const dispatch = useDispatch()

  const isLoading = useSelector(getIsLoading)

  const state = useSelector(state => state)
  const sauces = useSelector(getIngredientsByCategory("sauces"));
  const meats = useSelector(getIngredientsByCategory("meat"));
  const vegetables = useSelector(getIngredientsByCategory("vegetables"));

  console.log(state, sauces, meats, vegetables)

  const onSandwichChange = (sandwich) => {
    dispatch(setSandwich(sandwich))
    history.push("/sandwich-preview");
  };

  useEffect(() => {
    dispatch(fetchIngredients())
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

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

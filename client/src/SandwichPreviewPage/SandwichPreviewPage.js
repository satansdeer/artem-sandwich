import { Link, Redirect } from "react-router-dom";
import { useIngredients } from "../contexts/IngredientsContext";
import { useSandwich } from "../contexts/SandwichContext";
import { SandwichPreview } from "./SandwichPreview";

export const SandwichPreviewPage = () => {
  const { sandwich } = useSandwich();
  const { ingredients } = useIngredients()

  if (!sandwich) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h1>Ваш сендвич:</h1>
      {/* <SandwichPreview sandwich={sandwich} ingredientsData={ingredients} /> */}
      <hr/>
      <Link to="/checkout">Перейти к оплате</Link>
    </>
  );
};

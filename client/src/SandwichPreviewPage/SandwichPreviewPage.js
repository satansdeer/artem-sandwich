import { Link, Redirect } from "react-router-dom";
import { useSandwich } from "../SandwichContext";
import { SandwichPreview } from "./SandwichPreview";

export const SandwichPreviewPage = () => {
  const { sandwich } = useSandwich();

  if (!sandwich) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h1>Ваш сендвич:</h1>
      <SandwichPreview sandwich={sandwich} />
      <hr/>
      <Link to="/checkout">Перейти к оплате</Link>
    </>
  );
};

import { Link, Redirect } from "react-router-dom";
import { SandwichPreview } from "./SandwichPreview";
import { useSelector } from 'react-redux'
import { getSandwich } from "../state/sandwich/selectors";

export const SandwichPreviewPage = () => {
  const sandwich = useSelector(getSandwich)

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

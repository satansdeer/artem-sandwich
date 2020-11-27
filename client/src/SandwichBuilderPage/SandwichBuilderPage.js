import { useHistory } from "react-router-dom";
import { useSandwich } from "../SandwichContext";
import { SandwichForm } from "./SandwichForm"

export const SandwichBuilderPage = ({ _useSandwichHook = useSandwich }) => {
  const {setSandwich} = _useSandwichHook();
  const history = useHistory()

  const onSandwichChange = (sandwich) => {
    setSandwich(sandwich)
    history.push("/sandwich-preview")
  }

  return (
    <>
      <h1>Соберите сендвич</h1>
      <SandwichForm onSandwichSubmit={onSandwichChange} />
    </>
  );
}
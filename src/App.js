import { useState } from "react";
import { SandwichForm } from "./SandwichForm";
import { SandwichPreview } from "./SandwichPreview";

// const sandwich = {
//   bread: "dark",
//   sauces: ["mayo", "ketchup", "mustard"],
//   toppings: ["bacon", "lettuce", "cheddar"],
// };

function App() {
  const [sandwich, setSandwich] = useState();

  if (sandwich) {
    return (
      <>
        <h1>Ваш сендвич:</h1>
        <SandwichPreview sandwich={sandwich} />
      </>
    );
  }

  return (
    <>
      <h1>Соберите сендвич</h1>
      <SandwichForm onSandwichSubmit={setSandwich} />
    </>
  );
}

export default App;

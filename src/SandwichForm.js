import { useState } from "react";
import { calculatePrice } from "./calculatePrice";
import { BREAD, SAUCES, TOPPINGS } from "./sandwichData";
import { useCollection } from "./useCollection";

export const SandwichForm = ({ onSandwichSubmit }) => {
  const [bread, setBread] = useState("dark");
  const [sauces, addSauce, removeSauce] = useCollection([]);
  const [toppings, addTopping, removeTopping] = useCollection([]);

  const price = calculatePrice({ bread, sauces, toppings });

  const updateBread = (event) => {
    setBread(event.target.value);
  };

  const updateSauces = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      addSauce(value);
    } else {
      removeSauce(value);
    }
  };

  const updateToppings = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      addTopping(value);
    } else {
      removeTopping(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSandwichSubmit({
      bread,
      sauces,
      toppings,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Выберите хлеб:</legend>
        <label>
          <input
            type="radio"
            value="dark"
            name="bread"
            checked={bread === "dark"}
            onChange={updateBread}
          />
          {BREAD.dark.name}
        </label>
        <label>
          <input
            type="radio"
            value="white"
            name="bread"
            checked={bread === "white"}
            onChange={updateBread}
          />
          {BREAD.white.name}
        </label>
      </fieldset>
      <fieldset>
        <legend>Выберите соусы:</legend>
        <label>
          <input
            type="checkbox"
            value="mayo"
            name="sauce"
            checked={sauces.includes("mayo")}
            onChange={updateSauces}
          />
          {SAUCES.mayo.name}
        </label>
        <label>
          <input
            type="checkbox"
            value="ketchup"
            name="sauce"
            checked={sauces.includes("ketchup")}
            onChange={updateSauces}
          />
          {SAUCES.ketchup.name}
        </label>
        <label>
          <input
            type="checkbox"
            value="mustard"
            name="sauce"
            checked={sauces.includes("mustard")}
            onChange={updateSauces}
          />
          {SAUCES.mustard.name}
        </label>
      </fieldset>
      <fieldset>
        <legend>Выберите топпинги:</legend>
        <label>
          <input
            type="checkbox"
            value="bacon"
            name="toppings"
            checked={toppings.includes("bacon")}
            onChange={updateToppings}
          />
          {TOPPINGS.bacon.name}
        </label>
        <label>
          <input
            type="checkbox"
            value="lettuce"
            name="toppings"
            checked={toppings.includes("lettuce")}
            onChange={updateToppings}
          />
          {TOPPINGS.lettuce.name}
        </label>
        <label>
          <input
            type="checkbox"
            value="cheddar"
            name="toppings"
            checked={toppings.includes("cheddar")}
            onChange={updateToppings}
          />
          {TOPPINGS.cheddar.name}
        </label>
      </fieldset>
      <button>Готово {price}</button>
    </form>
  );
};

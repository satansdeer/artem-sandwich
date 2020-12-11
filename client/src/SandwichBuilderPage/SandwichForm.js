import React from 'react'
import { useForm } from 'react-hook-form';
import { calculatePrice } from "../utils/calculatePrice";
import { BREAD, SAUCES, TOPPINGS } from "../utils/sandwichData";
import { RadioGroup } from './RadioGroup';

export const SandwichForm = ({ onSandwichSubmit }) => {
  const {register, handleSubmit, watch} = useForm({
    defaultValues: {
      bread: 'dark',
      sauces: [],
      toppings: []
    }
  })

  const values = watch()
  const price = calculatePrice(values);

  const onSubmit = (data) => {
    onSandwichSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Выберите хлеб:</legend>
        <RadioGroup register={register} name="bread" items={[
          { value: 'dark', label: BREAD['dark'].name },
          { value: 'white', label: BREAD['white'].name }
        ]} />
      </fieldset>
      <fieldset>
        <legend>Выберите соусы:</legend>
        <label>
          <input
            ref={register}
            type="checkbox"
            value="mayo"
            name="sauces"
          />
          {SAUCES.mayo.name}
        </label>
        <label>
          <input
            ref={register}
            type="checkbox"
            value="ketchup"
            name="sauces"
          />
          {SAUCES.ketchup.name}
        </label>
        <label>
          <input
            ref={register}
            type="checkbox"
            value="mustard"
            name="sauces"
          />
          {SAUCES.mustard.name}
        </label>
      </fieldset>
      <fieldset>
        <legend>Выберите топпинги:</legend>
        <label>
          <input
            ref={register}
            type="checkbox"
            value="bacon"
            name="toppings"
          />
          {TOPPINGS.bacon.name}
        </label>
        <label>
          <input
            ref={register}
            type="checkbox"
            value="lettuce"
            name="toppings"
          />
          {TOPPINGS.lettuce.name}
        </label>
        <label>
          <input
            ref={register}
            type="checkbox"
            value="cheddar"
            name="toppings"
          />
          {TOPPINGS.cheddar.name}
        </label>
      </fieldset>
      <button>Готово {price}</button>
    </form>
  );
};

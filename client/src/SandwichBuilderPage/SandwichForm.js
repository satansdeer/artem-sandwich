import React from "react";
import { useForm } from "react-hook-form";
import { calculatePrice } from "../utils/calculatePrice";
import { BREAD } from "../utils/sandwichData";
import { RadioGroup } from "./RadioGroup";

export const SandwichForm = ({
  onSandwichSubmit,
  sauces,
  meats,
  vegetables,
}) => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      bread: "dark",
      sauces: [],
      meats: [],
      vegetables: [],
    },
  });

  const values = watch();

  const price = calculatePrice(
    values.bread,
    [...values.sauces, ...values.vegetables, ...values.meats],
    [...sauces, ...meats, ...vegetables]
  );

  const onSubmit = (data) => {
    onSandwichSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Выберите хлеб:</legend>
        <RadioGroup
          register={register}
          name="bread"
          items={[
            { value: "dark", label: BREAD["dark"].name },
            { value: "white", label: BREAD["white"].name },
          ]}
        />
      </fieldset>
      <fieldset>
        <legend>Выберите соусы:</legend>
        {sauces.map((sauce) => {
          return (
            <label key={sauce.id}>
              <input
                ref={register}
                type="checkbox"
                value={sauce.slug}
                name="sauces"
              />
              {sauce.name}
            </label>
          );
        })}
      </fieldset>
      <fieldset>
        <legend>Выберите мясо:</legend>
        {meats.map((meat) => {
          return (
            <label key={meat.id}>
              <input
                ref={register}
                type="checkbox"
                value={meat.slug}
                name="meats"
              />
              {meat.name}
            </label>
          );
        })}
      </fieldset>
      <fieldset>
        <legend>Выберите овощи:</legend>
        {vegetables.map((vegetable) => {
          return (
            <label key={vegetable.id}>
              <input
                ref={register}
                type="checkbox"
                value={vegetable.slug}
                name="vegetables"
              />
              {vegetable.name}
            </label>
          );
        })}
      </fieldset>
      <button>Готово {price}</button>
    </form>
  );
};

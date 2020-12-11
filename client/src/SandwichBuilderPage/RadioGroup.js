export const RadioGroup = ({ register, items, name }) => {
  return (
    <>
      {items.map((item, i) => {
        return (
          <label key={i}>
            <input ref={register} type="radio" value={item.value} name={name} />
            {item.label}
          </label>
        );
      })}
    </>
  );
};

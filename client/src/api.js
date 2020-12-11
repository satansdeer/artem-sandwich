export const getIngredients = async () => {
  return fetch(process.env.REACT_APP_BACKEND_HOST).then((res) => res.json());
};

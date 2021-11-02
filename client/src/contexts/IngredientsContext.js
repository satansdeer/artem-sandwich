import { createContext, useContext, useState } from "react";
import { getIngredients } from "../api";

const IngredientsContext = createContext();

export const IngredientsProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchIngredients = async () => {
    setIsLoading(true);
    const data = await getIngredients();
    const dataWithCorrectTypes = data.map((item) => ({
      ...item,
      price: Number(item.price),
    }));
    setIngredients(dataWithCorrectTypes);
    setIsLoading(false);
  };

  const ingredientsByCategory = (category) => {
    return ingredients.filter((ingredient) => ingredient.category === category);
  };

  return (
    <IngredientsContext.Provider
      value={{
        isLoading,
        fetchIngredients,
        ingredients,
        ingredientsByCategory,
      }}
    >
      {children}
    </IngredientsContext.Provider>
  );
};

export const useIngredients = () => useContext(IngredientsContext);

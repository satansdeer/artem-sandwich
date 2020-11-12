const { render } = require("@testing-library/react");
const { SandwichPreview } = require("./SandwichPreview");

describe("SandwichPreview", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <SandwichPreview
        sandwich={{
          bread: "dark",
          sauces: ["mayo", "ketchup"],
          toppings: ["bacon", "lettuce"],
        }}
      />
    );

    expect(getByText("Хлеб: тёмный")).toBeInTheDocument()
    expect(getByText("Соусы: майонез, кетчуп")).toBeInTheDocument()
    expect(getByText("Топпинги: бекон, салат")).toBeInTheDocument()
  });
});

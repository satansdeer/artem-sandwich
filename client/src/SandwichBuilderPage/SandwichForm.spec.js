import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { SandwichForm } from "./SandwichForm";

describe("SandwichForm", () => {
  it("renders correctly", () => {
    const { getByText } = render(<SandwichForm />);

    expect(getByText("Выберите хлеб:")).toBeInTheDocument();
  });

  describe("with all additions unchecked", () => {
    it("shows minimum price", () => {
      const { getByText } = render(<SandwichForm />);
      expect(getByText("Готово 10")).toBeInTheDocument();
    });
  });

  describe("with all additions checked", () => {
    it("shows maximum price", () => {
      const { getByText } = render(<SandwichForm />);

      fireEvent.click(getByText("майонез"));
      fireEvent.click(getByText("кетчуп"));
      fireEvent.click(getByText("горчица"));

      fireEvent.click(getByText("бекон"));
      fireEvent.click(getByText("салат"));
      fireEvent.click(getByText("сыр чеддер"));

      expect(getByText("Готово 97")).toBeInTheDocument();
    });
  });

  describe("on sandwich submit", () => {
    it("passes constructed sandwich", async () => {
      const onSandwichSubmit = jest.fn();
      const { getByText } = render(
        <SandwichForm onSandwichSubmit={onSandwichSubmit} />
      );

      fireEvent.click(getByText("майонез"));
      fireEvent.click(getByText("сыр чеддер"));

      await act(async () => {
        fireEvent.click(getByText("Готово 39"));
      })

      expect(onSandwichSubmit).toBeCalledWith({
        bread: "dark",
        sauces: ["mayo"],
        toppings: ["cheddar"],
      });
    });
  });
});

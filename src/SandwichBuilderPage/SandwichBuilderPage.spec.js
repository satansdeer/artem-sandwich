import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";
import { SandwichBuilderPage } from "./SandwichBuilderPage";
import { createMemoryHistory } from "history";

jest.mock("./SandwichForm", () => {
  return {
    SandwichForm: ({ onSandwichSubmit }) => (
      <button onClick={() => onSandwichSubmit({ foo: "bar" })}>
        Сохранить
      </button>
    ),
  };
});

describe("SandwichBuilderPage", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        <SandwichBuilderPage
          _useSandwichHook={() => ({
            setSandwich: () => {},
          })}
        />
      </MemoryRouter>
    );

    expect(getByText("Соберите сендвич")).toBeInTheDocument();
  });

  describe(".onSandwichChange", () => {
    it("sets sandwich value in the sandwich context", () => {
      const mockSetSandwich = jest.fn();

      const { getByText } = render(
        <MemoryRouter>
          <SandwichBuilderPage
            _useSandwichHook={() => ({
              setSandwich: mockSetSandwich,
            })}
          />
        </MemoryRouter>
      );

      fireEvent.click(getByText("Сохранить"));

      expect(mockSetSandwich).toBeCalledWith({ foo: "bar" });
    });

    it("navigates to `/sandwich-preview`", () => {
      const history = createMemoryHistory();
      const { getByText } = render(
        <Router history={history}>
          <SandwichBuilderPage
            _useSandwichHook={() => ({
              setSandwich: () => {},
            })}
          />
        </Router>
      );
      fireEvent.click(getByText("Сохранить"));

      expect(history.location.pathname).toEqual("/sandwich-preview")
    });
  });
});

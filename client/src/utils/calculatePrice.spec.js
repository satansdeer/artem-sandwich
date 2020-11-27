const { calculatePrice } = require("./calculatePrice")

describe("calculatePrice", () => {
  it("returns the sum price of all selected sandwich parts", () => {
    expect(calculatePrice({
      bread: "dark",
      sauces: ["mayo", "ketchup", "mustard"],
      toppings: ["bacon", "cheddar", "lettuce"]
    })).toEqual(97)
  })
})
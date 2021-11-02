const { render } = require("@testing-library/react")
const { TestComponent } = require("./TestComponent")

jest.mock("./TestComponent", () => ({
  TestComponent: jest.fn()
}))

describe("Example", () => {
  it('returns foo', () => {
    TestComponent.mockImplementation(() => <>Foo</>)
    const {container} = render(<TestComponent/>)
    expect(container.innerHTML).toMatch("Foo")
  })

  it('returns bar', () => {
    TestComponent.mockImplementation(() => <>Bar</>)
    const {container} = render(<TestComponent/>)
    expect(container.innerHTML).toMatch("Bar")
  })
})
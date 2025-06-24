import { render, screen } from "@testing-library/react";
import { PokeList } from "./PokeList";

describe("Render List", () => {
  it("should render a list", () => {
    render(<PokeList />);
    expect(screen.getByText("pikachu")).toBeDefined();
  });
});

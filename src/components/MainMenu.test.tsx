import { render, screen } from "@testing-library/react";
import { MainMenu } from "./mainMenu";

describe("Menu", () => {
  it("should render the menu", () => {
    render(<MainMenu />);

    expect(screen.getByText("Home | Profile")).toBeDefined();
  });
});

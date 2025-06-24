import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { NameInput } from "./NameInput";

describe("Display Name", () => {
  it("should render the typed name", () => {
    render(<NameInput />);
    const nameInput = screen.getByTestId("name-input");
    fireEvent.change(nameInput, { target: { value: "Potato" } });

    const nameOutput = screen.getByTestId("name-output");
    expect(nameOutput.value).toBe("Hello, Potato");
  });
});

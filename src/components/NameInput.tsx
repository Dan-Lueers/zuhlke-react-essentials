import { useState } from "react";

export function NameInput() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        data-testid="name-input"
        onChange={(event) => {
          console.log(event.target.value);
          setName(event.target.value);
        }}
      />
      <span data-testid="name-output">Hello, {name}</span>
    </>
  );
}

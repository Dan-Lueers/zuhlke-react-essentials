import { useState } from "react";

export function NameInput() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(event) => {
          console.log(event.target.value);
          setName(event.target.value);
        }}
      />
      <h3>Hello, {name}</h3>
    </>
  );
}

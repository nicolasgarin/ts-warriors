import React, { useEffect, useRef, useState } from "react";
import CharList from "../components/CharList";
import { Character } from "../types";

const char: Character[] = [
  {
    id: 1,
    name: "Zoro",
    hp: 100,
    stamina: 100,
  },
  {
    id: 2,
    name: "Luffy",
    hp: 100,
    stamina: 100,
  },
];

export default function Main() {
  const [characters, setCharacters] = useState<Character[]>(char);
  const [newChar, setNewChar] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    newChar != ""
      ? setCharacters([
          ...characters,
          { id: characters.length + 1, name: newChar, hp: 100, stamina: 100 },
        ])
      : null;
  }, [newChar]);

  function CharForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNewChar(inputRef.current!.value);
    inputRef.current!.value = "";
  }

  return (
    <section className="main">
      <div className="container">
        <h3>Characters</h3>
        <form onSubmit={CharForm}>
          <input ref={inputRef} type="text" />
          <button type="submit" className="btn">
            Add
          </button>
        </form>
        <CharList characters={characters} />
      </div>
    </section>
  );
}

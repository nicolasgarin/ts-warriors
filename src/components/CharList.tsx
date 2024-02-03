import { Character } from "../types";
import CharCard from "./CharCard";

export default function CharList({ characters }: { characters: Character[] }) {
  return (
    <>
      <div className="char-list">
        {characters.map((char) => (
          <CharCard key={char.id} char={char} />
        ))}
      </div>
    </>
  );
}

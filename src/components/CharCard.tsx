import { Character } from "../types";

export default function CharCard({ char }: { char: Character }) {
  return (
    <>
      <div className="char-card">
        <div># {char.id} </div>
        <div>{char.name}</div>
        <div>HP:{char.hp}</div>
        <div>Stamina:{char.stamina}</div>
        <button className="btn attack">Attack</button>
        <button className="btn heal">Heal</button>
      </div>
    </>
  );
}

import {useGame} from "./gamecontext";
export default function Field() {
  const {Field} = useGame();
  return (
    <ul className="Field">
      {Field.map((hasMole, i) => (
        <Hole key={i} hasMole={hasMole} />
      ))}
    </ul>
  );
}
function Hole({hasMole}) {
  const {whack} = useGame();
  if (hasMole) return 
  <li onClick={whack} className="hole mole"></li>;
  return <li className="hole"></li>;
}
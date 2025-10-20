import {useGame} from "./gamecontext";
import Field from "./Field";
import scoreboard from "./scoreboard";
import welcomepage from "./welcomepage";
export default function App() {
  const { playing } = useGame();
  return (
    <><h1>Whack a Mole Game</h1>
      {playing?(
        <>
          <scoreboard />
          <Field />
        </>
      ):(
        <welcomepage />
      )}</>
  );
}

import { useGame } from "./gamecontext";
export default function welcomepage() {
  const{start,highSchore} = useGame();
  return(
    <><section className="welcome">
        <p>Welcome to Whack a Mole!</p>
        <p>Whack  mole to earn points</p>
        <p>How many can you get?</p>
        <button onClick={start}>Play</button>
      </section>
      <section className="highSchore">
        <h2>High Scores</h2>
        <ul>
          {highSchore.length > 0 ? (
            highSchore.map((score, i) => <li key={i}>{score}</li>)
          ):(
            <li>Play the game!</li>
          )}</ul></section></>
  );
}
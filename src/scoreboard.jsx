import { useGame } from "./gamecontext";
export default function scoreboard() {
  const {score,time,stop} = useGame();
  return (
    <div className="scoreboard">
      <p>score:{score}</p>
      <p>Time:{time}</p>
      <button onClick={stop}>Restart</button>
    </div>
  );
}
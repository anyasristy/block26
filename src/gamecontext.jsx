import { createContext,useContext, useEffect, useRef, useState } from "react";
const NUM_HOLES = 9;
const TIME_LIMIT = 15;
const gamecontext = createContext();
export function GameProvider({ children }) {
  const [Field, setField] = useState(makingField());
  const [score, setScore] = useState(0);
  const [highSchore, sethighSchore] = useState([]);
  const [playing, setPlay] = useState(false);
  const [time, setTime] = useState(TIME_LIMIT);
  const timer = useRef();
  useEffect(() => {
    if (time <= 0) stop();
  }, [time]);
  const whack = () => {
    setField(makingField(Field));
    setScore(score + 1);
  };
  const start = () => {
    setScore(0);
    setField(makingField());
    setPlay(true);
    timer.current = setInterval(() => setTime((time) => time - 1), 1000);
  };
  const stop = () => {
    setPlay(false);
    const newscore=[...highSchore, score].sort((a, z) => z - a);
    sethighSchore(newscore.slice(0, 5));
    clearInterval(timer.current);
    setTime(TIME_LIMIT);
  };
  const value = {Field,score,highSchore,playing,time,whack,start,stop,};
  return <gamecontext.Provider value={value}>{children}</gamecontext.Provider>;
}
export function useGame() {
  const context = useContext(gamecontext);
  if (!context)throw Error("Error.");
  return context;
}
function makingField(Field = []) {
  const newField = Array(NUM_HOLES).fill(false);
  let mole = Math.floor(Math.random()*NUM_HOLES);
  while (Field[mole]) {
    mole = Math.floor(Math.random()*NUM_HOLES);
  }
  newField[mole] = true;
  return newField;
}
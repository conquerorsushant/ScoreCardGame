import { useState,useRef } from "react";


export default function Player() {

  const playerName = useRef()
  const [currentPlayer, setCurrentPlayer] = useState(null)




  const handleSave = () => {
    setCurrentPlayer(playerName.current.value);
    playerName.current.value=""

  }

  return (
    <section id="player">
      <h2>Welcome {currentPlayer ? currentPlayer : "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleSave}>Set Name</button>
      </p>
    </section>
  );
}

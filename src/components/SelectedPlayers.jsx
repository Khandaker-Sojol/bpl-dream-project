import React from "react";
import SelectedCard from "./SelectedCard";

const SelectedPlayers = ({ purchasedPlayer, removePlayer }) => {
  console.log(purchasedPlayer);
  return (
    <div>
      {purchasedPlayer.map((player) => (
        <SelectedCard
          key={player.playerName}
          player={player}
          purchasedPlayer={purchasedPlayer}
          removePlayer={removePlayer}
        ></SelectedCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;

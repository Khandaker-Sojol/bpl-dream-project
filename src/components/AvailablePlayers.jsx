import React, { use } from "react";
import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({ playerPromise }) => {
  const playerData = use(playerPromise);
  console.log(playerData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
      {playerData.map((player) => (
        <PlayerCard key={player.playerName} player={player}></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;

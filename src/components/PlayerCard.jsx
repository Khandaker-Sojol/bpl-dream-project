import React from "react";
import { FaFlag } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

const PlayerCard = ({ player }) => {
  console.log(player);

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          className="w-full h-[300px] object-cover p-4 rounded-3xl "
          src={player.playerImg}
          alt="Shoes"
        />
      </figure>

      <div className="card-body flex justify-between">
        <h1 className="flex items-center gap-2 text-xl font-semibold card-title">
          <FaUserAlt /> {player.playerName}
        </h1>
        <div className="flex justify-between text-[#13131360] border-b items-center pb-6">
          <h2 className="flex gap-2 items-center">
            <FaFlag />
            {player.country}
          </h2>
          <div className="badge badge-ghost p-4">{player.playerType}</div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <h4 className="font-bold">Rating</h4>
          <span className="font-bold">{player.rating}</span>
        </div>

        <div className="flex justify-between my-2">
          <h4 className="font-bold">{player.battingStyle}</h4>
          <h4 className="font-semibold text-[#13131370]">
            {player.bowlingStyle}
          </h4>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="font-semibold">
            <span className="font-extrabold">Price:$</span> {player.price}
          </h4>
          <button className="btn font-light">Choose Player</button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;

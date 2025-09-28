import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const SelectedCard = ({ player, removePlayer }) => {
  console.log(player);

  const handleRemove = () => {
    removePlayer(player);
  };

  return (
    <div className="border border-[#1313131A]  items-center my-5 justify-between flex rounded-2xl">
      <div className="flex items-center">
        <img
          className="w-25 h-25 p-4 rounded-3xl object-cover"
          src={player.playerImg}
          alt=""
        />
        <div>
          <h1 className="text-[#131313] font-semibold text-2xl">
            {player.playerName}
          </h1>
          <p className="text-[#13131399]">{player.bowlingStyle}</p>
        </div>
      </div>
      <div className="mr-12 text-3xl text-[#F14749]">
        <button onClick={handleRemove} className="cursor-pointer">
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default SelectedCard;

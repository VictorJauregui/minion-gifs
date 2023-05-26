import { useContext, useEffect, useState } from "react";
import like from "../../assets/like.png";
import share from "../../assets/share.png";
import ModalCopyUrl from "../ModalCopyUrl/ModalCopyUrl";
import { toast } from "react-hot-toast";
import blueHeart from "../../assets/blueHeart.png";
import partyCard from "../../assets/partyCard.png";
import LoveCard from "../../assets/LoveCard.png";
import smileCard from "../../assets/smileCard.png";
import GiftContext from "../../context/GiftsContext";

const CardGif = ({ gif }) => {
  const { dataGifs, setDataGifs, updateGif } = useContext(GiftContext);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const HandleCopyUrl = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(gif.imageGif);
    toast.success("The minion is in your power. SHARE IT");
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleToggleLike = (e) => {
    e.stopPropagation();
    const updatedGifs = dataGifs.map((minion) => {
      if (gif._id === minion._id) {
        return { ...gif, liked: !gif.liked };
      } else {
        return minion;
      }
    });
    const currentGif = { ...gif, liked: !gif.liked };
    updateGif(gif._id, currentGif);
    setDataGifs([...updatedGifs]);
  };

  return (
    <div
      className="min-w-[12rem] md:min-w-[16rem] md:max-w-[16rem] h-52 md:h-60 relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className={
          gif.typeGif === "Party"
            ? " w-16 absolute flex justify-end mt-2"
            : "hidden"
        }
        src={partyCard}
        alt=""
      />
      <img
        className={
          gif.typeGif === "Love"
            ? " w-16 absolute flex justify-end mt-2"
            : "hidden"
        }
        src={LoveCard}
        alt=""
      />
      <img
        className={
          gif.typeGif === "Smiling"
            ? " w-16 absolute flex justify-end mt-2"
            : "hidden"
        }
        src={smileCard}
        alt=""
      />

      <img
        className={`w-full h-full rounded-lg object-cover ${
          !isHovered ? "" : "opacity-40 cursor-pointer pointer-events-none "
        }`}
        src={gif.imageGif}
        alt="gif"
      />
      {isHovered && (
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-y-5">
          <p className="font-bold text-lg opacity-90 text-white">
            {gif.nameGif}
          </p>
          <div className="flex items-end justify-center gap-5 z-20">
            <img
              className="w-10 opacity-90"
              src={gif.liked === true ? blueHeart : like}
              alt=""
              onClick={handleToggleLike}
            />
            <img
              className="w-10 opacity-90 "
              src={share}
              alt=""
              onClick={HandleCopyUrl}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardGif;

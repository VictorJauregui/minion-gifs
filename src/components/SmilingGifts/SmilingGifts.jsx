import { useContext } from "react";
import CardGif from "../SmilingHome/CardGif";
import GiftContext from "../../context/GiftsContext";
import { useNavigate } from "react-router-dom";

const SmilingGifts = () => {
  const { dataGifs } = useContext(GiftContext);
  const navigate = useNavigate();

  const SmilingGifs = dataGifs.filter((gif) => {
    return gif.typeGif === "Smiling";
  });

  return (
    <div className="">
      <p className="text-4xl font-bold pt-10 mb-6 flex">Smiling</p>
      <div className="gif-container flex gap-3 overflow-x-scroll scrollbar-x-hide max-w-[100%] ">
        {SmilingGifs.map((gif) => (
          <div onClick={() => navigate(`./gif/${gif._id}`)}>
            <CardGif key={gif.id} gif={gif} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmilingGifts;

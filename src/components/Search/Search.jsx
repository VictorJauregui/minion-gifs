import { useContext, useState, useRef } from "react";
import GiftContext from "../../context/GiftsContext";

const Search = () => {
  const { searchGif, getAllGifs } = useContext(GiftContext);
  const inputRef = useRef();

  const handleSearch = (e) => {
    if (e.target.value.length > 2) {
      searchGif(e.target.value);
    }

    if (e.target.value.length === 0) {
      getAllGifs();
    }
  };

  const handleReset = () => {
    inputRef.current.value = "";
    getAllGifs();
  };

  return (
    <div className="mt-8 flex items-center rounded-xl overflow-hidden w-5/6 mx-auto">
      <input
        ref={inputRef}
        type="text"
        className="py-2 px-4 rounded-xl focus:outline-none w-[90%]"
        placeholder="Search a Gifs"
        onChange={handleSearch}
      />
      <button
        onClick={handleReset}
        className="bg-transparent border-2 border-BlueMain w-[10%] py-2 px-4 rounded-xl text-white ml-2 hover:bg-BlueMain"
      >
        Reset
      </button>
    </div>
  );
};

export default Search;

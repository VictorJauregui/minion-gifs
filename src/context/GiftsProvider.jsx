import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import GifContext from "./GiftsContext";
const BASE_URL = "http://localhost:4000/gifs";

const GiftsProvider = ({ children }) => {
  const [dataGifs, setDataGifs] = useState([]);
  // const [updateNewGif, setUpdateNewGif] = useState()
  const [infoGif, setInfoGif] = useState(null);

  const getAllGifs = async () => {
    const res = await fetch(`${BASE_URL}`);
    const data = await res.json();
    setDataGifs(data.allGifs);
  };

  useEffect(() => {
    getAllGifs();
  }, []);

  const addGif = async (formData) => {
    const res = await fetch(`${BASE_URL}/add-gif`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    console.log(data);

  };

  const updateGif = async (gifId, newValue) => {
    const res = await fetch(`${BASE_URL}/update-gif`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gifId, newValue }),
    });
    const data = await res.json();
    setInfoGif(data?.gifChanged);
  };

  const deleteGif = async (id) => {
    const res = await fetch(`${BASE_URL}/delete-gif/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    const deleteGif = dataGifs.filter(
      (gif) => gif?._id !== data.deleteGif?._id
    );
    setDataGifs(deleteGif);

    if (data.status === "OK") {
      return true;
    } else {
      return false;
    }
  };

  const searchGif = async (query) => {
    const res = await fetch(`${BASE_URL}/search/${query}`);
    const data = await res.json();

    if (data.status === "OK") {
      setDataGifs(data.gifs);
    }
  };

  return (
    <GifContext.Provider
      value={{
        addGif,
        dataGifs,
        setDataGifs,
        updateGif,
        deleteGif,
        infoGif,
        setInfoGif,
        searchGif,
        getAllGifs,
      }}
    >
      {children}
    </GifContext.Provider>
  );
};

GiftsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GiftsProvider;

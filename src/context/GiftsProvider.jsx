import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import GifContext from "./GiftsContext"

const GiftsProvider = ({ children }) => {

  const [dataGifs, setDataGifs] = useState([])

  useEffect(() => {
    const musicTracks = async () => {
      const res = await fetch("http://localhost:4000/gifs");
      const data = await res.json();
      setDataGifs(data.allGifs);

    };
    musicTracks();
  }, [setDataGifs]);
  console.log(dataGifs)


  const addGif = async (gif) => {
    console.log("hola")
    const res = await fetch("http://localhost:4000/gifs/add-gif", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gif)
    })
    const data = await res.json();
    console.log(data)
    setDataGifs([...dataGifs, data.gif])

    // if (data.ok) {
    //   toast.success("Playlist creada con éxito")
    // }
  }






  return (
    <GifContext.Provider value={{
      addGif,
      dataGifs,
    }}>
      {children}
    </GifContext.Provider>
  );
}

GiftsProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default GiftsProvider;
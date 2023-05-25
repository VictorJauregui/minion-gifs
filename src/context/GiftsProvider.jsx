import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import GifContext from "./GiftsContext"

const GiftsProvider = ({ children }) => {

  const [dataGifs, setDataGifs] = useState([])
  const [updateNewGif, setUpdateNewGif] = useState()

  useEffect(() => {
    const gifs = async () => {
      const res = await fetch("http://localhost:4000/gifs");
      const data = await res.json();
      setDataGifs(data.allGifs);

    };
    gifs();
  }, [setDataGifs, updateNewGif]);


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

  const updateGif = async (gifId, newValue) => {
    
    const res = await fetch("http://localhost:4000/gifs/update-gif", {
        method: "PATCH", 
        headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify({gifId, newValue})
    })
    const data = await res.json()
    console.log(data)
    setUpdateNewGif(data.gifChanged)
}

const deleteGif = async (id) => {
  await fetch(`http://localhost:4000/gifs/delete-gif/${id}`,{
      method: "DELETE",
    })
}


  return (
    <GifContext.Provider value={{
      addGif,
      dataGifs,
      updateGif,
      deleteGif
    }}>
      {children}
    </GifContext.Provider>
  );
}

GiftsProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default GiftsProvider;
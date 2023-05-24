

const Search = () => {
  return (
    <div className="mt-8 flex items-center rounded-xl overflow-hidden w-5/6 mx-auto">
      <input
        type="text"
        className="py-2 px-4 rounded-xl focus:outline-none w-[90%]"
        placeholder="Search a Gifs"
      ></input>
      <button className="bg-transparent border-2 border-BlueMain w-[10%] py-2 px-4 rounded-xl text-white ml-2 hover:bg-BlueMain">
          Buscar
      </button>
     </div>
  )
}

export default Search
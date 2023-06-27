import { useContext, useState } from "react";
import minionLeft from "../../assets/minionLeft.png";
import minionRight from "../../assets/minionRight.png";
import GiftContext from "../../context/GiftsContext";
import { toast } from "react-hot-toast";

const ModalNewGif = ({ setModalShow }) => {
  const { addGif, dataGifs } = useContext(GiftContext);
  const [previewImg, setPreviewImg] = useState(null);

  const [gifData, setGifData] = useState({
    nameGif: "",
    imageGif: "",
    imageGifUrl: "",
    typeGif: "Smiling",
    liked: false,
  });

  const handleChange = (e) => {
    setGifData({ ...gifData, imageGif: e.target.files[0], imageGifUrl: "" });
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewImg(reader.result);
    };
  };

  const handleChangeForm = (e) => {
    if (e.target.name === "imageGifUrl") {
      setGifData({ ...gifData, [e.target.name]: e.target.value, imageGif: "" });
      setPreviewImg(null);
    } else {
      setGifData({ ...gifData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nameGif", gifData.nameGif);
    formData.append("imageGif", gifData.imageGif);
    formData.append("imageGifFromUrl", gifData.imageGifUrl);
    formData.append("typeGif", gifData.typeGif);
    formData.append("liked", gifData.liked);

    addGif(formData);
    setModalShow(false);
    toast.success("Your minion has been added successfully")
  };

  return (
    <div>
      <div className="fixed inset-0 overflow-y-auto bg-black/70 z-30">
        <div className="flex items-center justify-center min-h-screen ">
          <form
            encType="multipart/form-data"
            className="flex flex-col justify-center bg-gradient-to-tl from-[#00A3FF] via-[#00A3FF] to-[#63BEF1] rounded-lg shadow-lg w-[90%] sm:w-2/3 md:w-3/5 xl:w-1/2 2xl:w-1/2  items-center "
          >
            <h2 className="text-2xl font-bold text-white mt-6">
              Update a <span className="text-6xl">Minion</span>
            </h2>
            <div className="flex w-full pl-0 justify-center  lg:justify-between ">
              <img
                className="hidden lg:flex lg:w-40 sm:w-24 sm:h-24 md:h-40 2xl:w-60 2xl:h-60"
                src={minionLeft}
                alt=""
              />
              <div className="mt-10">
                <label>
                    { !previewImg &&
                  <div className="relative bg-white/50 py-14 xl:py-14 2xl:py-20 px-3 rounded cursor-pointer ">
                      <p className="flex justify-center text-2xl font-bold text-[#00A3FF] mb-2">
                        Choose GIF
                      </p>
                      <p className="text-white">
                        Accepted formated JPG, PNG and Gift
                      </p>
                  </div>

                    }
                    { previewImg &&
                      <div className="border rounded ">
                        <img className="min-w-[300px] max-w-[300px] min-h-[250px] max-h-[250px] " src={previewImg ? previewImg : ""} alt="" />
                      </div>
                    }
                  <input
                    type="file"
                    className="hidden"
                    name="imageGif"
                    onChange={(e) => handleChange(e)}
                  />
                </label>
              </div>
              <img
                className="hidden lg:flex sm:w-24 sm:h-24 lg:w-40 md:h-40 2xl:w-60 2xl:h-60"
                src={minionRight}
                alt=""
              />
            </div>
            <div className="text-center text-white/50 w-full mt-5 mx-auto">
              <p className="text-center text-[1.2rem]">Or if you prefer</p>
            </div>
            <div className="w-[95%]  flex flex-col justify-center mx-auto mt-5 bg-white/50 text-[#00A3FF] py-4 gap-y-3">
              <p className="w-[95%] mx-auto text-xl xl:text-4xl font-bold">
                Paste a URL
              </p>
              <input
                className="w-[95%] mx-auto h-[2rem]"
                type="text"
                name="imageGifUrl"
                onChange={handleChangeForm}
                value={gifData.imageGifUrl}
              />
            </div>
            <div className="flex w-[95%] mb-10 gap-8">
              <div className="w-1/2 2xl:w-1/3">
                <p className="text-2xl font-bold text-white mt-4 mb-2">
                  Name<span className="text-xl text-red-600">*</span>
                </p>
                <input
                  className="border-b border-white/50 focus:border-blue-500 outline-none bg-transparent w-full text-white"
                  type="text"
                  name="nameGif"
                  onChange={handleChangeForm}
                  value={gifData.nameGif}
                />
              </div>
              <div className="w-1/2 2xl:w-1/3 mt-4">
                <label className="text-2xl font-bold text-white ">
                  Gif type<span className="text-xl text-red-600">*</span>
                </label>
                <select
                  className="w-full h-[2rem] rounded text-BlueMain"
                  name="typeGif"
                  onChange={handleChangeForm}
                >
                  <option value="Smiling">Smiling</option>
                  <option value="Love">Love</option>
                  <option value="Party">Party</option>
                </select>
              </div>
              <div className="2xl:flex justify-end w-1/3 hidden items-end">
                <div className="">
                  <button
                    className="border border-white/50 text-white/50 px-4 py-1 rounded mr-4 hover:text-white hover:border hover:border-white"
                    onClick={() => setModalShow(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="bg-[#63BEF1] border border-white text-white px-4 py-1 rounded hover:bg-green-600"
                    onClick={handleSubmit}
                  >
                    Upload GIF
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center 2xl:hidden w-full mb-6">
              <div className="">
                <button
                  className="border border-white/50 text-white/50 px-4 py-1 rounded mr-4 hover:text-white hover:border hover:border-white"
                  onClick={() => setModalShow(false)}
                >
                  Cancelar
                </button>
                <button
                  className="bg-[#63BEF1] border border-white text-white px-4 py-1 rounded hover:bg-green-600"
                  onClick={handleSubmit}
                >
                  Upload GIF
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalNewGif;

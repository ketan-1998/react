import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const useGif = (tag) => {
  const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=1s5iKo6X0aOOCalxAutdvdQfs6UECLsM`;
  const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=1s5iKo6X0aOOCalxAutdvdQfs6UECLsM&tag=${tag}`;
  const [gif, setGif] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const getGif = async () => {
    setShowLoader(true);
    try {
      const output = await axios.get(tag ? tagUrl : randomUrl);
      const { data } = output;
      const img = data.data.images.downsized_large.url;
      setGif(img);
    } catch (e) {}
    setShowLoader(false);
  };

  useEffect(() => {
    getGif();
  }, []);
  return { gif, showLoader, getGif };
};

export default useGif;

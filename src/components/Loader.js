import React from "react";

const Loader = () => {
  return (
    <>
      <lottie-player
        src="https://assets1.lottiefiles.com/packages/lf20_2KNQ1X.json"
        background="transparent"
        speed="1"
        style={{width: "300px", height: "300px"}}
        loop
        autoplay
      ></lottie-player>
    </>
  );
};

export default Loader;
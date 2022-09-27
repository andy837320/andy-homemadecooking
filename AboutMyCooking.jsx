import React, { useRef } from "react";

const AboutMyCooking = () => {
  const videoRef = useRef();

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handlePlay = () => {
    videoRef.current.play();
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full bg-gray-400 ">
      <div className="py-2 flex flex-col items-center justify-center gap-8  ml-4  md:mt-4">
        <div className="flex  mt-7 flex-row gap-12 rounded-2xl ">
          <button
            type="button"
            className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:min-w-[12px] px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
            onClick={handlePlay}
          >
            Play
          </button>
          <button
            type="button"
            className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:min-w-[12px] px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
            onClick={handlePause}
          >
            Pause
          </button>
        </div>
        <video width="700" height="800" ref={videoRef} mt-7>
          <source src="/Videos/CookingVideo.mp4" />
        </video>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <p className="text-base ml-8 text-yellow-800 md:text-left md:w-[80%] text-left ">
          Hello this is Anindita(Andy), I am Software Developer(full stack),have
          plethora of passion to create and develope Web & Mobile application
          using new technology.Cooking,painting, writing,baking,dancing are my
          hobbies,spending my time with cooking is like an art for me. I am
          sharing one of my cooking video with you guys! Please feel free to
          share your views for my Kitchen.All sorts of Indian cooking and baking
          cakes, cupcakes,cookies are my favorite past time. I am delivering my
          homemade foods very pocket friendly rate,you can reach out me at
          4806782108.
        </p>
      </div>
    </section>
  );
};

export default AboutMyCooking;

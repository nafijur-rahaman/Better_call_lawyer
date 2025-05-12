import React from "react";

const Banner = () => {
  return (
    <div className="max-w-full xl:max-w-[1200px] 2xl:max-w-[1500px] mx-auto ">
      <div
        className="hero h-[500px] rounded-xl"
        style={{
          backgroundImage: "url(/banner-img-1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay rounded-xl"></div>
        <div className="hero-content text-neutral-content  text-center  w-full">
          <div className="max-w-md flex flex-col items-center justify-center">
            <h1 className="mb-5 text-5xl font-bold w-[700px]">
              It avoids subjective claims or exaggeration that might raise red
              flags legally
            </h1>
            <p className="mb-5 w-[700px] ">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience. Whether it's
              a routine checkup or urgent consultation, book appointments in
              minutes and receive quality care you can trust. et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

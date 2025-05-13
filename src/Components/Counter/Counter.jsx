import React from "react";
import CountUp, { useCountUp } from 'react-countup';

const Counter = () => {

  useCountUp({
    ref: 'counter',
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });  
  return (
    <div className="max-w-full xl:max-w-[1200px] 2xl:max-w-[1500px] mx-auto mt-10  mb-20">
   
      <div className="heading">
        <h1 className="text-4xl font-bold text-center">
          We Provide Best Law Services
        </h1>
        <p className="w-2/4 mx-auto py-3 text-[#0F0F0F80]">
          We have a good team of lawyers, we will provide you with the best
          services.
        </p>
      </div>

      <div className="counter-card-container grid  content-center  w-full   mt-5">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-15">
          <div className="counter-card  bg-[#C4C4C460] w-[250px] p-5 flex flex-col items-start justify-center rounded-lg">
            <div className="img">
              <img src="success-doctor.png" alt="" />
            </div>
            <div className="counter-elements">
              <h1 className="text-3xl font-bold mt-2"> <CountUp enableScrollSpy end={100} />+</h1>
              <p className="text-sm text-[#0F0F0F90] ">Total Lawyer</p>
            </div>
          </div>
          <div className="counter-card bg-[#C4C4C460] w-[250px] p-5 flex flex-col items-start justify-center rounded-lg">
            <div className="img">
              <img src="success-patients.png" alt="" />
            </div>
            <div className="counter-elements">
              <h1 className="text-3xl font-bold mt-2"> <CountUp enableScrollSpy end={199} />+</h1>
              <p className="text-sm text-[#0F0F0F90] ">Total Lawyer</p>
            </div>
          </div>
          <div className="counter-card bg-[#C4C4C460] w-[250px] p-5 flex flex-col items-start justify-center rounded-lg">
            <div className="img">
              <img src="success-review.png" alt="" />
            </div>
            <div className="counter-elements">
              <h1 className="text-3xl font-bold mt-2"> <CountUp enableScrollSpy end={300} /> +</h1>
              <p className="text-sm text-[#0F0F0F90] ">Total Lawyer</p>
            </div>
          </div>
          <div className="counter-card bg-[#C4C4C460] w-[250px] p-5 flex flex-col items-start justify-center rounded-lg">
            <div className="img">
              <img src="success-staffs.png" alt="" />
            </div>
            <div className="counter-elements">
              <h1 className="text-3xl font-bold mt-2"> <CountUp enableScrollSpy end={50} /> +</h1>
              <p className="text-sm text-[#0F0F0F90] ">Total Lawyer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;

import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { getData, setData } from "../../Utils/SetData";
import Swal from "sweetalert2";

const LawyerDetails = () => {
  
  const [available, setAvailable] = useState(false);
  let navigate = useNavigate();
  const data = useLoaderData();
  const { license_number } = useParams();
  const lawyerId = license_number;
  const lawyer = data.find((lawyer) => lawyer.license_number === lawyerId);
  // console.log(lawyer);
  const {
    id,
    image,
    name,
    speciality,
    availability,
    experience,
    fee,
  } = lawyer;


  useEffect(() => {
    const presentDayNum = new Date().getDay();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const presentDay = days[presentDayNum];
    if (availability.includes(presentDay)) {
      setAvailable(true);
    }
  });
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleAppointment = (id) => {
    if (available === false) {
      Toast.fire({
        icon: "error",
        title: "Lawyer is not available today",
      });
    } else {
      if (setData(id) === false) {
        Toast.fire({
          icon: "error",
          title: "Lawyer Already Booked",
        });
      } else {
        Toast.fire({
          icon: "success",
          title: "Lawyer Booked Successfully",
        });

        navigate("/bookings");
      }
    }
  };

  return (
    <div className="max-w-full xl:max-w-[1200px] 2xl:max-w-[1500px] mx-auto">
      <div className="heading bg-[#C4C4C460] border border-[#0F0F0F30] rounded-xl py-15 ">
        <h1 className="text-4xl font-bold text-center">
          Lawyer’s Profile Details
        </h1>
        <p className="w-2/4 mx-auto py-3 text-[#0F0F0F80]">
          We have a good team of lawyers, we will provide you with the best
          lawyer.
        </p>
      </div>

      <div className="lawyer-details-container border border-[#0F0F0F30] rounded-xl p-8 mb-10 mt-10">
        <div className="lawyer-card flex gap-10 justify-start items-center ">
          <div className="lawyer-img">
            <img className="w-50 h-50" src={image} alt="" />
          </div>
          <div className="details">
            <h2 className="bg-[#176AE520] w-50 rounded-xl text-[#176AE5] px-3 py-1">
              {experience} Experience
            </h2>
            <h1 className="text-2xl font-bold">{name}</h1>
            <div className="flex gap-5">
              <h2 className="text-sm  text-[#14141460]">{speciality}</h2>
              <h2 className="text-sm text-[#14141460]">
                License No: {license_number}
              </h2>
            </div>
            <div className="flex gap-5 justify-start items-center">
              <h1 className="text-lg text-[#14141470] font-semibold ">
                Availability:{" "}
              </h1>
              {availability.map((availability, index) => {
                return (
                  <h2
                    key={index}
                    className="text-sm bg-[#FFA00020] px-3 py-1  rounded-lg text-[#FFA000]"
                  >
                    {availability}
                  </h2>
                );
              })}
            </div>
            <h2 className="text-lg">
              <span className="font-semibold text-[#14141470] ">
                {" "}
                Consultation Fee:
              </span>{" "}
              <span className="text-[#0EA106] font-semibold">Taka: {fee}</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="lawyer-booking-container border border-[#0F0F0F30] rounded-xl p-8 mb-20 mt-10">
        <div className="heading bg-[#C4C4C460] border border-[#0F0F0F30] rounded-xl py-5 ">
          <h1 className="text-xl font-bold text-center">Book Your Lawyer</h1>
        </div>
        <div className="w-full h-px border-t border-dashed border-[#14141430] my-4"></div>
        <div className="app-card">
          <div className="availability flex justify-between  items-center">
            <h1 className="text-xl font-bold">Availability</h1>
            <div className="flex gap-5">
              {available ? (
                <h2 className="text-sm bg-[#09982F20] px-5 py-1  rounded-2xl text-[#09982F]">
                  Lawyer Available Today
                </h2>
              ) : (
                <h2 className="text-sm bg-[#ff000020] px-5 py-1  rounded-2xl text-[#ff0000]">
                  Lawyer Not Available today
                </h2>
              )}
            </div>
          </div>

          <div className="disclaimer bg-[#FFA00020] flex gap-2 px-5 py-1 text-[#FFA000] w-[980px] rounded-2xl  mt-5">
            <img src="/Frame.png" alt="" />
            <p className="text-sm">
              Due to high patient volume, we are currently accepting
              appointments for today only. We appreciate your understanding and
              cooperation.
            </p>
          </div>

          <div
            onClick={() => handleAppointment(id)}
            className="booking-card  text-center "
          >
            <button className="bg-[#0EA106] w-full px-5 py-2  rounded-2xl cursor-pointer font-semibold text-white mt-5">
              Book Appointment Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerDetails;

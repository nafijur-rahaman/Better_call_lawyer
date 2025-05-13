import React, { use, useContext, useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { getData, removeData } from "../../Utils/SetData";
import { useLoaderData } from "react-router";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
import Swal from "sweetalert2";

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Booking = () => {

  const [lawyer, setLawyer] = useState([]);
  const lawyerData = useLoaderData();

//   toast code

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

// remove lawyer appointments

  const handleRemoveData=(id)=>{
    removeData(id);
    setLawyer(lawyer.filter((lawyer) => lawyer.id !== id));
    Toast.fire({
        icon: "success",
        title: "Lawyer Removed Successfully",
      });

  }



  const chartData = lawyer.map((data)=>{
    return {
        name:data.name,
        uv:data.fee
    }
  } )

//   console.log(chartData)
    

//loading data for chart and bookings

  useEffect(() => {
    const localBookData = getData();
    const bookLawyer = lawyerData.filter((data) =>
      localBookData.includes(data.id)
    );
    setLawyer(bookLawyer);
  }, []);

  return (

    

    <div className="max-w-full xl:max-w-[1200px] 2xl:max-w-[1500px] mx-auto ">
      <div className="chart-container flex justify-center items-center border p-5 mb-20 border-[#14141420] rounded-lg">
        {
            chartData.length>0 &&         <BarChart
          width={1300}
          height={400}
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" axisLine={false} stroke="#8884d8" />
          <YAxis axisLine={false}  />
          <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
        }
      </div>

      <div className="lawyer-booking-container border border-[#0F0F0F30] rounded-xl p-8 mb-20 mt-10">
        <div className="heading  ">
          <h1 className="text-xl font-bold text-center">
            My Today Appointments
          </h1>
          <p className="text-center text-[#0F0F0F80]">
            Our platform connects you with verified, experienced Lawyers across
            various specialties — all at your convenience.
          </p>
        </div>
{
  lawyer.map((data, index) => (
    <div key={index} className="app-card border border-[#0F0F0F30] rounded-xl p-5 mt-5">
      <div className="availability flex justify-between items-center">
        <div>
          <h1 className="text-lg font-bold">{data.name}</h1>
          <p className="text-[#0F0F0F90]">{data.speciality}</p>
        </div>
        <div className="flex gap-5">
          <h2 className="text-sm px-5 py-1 text-[#14141490] rounded-2xl">
            Appointment Fee: {data.fee} BDT
          </h2>
        </div>
      </div>

      <div className="booking-card text-center">
        <button onClick={() => handleRemoveData(data.id)} className="text-[#ff0000] border border-[#ff0000] w-full px-5 py-2 rounded-3xl cursor-pointer font-semibold mt-5">
          Cancel Appointment Now
        </button>
      </div>
    </div>
  ))
}


      </div>
    </div>
  );
};

export default Booking;

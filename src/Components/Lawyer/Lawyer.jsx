import { Link } from "react-router";


const Lawyer = ({lawyer}) => {
// console.log(lawyer)

const {image,name,speciality,experience,license_number,fee}= lawyer;
    return (
 
            <div className='lawyer-card flex gap-10 p-5 border border-[#0F0F0F30] w-[550px] rounded-xl'>
        <div className="img rounded-lg">
            <img className='w-40 h-40 rounded-xl' src={image} alt="" />
        </div>

        <div className="info space-y-1">
            <div className="headings flex gap-5">
                <h2 className='bg-[#09982F20]  rounded-xl text-[#09982F] px-5 py-1'>Available</h2>
                <h2 className='bg-[#176AE520] rounded-xl text-[#176AE5] px-3 py-1'>{experience} Experience</h2>
            </div>
            <h1 className='font-bold text-xl py-1'>{name}</h1>
            <h2 className='text-lg  text-[#0F0F0F60]'>{speciality}</h2>
            <h2 className='text-lg text-[#0F0F0F70]'>License No:  {license_number}</h2>
            <Link reloadDocument to={`/lawyer-details/${lawyer.license_number}`}>
                <button className='border border-[#176AE520] text-[#176AE5]  font-semibold cursor-pointer w-full py-1 rounded-lg '>View Details</button>
            </Link>
        </div>
        </div>
    );
};

export default Lawyer;
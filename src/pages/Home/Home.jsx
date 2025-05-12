import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Lawyers from '../../Components/Lawyers/Lawyers';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data=useLoaderData();

    return (
        <div>
          <Banner></Banner>
          <Lawyers lawyers={data}></Lawyers>
        </div>
    );
};

export default Home;
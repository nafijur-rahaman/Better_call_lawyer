import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Lawyers from '../../Components/Lawyers/Lawyers';
import { useLoaderData } from 'react-router';
import Counter from '../../Components/Counter/Counter';

const Home = () => {
    const data=useLoaderData();

    return (
        <div>
          <Banner></Banner>
          <Lawyers lawyers={data}></Lawyers>
          <Counter></Counter>
        </div>
    );
};

export default Home;
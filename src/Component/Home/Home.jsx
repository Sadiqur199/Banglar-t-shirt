import React from 'react';
import {useLoaderData} from 'react-router-dom'

const Home = () => {
const tshirts = useLoaderData()
console.log(tshirts)
  return (
    <div>
      <p>This is T-Shirt:{tshirts.length}</p>
    </div>
  );
};

export default Home;
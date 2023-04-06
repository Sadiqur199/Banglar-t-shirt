import React from 'react';
import {useLoaderData} from 'react-router-dom'
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
const tshirts = useLoaderData()
  return (
    <div className='home-container'>
      <div className='tshirts-container'>
      {
        tshirts.map(tshirt=><Tshirt
        
          key={tshirt._id}
          tshirt = {tshirt} 
        >
        </Tshirt>)
      }
      </div>

      <div className='t-shirt-summery'>
        <h1>Cart page</h1>
      </div>
    </div>
  );
};

export default Home;
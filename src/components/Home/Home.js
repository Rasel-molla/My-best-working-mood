import React from 'react';
import Catagoris from '../Catagoris/Catagoris';

const Home = (props) => {

    return (
        <div  style={{border:'1px solid grey'}}>
           <h1>This is  Home:{}</h1> 
           <Catagoris ></Catagoris>
        </div>
    );
};

export default Home;
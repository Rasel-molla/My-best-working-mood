import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../App';

const Header = (props) => {

// const { count,setCount }= props;
const [category ,setCategory] = useContext(CategoryContext);

    return (
        <div>


            <h1>This is Header: {category}</h1>
            {/* <button onClick={() => setCategory(category + 1) }> laptop</button> */}
            <button onClick={() => setCategory('laptop') }> laptop</button>
            <button onClick={() => setCategory('mobile')}> mobile</button>
            <button onClick={() => setCategory('camera')}> camera</button>

        </div>
    );
};

export default Header;
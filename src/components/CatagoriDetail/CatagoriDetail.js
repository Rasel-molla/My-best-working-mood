import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CatagoriDetail = (props) => {
    

    const {name} = props.product;
    return (
        <div>
            <h5>Catagori is :{name}</h5>
            <p> Selated catagoris: {}</p>
        </div>
    );
};

export default CatagoriDetail;
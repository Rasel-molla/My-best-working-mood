import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CatagoriDetail from '../CatagoriDetail/CatagoriDetail';

const allProduct = [
    {name:'Lenovo', category:'laptop'} , {name:'Asus', category:'laptop' },
    {name:'samsang', category:'mobile'} , {name:'Oppo', category:'mobile' },
    {name:'Nikon', category:'camera'} , {name:'Canon', category:'camera' },

]
const Catagoris = () => {
 
    const [category,setCategory]  = useContext(CategoryContext);
  
  const [products,setProducts] = useState([]);
  useEffect(() =>{
const matchedProducts = allProduct.filter(pd =>pd.category === category && category.toLowerCase());
setProducts(matchedProducts);

} ,[category])


    return (
        <div>
            <h3>This is Catagoris :{category}</h3>
           

            {
                products.map(pd =>  <CatagoriDetail product={pd}></CatagoriDetail>)
            }
        </div>
    );
};

export default Catagoris;
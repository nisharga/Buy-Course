import React, { useState } from 'react';
import './Course.css'
import Data from '../Data/Data'
import SingleCourse from '../SingleCourse/SingleCourse';
import Cart from '../Cart/Cart';


const Course = () => {
    const first10 = Data.slice(0, 13);
    const [data, setData] = useState(first10);
    
    const [cart, setCart] = useState([]);
    const AddProduct = (product) => {
        console.log('add product:-', product)
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="course">
            <div className="allCourses">
                {
                    data.map(data => <SingleCourse handle={AddProduct} val={data}></SingleCourse>)
                }
            </div>
            <div className="cart">
                <Cart val={cart}></Cart>
            </div>
        </div>
    );
};

export default Course;
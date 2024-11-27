import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useCart, useDispatchCart } from '../components/ContextReducer'



export default function Food() {

    const cart = useCart();
    let dispatch = useDispatchCart();
    const [fooddata, setFoodData] = useState([])
    const [qty, setQty] = useState(1)


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/food/getfooddata`)
            .then((response) => {
                if (Array.isArray(response.data)) {
                    setFoodData(response.data);
                } else {
                    console.error("Unexpected API response:", response.data);
                    setFoodData([]); // Fallback to an empty array
                }
            })
            .catch((err) => {
                console.error(err);
                setFoodData([]); // Set empty array on error
            });
    }, []);

    const handleAddToCart = async (fooddata, qty) => {

        // let food = []
        // for (const fooddata of cart) {
        //     if (fooddata.id === fooddata._id) {
        //         food = fooddata;
        //         break;
        //     }
        // }

        const totalPrice = fooddata.price * qty;
        await dispatch({
            type: 'ADD_TO_CART',
            payload: {
                id: fooddata._id,
                name: fooddata.name,
                price: fooddata.price, // You can change this to a selected price
                quantity: qty,
                totalPrice: totalPrice
            },
        });
        console.log('Added to cart:', fooddata);
    };



    return (

        <div>
            
            {fooddata.map((fooddata) => {
                
                return (
                    <div key={fooddata._id} className='btn btn-outline-white'>
                        <div className="card mt-6 bg-success text-white" style={{ "width": "18rem", "maxHeight": "360px" }}>
                            <img src={fooddata.img} className="card-img-top" alt="image" style={{ height: "120px", objectFit: "fill" }} />
                            <div className="card-body">
                                <h4 className="card-text"> {fooddata.restaurantName} </h4>
                                <h6 className="card-title"> {fooddata.name} </h6>
                                <p className="card-text"> {fooddata.descriptions} </p>
                                <div className='w-30'>
                                    <select className='m-2 h-15 bg-success rounded text-white'
                                        value={qty}
                                        onChange={(e) => setQty(Number(e.target.value))}>
                                        {Array.from(Array(10), (_, i) => (

                                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                                        ))}
                                    </select>

                                    <div className='m-2 h-100 bg-success rounded text-white'>
                                        Total: ${fooddata.price*qty}
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <button className="btn btn-primary justify-center ms-2" 
                                    onClick={() => handleAddToCart(fooddata, qty)}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


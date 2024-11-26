import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function Food() {

    const [fooddata, setFoodData] = useState([])
    const [foodCategory, setFoodCategory] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/food/getfooddata`)
            .then((response) => {
                if (Array.isArray(response.data)) {
                    setFoodData(response.data);
                } else {
                    console.error("Unexpected API response:", response.data);
                    setFoodData(); // Fallback to an empty array
                }
            })
            .catch((err) => {
                console.error(err);
                setFoodData(); // Set empty array on error
            });
    }, []);



    return (

        <div>

            {fooddata.map((fooddata) => {
                return (
                    <div key={fooddata._id} className='btn btn-outline-white'>
                        <div className="card mt-6 bg-success text-white" style={{ "width": "18rem", "maxHeight": "360px" }}>
                            <img src={fooddata.img} className="card-img-top" alt="image" style={{height: "120px", objectFit: "fill"}} />
                            <div className="card-body">
                                <h4 className="card-text"> {fooddata.restaurantName} </h4>
                                <h6 className="card-title"> {fooddata.name} </h6>
                                <p className="card-text"> {fooddata.descriptions} </p>
                                <div className='w-30'>
                                    <select className='m-2 h-15 bg-success rounded text-white'>
                                        <option value="options"> Individual: {fooddata.priceindividual} </option>
                                        <option value="options"> Menu: {fooddata.pricemenu} </option>
                                        <option value="options"> Regular: {fooddata.priceregular} </option>
                                        <option value="options"> Medium: {fooddata.pricemedium} </option>
                                        <option value="options"> Large: {fooddata.pricelarge} </option>
                                    </select>

                                </div>
                                <div>
                                    <Link to="/myorders" className="m-0.1 btn btn-primary" >Add to Myorders</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}


import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function Food() {

    const [foodData, setFooData] = useState([])

    useEffect(() => {
        axios.post(`http://localhost:5005/foodData`)
            .then((foodData) => {
                console.log(foodData.data)
                setFooData(foodData.data)
            })
            .catch((err) => console.log(err))
    }, [])



    return (

        <div>

            {foodData.map((foodData) => {
                return (
                    <div key={foodData._id} className='btn btn-outline-white'>
                        <div className="card mt-6 bg-success text-white" style={{ "width": "18rem", "maxHeight": "360px" }}>
                            <img src={foodData.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-text"> Restaurant Name: {foodData.restaurantData} </h4>
                                <h6 className="card-title"> Card title: {foodData.name} </h6>
                                <p className="card-text"> Description: {foodData.description} </p>
                                <div className='container w-100'>
                                    
                                    <select className='m-2 h-50 bg-success rounded text-white'>
                                        <option value="options"> Options: {foodData.foodOptions} </option>
                                    </select>
                                    <div>
                                        <Link to="/myorders" >Add to Myorders</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


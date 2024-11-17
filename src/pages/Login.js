import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
export default function Signup() {

  const navigate = useNavigate()

  const [userData, setUserData] = useState({ email: "", password: "" })

  const handleSubmit = async (e) => {
    /*Synthetic event*/
    e.preventDefault();

    axios.post(`${process.env.REACT_BACKEND_URL}auth/login`, { email: userData.email, password: userData.password })
      .then((res) => {
        console.log(userData.data)
        res.json(userData.data)
        navigate("/homepageafterlogin")
      })
      .catch((err) => {
        console.log(err)
        alert('User already exists')
      })

      axios.get(`${import.meta.env.REACT_BACKEND_URL}auth/user/:id`, { email: userData.email, password: userData.password })
      .then((res) => {
        console.log(userData.data)
        res.json(userData.data)
      })
      .catch((err) => {
        console.log(err)
        alert('User not found')
      })
  }

  const clickEvent = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }
  return (
    <form className='form-control btn-outline-dark me-2 fst-italic bg-success text-white'>
      <div className="mb-2">
        <label for="exampleInputEmail1" className="form-label">Email</label>
        <input type="email" placeholder='name@example.com' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" placeholder='123Example@' className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" for="exampleCheck1">Remeber me</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
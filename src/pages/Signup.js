import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default function Signup() {

  const [userData, setUserData] = useState({ name: "", email: "", password: "", location: "" })

  const handleSubmit = async (e) => {
    /*Synthetic event*/
    e.preventDefault();
   
    axios.post("http://localhost:5005/auth/signup", { email: userData.email, password: userData.password, location: userData.location, name: userData.name })
    .then((response)=>{
      console.log(response)
    })
    
  }

    const clickEvent = (event) => {
      setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    return (
      <div className='container'>
        <form onSubmit={handleSubmit} >
          <div className="col-md-4">
            <label htmlFor='validationCustom01' className="form-label">Name</label>
            <input type="text" className="form-control" name='name' value={userData.name} onChange={clickEvent} />
          </div>
          <div className="col-md-4">
            <label htmlFor='validationCustom02' className="form-label">Email</label>
            <input type="email" className="form-control" id="validationCustom03" name='email' value={userData.email} onChange={clickEvent} required />
          </div>
          <div className="col-md-4">
            <label htmlFor='validationCustom03' className="form-label">Password</label>
            <input type="password" className="form-control" id="validationCustom04" name='password' value={userData.password} onChange={clickEvent} required />
          </div>
          <div className="col-md-6">
            <label htmlFor='validationCustom04' className="form-label">Address</label>
            <input type="text" className="form-control" id="validationCustom03" name='location' value={userData.location} onChange={clickEvent} required />
          </div>
          <div className="col-12">
            <button className="m-3 btn btn-primary fst-italic" type="submit">Submit</button>
            <Link to="/login" className="m-3 btn btn-primary">Exiting user?</Link>
          </div>
        </form>
      </div>
    )
  
}

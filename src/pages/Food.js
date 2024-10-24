import React from 'react'

export default function Food() {
    return (
        <div className='btn btn-outline-white'>
            <div className="card mt-6 bg-success text-white" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src="https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" clclassNameass="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text.</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success rounded text-white'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-50 bg-success rounded text-white'>
                            <option value="individual">Individual</option>
                            <option value="menu">Menu</option>
                        </select>
                        <select className='m-2 h-100 bg-success rounded d-inline text-white'>
                            <option value="regular">Regular</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>

                        <div className='d-inline h-100 fs-6 text-white'>
                            Total Price
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

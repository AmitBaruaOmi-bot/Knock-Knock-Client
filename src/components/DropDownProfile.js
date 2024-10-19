import React from "react"

const DropDownProfile = () => {
  return (
    <div className="Dropdown">

      <button className="btn dropdown-toggle" href="#" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
      ☰ Menu
      </button>

      <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <li><button className="dropdown-item" href="#">My Profile</button></li>
        <li><button className="dropdown-item" href="#">My Orders</button></li>
        <li><button className="dropdown-item" href="#">Wallet</button></li>
        <li><button className="dropdown-item" href="#">Promotions</button></li>
        <li><button className="dropdown-item" href="#">Help</button></li>
        <li><button className="dropdown-item" href="#">Settings</button></li>
      </ul>
    </div>
  )
}

export default DropDownProfile
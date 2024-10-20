import React from "react"

const DropDownProfile = () => {
  return (
    <div className="Dropdown d-inline">

      <button className="btn fst-italic bg-success text-white">
        ☰ Menu
      </button>

      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="/myProfile">My Profile</a></li>
        <li><a className="dropdown-item" href="/myOrders">My Orders</a></li>
        <li><a className="dropdown-item" href="/wallet">Wallet</a></li>
        <li><a className="dropdown-item" href="/promotions">Promotions</a></li>
        <li><a className="dropdown-item" href="/help">Help</a></li>
        <li><a className="dropdown-item" href="/settings">Settings</a></li>
      </ul>
    </div>
  )
}

export default DropDownProfile
import React from 'react';
import { useCart, useDispatchCart } from '../components/ContextReducer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavbarForUsers from "../components/NavbarForUsers";

export default function Cart() {
  const cart = useCart(); // Access the cart state
  const dispatch = useDispatchCart(); // Access the dispatch function

  // Calculate total price of fooddata in the cart
  const calculateTotal = () => {
    return cart.reduce((total, fooddata) => {
      const price = Number(fooddata.price); // Ensure it's a number
      if (isNaN(price)) return total; // If price is not a valid number, return the total as is
      return total + price * fooddata.quantity;
    }, 0).toFixed(2);
  };

  const handleRemove = (fooddata) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: fooddata,
    });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const handleCheckout = async () => {
    const userEmail = localStorage.getItem('userEmail');
    const currentDate = new Date().toISOString();

    if (!cart.length) {
      alert('Your cart is empty.');
      return;
    }

    try {
      const payload = {
        email: userEmail,
        orderdate: currentDate,
        orderdata: cart // The cart array with items
      };

      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/order/orderData`, // Ensure REACT_APP_API_URL is set in your environment
        payload // Pass the payload to the backend
      );

      if (res.status === 200 || res.status === 201) {
        alert(res.data.message || 'Order placed successfully!');
        dispatch({ type: 'CLEAR_CART' }); // Clear cart only on success
      }
    } catch (err) {
      console.error('Error during checkout:', err.response?.data || err.message);
      alert(err.response?.data?.message || 'Failed to place order.');
    }
  };

  return (
    <div>
      <NavbarForUsers />
      <div className="container mt-5">
        <h2 className="mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((fooddata, index) => {
                  const price = Number(fooddata.price); // Ensure it's a number
                  const totalPrice = isNaN(price) ? 0 : price * fooddata.quantity; // Handle invalid price

                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{fooddata.name}</td>
                      <td>${price.toFixed(2)}</td>
                      <td>{fooddata.quantity}</td>
                      <td>${totalPrice.toFixed(2)}</td>
                      <td>
                        <button
                          className="nav-link fst-italic d-inline text-primary"
                          onClick={() => handleRemove(fooddata)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <h4 className="mt-4">Total: ${calculateTotal()}</h4>
            <div>
              <button className="btn btn-danger fst-italic d-inline mt-1 mx-1" onClick={handleClearCart}>
                Clear Cart
              </button>
              <button className='btn btn-success fst-italic d-inline mt-1 mx-1' onClick={handleCheckout}> Check-Out </button>
              <Link to='/homepageafterlogin' className='btn btn-success fst-italic d-inline mt-1 mx-1"' > Go Back</Link>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

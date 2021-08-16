import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const cart = props.cart;
    const uniqueCart = [...new Set(cart)];  // Remove duplicate player from the cart
    const totalSalary = uniqueCart.reduce((total, player)=> total + player.salary,0);
    const grandSalary = totalSalary.toFixed(2);
    return (
        <div className="cart">
            <h3><FontAwesomeIcon icon={faTrophy} /> My Team </h3>
            <h5> Team Member: {uniqueCart.length}</h5>
            {
                uniqueCart.map(player => <p>{player.name}</p>)
            }
            <p>Total Salary: ${grandSalary} </p>
        </div>
    );
};

export default Cart;
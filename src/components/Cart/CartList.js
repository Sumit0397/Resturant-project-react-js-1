import React from 'react';
import classes from './CartList.module.css';

const CartList = (props) => {
    return (
        <li key={props.item.id}>
            <div className={classes.list}>
                <div >
                    <span className={classes['list__data']}>{props.item.name}</span>
                    <span>${props.item.price}</span>
                    <div>x {props.item.quantity}</div>
                </div>
                    
                <div>
                    <button>-</button>
                    <button>+</button>
                </div>
            </div>
        </li>
    )
}

export default CartList;

import React from 'react'
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartList from './CartList';

const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const cartItem = <ul className={classes['cart-items']}>{cartCtx.items.map((item) => <CartList item={item}/>)}</ul>

    let totalPrice = 0;
    cartCtx.items.forEach((item) => {
        totalPrice = totalPrice + Number(item.price);
    })

    const hasItems = cartCtx.items.length > 0;

    return (
        <Modal onClose={props.onClose}>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalPrice.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart

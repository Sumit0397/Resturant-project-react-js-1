import React , {useState} from "react";
import CartContext from "./cart-context"

const CartProvider = (props) => {

    const [items, updateItems] = useState([]);

    const addItemToCarthandler = (item) => {
        updateItems([...items,item]);
     };

    const removeItemFromCartHandler = (id) => { };

    const contextData = {
        items: items,
        addItem: addItemToCarthandler,
        removeItem: removeItemFromCartHandler,
    }

    return (
        <CartContext.Provider value={contextData}>{props.children}</CartContext.Provider>
    )
}

export default CartProvider
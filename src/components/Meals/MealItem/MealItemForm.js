import { useContext } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../../store/cart-context';

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (event) => {
    event.preventDefault();
    // console.log(props.item);
    const quantity = document.getElementById('amount_' + props.id).value;
    cartCtx.addItem({ ...props.item, quantity: quantity });
  }
  

  return (
    <form className={classes.form} onSubmit={addToCartHandler}>
      <Input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type='submit'>+ Add</button>
    </form>
  );
};

export default MealItemForm;
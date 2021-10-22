import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      setAmountValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNum);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '10',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountValid && <p>Please enter a valid amount.</p>}
    </form>
  );
};

export default MealItemForm;

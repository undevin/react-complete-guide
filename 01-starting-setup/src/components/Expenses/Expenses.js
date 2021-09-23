import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
  const expenses = props.items;

  return (
    <Card className='expenses'>
      <ExpenseItem {...expenses[0]} />
      <ExpenseItem {...expenses[1]} />
      <ExpenseItem {...expenses[2]} />
      <ExpenseItem {...expenses[3]} />
    </Card>
  );
}

export default Expenses;

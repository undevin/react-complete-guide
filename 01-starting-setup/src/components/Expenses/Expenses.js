import { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');
  const expenses = props.items;
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
        <ExpenseItem {...expenses[0]} />
        <ExpenseItem {...expenses[1]} />
        <ExpenseItem {...expenses[2]} />
        <ExpenseItem {...expenses[3]} />
      </Card>
    </div>
  );
};

export default Expenses;

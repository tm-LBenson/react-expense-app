'use scrict';
import './ExpenseForm.css';
import { useState } from 'react';
const ExpenseForm = () => {
  //TODO Make Max date dynamic
  //TODO Attach labels to forms
  const [grabValueTitle, setValueTitle] = useState('');
  const [grabValueAmount, setValueAmount] = useState('');
  const [grabValueDate, setValueDate] = useState('');

  const titleEventHandler = (event) => {
    setValueTitle(event.target.value);
  };
  const amountEventHandler = (event) => {
    setValueAmount(event.target.value);
  };
  const dateEventHandler = (event) => {
    setValueDate(event.target.value);
  };
  const submitEventHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: grabValueTitle,
      amount: grabValueAmount,
      date: grabValueDate,
    };
    console.log(expenseData);
    setValueTitle('');
    setValueAmount('');
    setValueDate('');
  };
  return (
    <form onSubmit={submitEventHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={grabValueTitle}
            onChange={titleEventHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            onChange={amountEventHandler}
            value={grabValueAmount}
            type='number'
            min='0.01'
            step='0.01'
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            onChange={dateEventHandler}
            value={grabValueDate}
            type='date'
            min='2019-01-01'
            max='2023=12=31'
          />
        </div>
        <div className='new-expense__control'>
          <label>Add New Expense:</label>
          <button>Button</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
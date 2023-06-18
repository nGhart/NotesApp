import React from 'react';
import { useSelector } from 'react-redux';
import SingleExpense from './SingleExpense';
import Stack from 'react-bootstrap/Stack';

const ExpensesList = () => {
  const state = useSelector((state) => {
    return state.userReducer;
  });
  return (
    <>
      <Stack gap={2} style={{ marginTop: '5px' }}>
        {state.expenses.map((item) => {
          return <SingleExpense key={item.id} user={item} />;
        })}
      </Stack>
    </>
  );
};

export default ExpensesList;

import React from 'react';
import { useSelector } from 'react-redux';
import SingleNote from './SingleNote';

const Notes = () => {
  const state = useSelector((state) => {
    return state.userReducer;
  });
  return (
    <>
      {state.notes.map((item) => {
        return <SingleNote key={item.id} user={item} />;
      })}
    </>
  );
};

export default Notes;

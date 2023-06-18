import React from 'react';
// import EditNote from './EditNote';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../slice/appSlice';

function SingleNote(props) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="postit">
        <div className="postitHeader">
          <h6>{props.user.title}</h6>

          <span className="icons">
            {/* <EditNote user={props.user} editNote={props.editNote} /> */}
            <span
              className="material-symbols-outlined"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onClick={() => {
                dispatch(deleteNote(props.user.id));
              }}
            >
              close
            </span>
          </span>
        </div>
        <div className="postitBody" style={{ textDecoration: 'underline' }}>
          <p>{props.user.date}</p>
          {props.user.notetext}
        </div>
        <div className="postitFooter">
          <p style={{ fontWeight: 700 }}>B</p>
          <p style={{ textDecoration: 'underline' }}>U</p>
          <p style={{ fontStyle: 'italic' }}>I</p>
          <p style={{ textDecoration: 'line-through' }}>S</p>
        </div>
      </div>
    </>
  );
}

export default SingleNote;

import React, { useState } from 'react';
// import EditNote from './EditNote';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../slice/appSlice';

function SingleNote(props) {
  const dispatch = useDispatch();
  const [bold, setBold] = useState(true);
  const handleBold = () => {
    setBold(!bold);
  };
  const [underline, setUnderline] = useState(true);
  const handleUnderline = () => {
    setUnderline(!underline);
  };
  const [italic, setItalic] = useState(true);
  const handleItalic = () => {
    setItalic(!italic);
  };
  const [strike, setStrike] = useState(true);
  const handleStrike = () => {
    setStrike(!strike);
  };

  return (
    <>
      <div className="postit">
        <div className="postitHeader">
          <h6>{props.user.title}</h6>

          <span className="icons">
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
        <div className="postitBody" style={{}}>
          <p>{props.user.date}</p>
          <span
            style={{
              fontWeight: bold ? 'normal' : 700,
              textDecoration: underline ? 'none' : 'underline',
              fontStyle: italic ? 'normal' : 'italic',
              textDecorationLine: strike ? 'none' : 'line-through',
            }}
          >
            {props.user.notetext}
          </span>
        </div>
        <div className="postitFooter">
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              fontWeight: 700,
            }}
            onClick={handleBold}
          >
            <p>B</p>
          </button>
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              textDecoration: 'underline',
            }}
            onClick={handleUnderline}
          >
            U
          </button>
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              fontStyle: 'italic',
            }}
            onClick={handleItalic}
          >
            I
          </button>
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              textDecoration: 'line-through',
            }}
            onClick={handleStrike}
          >
            S
          </button>
        </div>
      </div>
    </>
  );
}

export default SingleNote;

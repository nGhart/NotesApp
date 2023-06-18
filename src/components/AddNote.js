import React, { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addNote } from '../slice/appSlice';
import { Button, Modal, Form } from 'react-bootstrap';

const AddNote = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [state, setState] = useState({
    title: '',
    date: '',
    notetext: '',
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      title: state.title,
      date: state.date,
      notetext: state.notetext,
      id: uuidv1(),
    };
    dispatch(addNote(newNote));
    setState({
      title: '',
      date: '',
      notetext: '',
    });
    handleClose();
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="addButton"
        style={{
          position: 'absolute',
          right: 0,
          bottom: '20%',
          margin: '15px',
          marginRight: '8px',
          width: '50px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'deeppink',
          // backgroundColor: 'rgb(11, 64, 73)',
          border: 'none',
          borderRadius: '50%',
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: '45px',
          }}
        >
          add
        </span>
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Form
          style={{ width: '100%', minHeight: '300px', padding: '10px' }}
          onSubmit={handleSubmit}
        >
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{
              height: '15%',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Form.Control
              type="text"
              placeholder="Note Title"
              maxLength={20}
              name="title"
              value={state.title}
              onChange={handleChange}
            />
            <Form.Control
              type="date"
              name="date"
              value={state.date}
              onChange={handleChange}
            ></Form.Control>
            <Button
              type="submit"
              style={{
                backgroundColor: 'transparent',
                color: 'grey',
                height: '100%',
                width: '10%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: 'none',
              }}
              className="saveButton"
            >
              <span className="material-symbols-outlined">done</span>
            </Button>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
            style={{ width: '90%' }}
          >
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Note"
              maxLength={330}
              style={{ height: '200px' }}
              onChange={handleChange}
              name="notetext"
              value={state.notetext}
            />
          </Form.Group>
        </Form>
      </Modal>
    </>
  );
};

export default AddNote;

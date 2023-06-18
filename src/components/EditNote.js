import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { editNote } from '../slice/appSlice';
import { Modal, Form, Button } from 'react-bootstrap';

const EditNote = (props) => {
  const [notes, setNotes] = useState({
    title: props.user.title,
    date: props.user.date,
    notetext: props.user.notetext,
    id: props.user.id,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setNotes({ ...notes, [e.target.name]: e.target.value });
  };
  const handleEdit = (e) => {
    e.preventDefault();
    let newNote = {
      title: notes.title,
      date: notes.date,
      notetext: notes.notetext,
      id: props.user.id,
    };
    dispatch(editNote({ id: props.user.id, newNote }));
    handleClose();
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow} className="material-symbols-outlined">
        edit
      </span>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Form
          style={{
            width: '100%',
            minHeight: '300px',
            padding: '10px',
          }}
          onSubmit={handleEdit}
        >
          <h1>edit</h1>
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
              value={notes.title}
              onChange={handleChange}
            />
            <Form.Control
              type="date"
              name="date"
              value={notes.date}
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
              name="notetext"
              value={notes.notetext}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal>
    </>
  );
};

export default EditNote;

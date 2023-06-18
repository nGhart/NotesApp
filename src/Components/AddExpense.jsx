import React from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../features/appSlice';
import { v1 as uuid } from 'uuid';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const AddExpense = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [state, setState] = useState({
    date: '',
    name: '',
    category: '',
    amount: '',
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      date: state.date,
      name: state.name,
      category: state.category,
      amount: state.amount,
      id: uuid(),
    };
    dispatch(addExpense(newExpense));
    setState({
      date: '',
      name: '',
      category: '',
      amount: '',
    });
    handleClose();
  };

  return (
    <>
      <Row>
        <Col xs={{ span: 10, offset: 1 }}>
          <Button
            variant="primary"
            onClick={handleShow}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: 'none',
              width: '100%',
              backgroundColor: 'cornflowerblue',
            }}
          >
            Add New Expense
          </Button>
        </Col>
      </Row>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Form
          style={{
            width: '100%',
            minHeight: '300px',
            margin: '5px',
            padding: '10px',
          }}
          onSubmit={handleSubmit}
        >
          <Form.Group
            className="mb-3"
            controlId="formBasicDate"
            style={{
              height: '15%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Form.Label
              style={{
                width: '30%',
              }}
            >
              Date
            </Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={state.date}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicExpense"
            style={{
              height: '15%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Form.Label
              style={{
                width: '30%',
              }}
            >
              Expense
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Expense"
              maxLength={20}
              name="name"
              value={state.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="exampleFormCategory"
            style={{
              height: '15%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Form.Label
              style={{
                width: '30%',
              }}
            >
              Category
            </Form.Label>
            <Form.Select
              aria-label="Default select example"
              type="text"
              onChange={handleChange}
              name="category"
              value={state.category}
            >
              <option> Choose Category</option>
              <option value="Food">Food and Drink</option>
              <option value="2">Transport</option>
              <option value="3">Utilities</option>
            </Form.Select>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
            style={{
              height: '15%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Form.Label
              style={{
                width: '30%',
              }}
            >
              Amount
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Amount"
              onChange={handleChange}
              name="amount"
              value={state.amount}
              required
            />
          </Form.Group>
          <Form.Group
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              border: 'none',
            }}
          >
            <Button
              type="submit"
              onClick={handleClose}
              style={{ width: '150px', backgroundColor: 'cornflowerblue' }}
            >
              <span>Cancel</span>
            </Button>
            <Button
              type="submit"
              style={{ width: '150px', backgroundColor: 'cornflowerblue' }}
            >
              <span>Add</span>
            </Button>
          </Form.Group>
        </Form>
      </Modal>
    </>
  );
};

export default AddExpense;

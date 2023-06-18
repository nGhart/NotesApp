import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddExpense from './Components/AddExpense';
import ExpensesList from './Components/ExpensesList';

function App() {
  return (
    <div className="App">
      <h1
        style={{
          textAlign: 'center',
          fontFamily: 'Gasoek One',
          margin: '15px',
        }}
      >
        Expense Tracker
      </h1>
      <Container>
        <Row>
          <Col xs={{ span: 10, offset: 1 }} sm={{ span: 4, offset: 4 }}>
            <AddExpense />
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 8, offset: 2 }}>
            <ExpensesList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

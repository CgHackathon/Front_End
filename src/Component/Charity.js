import { Button, Form } from "react-bootstrap";
import axios from 'axios';
import { useState, useEffect, useRef } from 'react'

function Charity() {

  const [email, setEmail] = useState("");
  const [amount1, setAmount] = useState(0);
  const getInputValueemail = (event) => {
    setEmail( event.target.value)
  };
  const getInputValueamount1 = (event) => {
    setAmount( event.target.value)
  };
  function submitDonation() {
    console.log(email);
    console.log(amount1);
    axios.post('http://localhost:8080/donation/donate', {charityName: email,amount: amount1 }).then((res) => {
      console.log(res);
    });
  }

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: '30vh' }}>
      <div className="row justify-content-center">
        <Form className="col-md-6 bg-danger text-white bg-opacity-25 mb-2 p-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name of charity</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={getInputValueemail} />
            <Form.Text className="text-white">
              We'll never share your name with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Money</Form.Label>
            <Form.Control type="text" placeholder="Amount" onChange={getInputValueamount1} />
          </Form.Group>
          <Button variant="danger" type="submit" onClick={submitDonation}>
            Send
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Charity;

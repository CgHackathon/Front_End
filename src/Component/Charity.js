import { Button, Form } from "react-bootstrap";
import axios from 'axios';
import { useState, useEffect, useRef } from 'react'

function Charity() {

  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);

  function submitDonation() {
    axios.post('http://localhost:8080/donation/donate', { email, amount }).then((res) => {
      console.log(res);
    });
  }

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: '30vh' }}>
      <div className="row justify-content-center">
        <Form className="col-md-6 bg-danger text-white bg-opacity-25 mb-2 p-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name of charity</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={event => setEmail(Object.assign(email, { "Email": event.target.value }))} />
            <Form.Text className="text-white">
              We'll never share your name with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Money</Form.Label>
            <Form.Control type="text" placeholder="Amount" onChange={event => setAmount(Object.assign(amount, { "Amount": event.target.value }))} />
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

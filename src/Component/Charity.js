import { Button, Form, Dropdown } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

function Charity() {
  const [PaymentShow, setPaymentShow] = useState(true);

  const [email, setEmail] = useState("");
  const [amount1, setAmount] = useState(0);
  const getInputValueemail = (event) => {
    setEmail(event.target.value);
  };
  const getInputValueamount1 = (event) => {
    setAmount(event.target.value);
  };
  const Donationshowing = () => {
    setPaymentShow(false);
  };
  const Paymentshowing = () => {
    setPaymentShow(true);
  };

  function submitDonation() {
    console.log(email);
    console.log(amount1);
    axios
      .post(
        "http://localhost:8080/donation/donate",
        { charityName: email, amount: amount1 },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <div className="col">
        <div className="row justify-content-center">
          <div
            className="btn-group  col-md-6 p-3"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              className="btn btn-danger w-15"
              onClick={Donationshowing}
            >
              Donation
            </button>
            <button
              type="button"
              className="btn btn-warning w-15"
              onClick={Paymentshowing}
            >
              Payment
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="btn-group  col-md-6 p-3 w-100 justify-content-center"
            role="group"
            aria-label="Basic mixed styles example"
          >
            {PaymentShow ? (
              <Form className="col-md-10 bg-danger text-white bg-opacity-25 mb-2 p-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name of charity</Form.Label>
                  <Dropdown>
                    <Dropdown.Toggle variant="danger" id="dropdown-basic">
                      Choose Insurance Company
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">ACIG</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Misr Insurance
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Allianz Life Egypt
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        AXA Life Egypt
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">GIG Egypt</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Card Id</Form.Label>
                  <Form.Control type="text" placeholder="Id" />
                </Form.Group>
                <Button variant="danger" type="button">
                  Confirm
                </Button>
              </Form>
            ) : (
              <Form className="col-md-10 bg-danger text-white bg-opacity-25 mb-2 p-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name of charity</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={getInputValueemail}
                  />
                  <Form.Text className="text-white">
                    We'll never share your name with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Money</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Amount"
                    onChange={getInputValueamount1}
                  />
                </Form.Group>
                <Button variant="danger" type="submit" onClick={submitDonation}>
                  Send
                </Button>
              </Form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charity;

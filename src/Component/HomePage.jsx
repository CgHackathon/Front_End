import React, { useEffect, useState } from "react";
// import companyLogo from "../images/back.jpg";
import companyLogo1 from "../Assets/back.jpg";
import Carousel from "react-elastic-carousel";
import { Button, Modal, Form } from "react-bootstrap";
import Sidebar from "./SideBar";

const HomePage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="col">
      <div className="row justify-content-center">
          <div className="btn-group  col-md-6 p-3" role="group" aria-label="Basic mixed styles example">
            <button type="button" className="btn btn-danger w-25">Get Reports</button>
            <button type="button" className="btn btn-warning w-25 ">Get Prescript </button>
            {/* <button type="button" className="btn btn-success w-25 ">Right</button> */}
        </div>
      </div>
    <div className="row">
      <Sidebar></Sidebar>
      <div className="col-md-8 mt-2">
        <div className="card text-center content bg-danger text-white bg-opacity-50">
          <h1 className="m-3 pt-3">Current Balance</h1>
          <div className="card-body">
            <div className="row">
              <div className="col-md-20">
                <h5>FULL Name</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="card text-center content bg-white text-white bg-opacity-25 mt-2">
          <h1 className="pt-3">Customer List</h1>
          <div className="card-body">
            <Carousel className="corssal">
              <div className="card" width="18rem">
                <img
                  src={companyLogo1}
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title text-dark">Card title</h5>
                  <p className="card-text text-dark">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Button variant="danger" onClick={handleShow}>
                    Launch demo modal
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Money Transfer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            Enter Amount of Transfer Money
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter Amount"
                          />
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Cancle
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Send
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};
export default HomePage;

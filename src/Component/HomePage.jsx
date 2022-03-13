import React, { useEffect, useState } from "react";
// import companyLogo from "../images/back.jpg";
import { Button, Modal, Form } from "react-bootstrap";
import Sidebar from "./SideBar";
import "./HomePage.css";
import axios from "axios";

const HomePage = () => {
  const initialValue = [];

  useEffect(() => {
    axios
      .get(`http://localhost:8080/user/getInfo`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res);
        setpageowner(res.data)
      });
    GetReports();
  }, []);

  const selectedrepo = {
    id: "",
    userName: "",
    from: { userName: "" },
    to: { userName: "" },
    time: "",
  };
  const selectedpageowner = {
    id: "",
    userName: "",
    from: { userName: "" },
    to: { userName: "" },
    time: "",
  };

  const [show, setShow] = useState(false);
  const [repo, setShowrepo] = useState(true);
  const [reportsList, setShowrepoList] = useState(initialValue);
  const [repoShow, setrepoShow] = useState(selectedrepo);
  const [pageowner, setpageowner] = useState(selectedpageowner);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloserepo = () => setShowrepo(false);
  const handleShowrepo = () => setShowrepo(true);

  const GetReports = () => {
    handleCloserepo();
    GetReportsaxios();
  };

  const GetReportsaxios = () => {
    axios
      .get(`http://localhost:8080/doctor/getReport`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res);
        setShowrepoList(res.data);
      });
  };
  const GetMessages = () => {
    handleShowrepo();
  };

  const Tablehandle = (e) => {
    console.log(e);
    setrepoShow(e);
    handleShow();
  };
  const reportsLists = reportsList.map((Report) => {
    return (
      <tr key={Report.id} onClick={() => Tablehandle(Report)}>
        <th scope="row">{Report.id}</th>
        <td>{Report.from.userName}</td>
        <td>{Report.to.userName}</td>
        <td>{Report.time}</td>
      </tr>
    );
  });
  return (
    <div className="col">
      <div className="row justify-content-center">
        <div
          className="btn-group  col-md-6 p-3"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger w-25"
            onClick={GetReports}
          >
            Get Reports
          </button>
          <button
            type="button"
            className="btn btn-warning w-25 "
            onClick={GetMessages}
          >
            Get Prescript{" "}
          </button>
          {/* <button type="button" className="btn btn-success w-25 ">Right</button> */}
        </div>
      </div>
      <div className="row">
        <Sidebar pageInfo={pageowner}></Sidebar>
        <div className="col-md-8 mt-2">
          <div className="card text-center content bg-white text-white bg-opacity-25 mt-2">
            {!repo ? (
              <h1 className="pt-3">Reports List</h1>
            ) : (
              <h1 className="pt-3">Messages List</h1>
            )}
            <div className="TableContent">
              <table className="table1">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">From</th>
                    <th scope="col">To</th>
                    <th scope="col">Time</th>
                  </tr>
                </thead>
                <tbody>{reportsLists}</tbody>
              </table>
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{!repo ? "Report" : "Message"}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder={repoShow.id}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>From</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder={repoShow.from.userName}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>To</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder={repoShow.to.userName}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Time</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder={repoShow.time}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>{!repo ? "Report" : "Message"}</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder={repoShow.content}
                      disabled
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
      </div>
    </div>
  );
};
export default HomePage;

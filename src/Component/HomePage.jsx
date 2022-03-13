import React, { useEffect, useState } from "react";
// import companyLogo from "../images/back.jpg";
import { Button, Modal, Form, InputGroup, FormControl } from "react-bootstrap";
import Sidebar from "./SideBar";
import "./HomePage.css";
import axios from "axios";
import ChatBot from "./ChatBot"
const HomePage = () => {
  const initialValue = [];

  useEffect(() => {
    axios
      .get(`http://localhost:8080/user/getInfo`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setpageowner(res.data);
        localStorage.setItem("type", res.data.role);
        console.log(localStorage.getItem("type"));
        GetReports();
      });
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
  const [GetReportShow, setGetReportShow] = useState(true);
  const [SendReportShow, setSendReportShow] = useState(false);
  const [SendPrescriptionShow, setSendPrescriptionShow] = useState(false);
  const [ChatShow, setChatShow] = useState(false);

  const [show, setShow] = useState(false);
  const [reportsList, setShowrepoList] = useState(initialValue);
  const [repoShow, setrepoShow] = useState(selectedrepo);
  const [pageowner, setpageowner] = useState(selectedpageowner);
  const [getRepoTo, setgetRepoTo] = useState("");
  const [getRepoToTextArea, setgetRepoToTextArea] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const GetReports = () => {
    setGetReportShow(true);
    setSendReportShow(false);
    setSendPrescriptionShow(false);
    setChatShow(false);
    GetReportsaxios();
  };

  const GetReportsaxios = () => {
    let st = "";
    console.log(localStorage.getItem("type"));
    if (localStorage.getItem("type") === "Student") {
      st = "student";
    } else if (localStorage.getItem("type") === "Patient") {
      st = "patient";
    } else {
      st = "doctor";
    }
    console.log(`http://localhost:8080/` + st + `/getReport`);
    axios
      .get(`http://localhost:8080/` + st + `/getReport`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setShowrepoList(res.data);
      }).catch(err => alert("Somthing Wrong"));
  };

  const GetPrescripts = () => {
    /** */
    setGetReportShow(false);
    setSendReportShow(false);
    setSendPrescriptionShow(false);
    setChatShow(false);
    /** */
    GetPrescriptsaxios();
  };

  const GetPrescriptsaxios = () => {
    let st = "";
    if (localStorage.getItem("type") === "Patient") {
      st = "patient";
    } else {
      st = "doctor";
    }
    axios
      .get(`http://localhost:8080/` + st + `/getPrescript`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setShowrepoList(res.data);
      }).catch(err => alert("Somthing Wrong"));
  };

  const Chat = () => {
    setGetReportShow(false);
    setSendReportShow(false);
    setSendPrescriptionShow(false);
    setChatShow(true);
  };

  const SendPrescript = () => {
    setGetReportShow(false);
    setSendReportShow(false);
    setSendPrescriptionShow(true);
    setChatShow(false);
  };
  const SendPresciptionssaxios = () => {
    axios
      .post(
        `http://localhost:8080/doctor/sendPrescript`,
        {
          from: pageowner.userName,
          to: getRepoTo,
          content: getRepoToTextArea,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        console.log(res);
        alert("Done")
      }).catch(err => alert("Patient Not Found"));
  };
  const SendReport = () => {
    setGetReportShow(false);
    setSendReportShow(true);
    setSendPrescriptionShow(false);
    setChatShow(false);
  };
  const SendReportaxios = () => {
    axios
      .post(
        `http://localhost:8080/student/sendReport`,
        {
          from: pageowner.userName,
          to: getRepoTo,
          content: getRepoToTextArea,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        console.log(res);
        alert("Operation Done")
      }).catch(err => alert("User Not Found"));
  };
  const Tablehandle = (e) => {
    setrepoShow(e);
    handleShow();
  };

  const getRepoToMessage = (event) => {
    setgetRepoTo(event.target.value);
  };

  const getRepoToTextAreaMessage = (event) => {
    setgetRepoToTextArea(event.target.value);
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
            className="btn btn-danger w-15"
            onClick={GetReports}
          >
            Get Reports
          </button>
          {localStorage.getItem("type") !== "Student" ? (
            <button
              type="button"
              className="btn btn-warning text-white  w-15 "
              onClick={GetPrescripts}
            >
              Get Prescript{" "}
            </button>
          ) : null}
          {localStorage.getItem("type") === "Doctor" ? (
            <button
              type="button"
              className="btn btn-danger w-15 "
              onClick={SendPrescript}
            >
              Send Prescript{" "}
            </button>
          ) : null}

          {localStorage.getItem("type") === "Student" ? (
            <button
              type="button"
              className="btn btn-warning w-15 "
              onClick={SendReport}
            >
              Send Report
            </button>
          ) : null}
          <button
            type="button"
            className="btn btn-success text-white w-15 "
            onClick={Chat}
          >
            Chat
          </button>
        </div>
      </div>
      <div className="row">
        <Sidebar pageInfo={pageowner}></Sidebar>
        
        <div className="col-md-8 mt-2">
          {ChatShow ?(
            <ChatBot/>
          ):(
              <div>
                {SendReportShow || SendPrescriptionShow ? (
            <Form className="text-white bg-white  bg-opacity-25 p-4">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>To</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="To userName"
                  onChange={getRepoToMessage}
                />
              </Form.Group>
              <InputGroup className="mb-3">
                <InputGroup.Text className="text-white bg-white  bg-opacity-25 p-4">
                  Report
                </InputGroup.Text>
                <FormControl
                  as="textarea"
                  aria-label="With textarea"
                  onChange={getRepoToTextAreaMessage}
                />
              </InputGroup>
              { SendReportShow ? (
                <Button variant="danger" onClick={SendReportaxios}>
                  Send Report
                </Button>
              ) : (
                <Button variant="danger" onClick={SendPresciptionssaxios}>
                  Send Presciption
                </Button>
              )}
            </Form>
          ) : (
            <div className="card text-center content bg-white text-white bg-opacity-25 mt-2">
              {GetReportShow ? (
                <h1 className="pt-3">Reports List</h1>
              ) : (
                <h1 className="pt-3">Prescript List</h1>
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
                  <Modal.Title>
                    {GetReportShow ? "Report" : "Message"}
                  </Modal.Title>
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
                      <Form.Label>
                        {GetReportShow ? "Report" : "Message"}
                      </Form.Label>
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
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Send
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          )}
              </div>
          )}
          
        </div>
      </div>
    </div>
  );
};
export default HomePage;

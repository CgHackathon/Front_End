import React from "react";
import { Dropdown } from "react-bootstrap";

const DropMenu = ({onclick1,onclick2,onclick3,onclick4}) => {
  const handleDropChoosePatient = () => {
    onclick1()
  }
  const handleDropChooseDoctor = () => {
    onclick2()
  }
  const handleDropChooseNurse = () => {
    onclick3()
  }
  const handleDropChooseStudent = () => {
    onclick4()
  }
  return (
    <Dropdown className="mt-3">
      <Dropdown.Toggle variant="danger" id="dropdown-basic">
        Specialization
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={handleDropChoosePatient}>Patient</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={handleDropChooseDoctor}>Doctor</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={handleDropChooseNurse}>Nurse</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={handleDropChooseStudent}>Student</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default DropMenu;

import { Button, Form } from "react-bootstrap";

function Charity() {
  return (
    <div className="row justify-content-center">
      <Form className="col-md-6 bg-danger text-white bg-opacity-25 mb-2 p-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name of chraity</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-white">
            We'll never share your name with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Money</Form.Label>
          <Form.Control type="text" placeholder="Amount" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
}

export default Charity;

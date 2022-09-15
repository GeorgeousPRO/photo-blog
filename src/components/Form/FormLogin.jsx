import React, { useContext, useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContext from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
const adminCreds = {
  email: "q@q",
  pass: "q",
};
export default function FormLogin() {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false);
  const [correct, setCorrect] = useState(true);
  const handleAuth = (e) => {
    e.preventDefault();
    if (email === adminCreds.email && pass === adminCreds.pass) {
      console.log("Logged in!");
      // setLoggedIn(true);
      setAuth({ loggedIn: true });
      navigate("/current");
    } else {
      console.log("Incorrect login or password!");
      setCorrect(false);
    }
    // console.log(email);
    // console.log(pass);
    console.log(auth);
    setEmail("");
    setPass("");
  };
  return (
    <Row className="mt-5">
      <Col xs={12} md={{ span: 4, offset: 4 }}>
        <Form onSubmit={handleAuth}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </Form.Group>
          {!correct && (
            <p style={{ color: "orange" }}>
              Incorrect email or password. Please try again!
            </p>
          )}
          <Button variant="outline-primary" type="submit">
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

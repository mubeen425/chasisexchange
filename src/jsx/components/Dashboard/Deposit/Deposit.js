import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  InputGroup,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
import PaymentForm from "../../BankDetails/BankDetails";

const Deposit = () => {
  const [showForm, setShowForm] = useState(false);
  const [body, setBody] = useState({});

  return (
    <>
      {showForm && (
        <PaymentForm
          setShowForm={setShowForm}
          Data={body}
          setBody={setBody}
          api="deposit"
        />
      )}
      <Container className="container ">
        <Row className="justify-content-md-center pt-3 m-4">
          <div className="col-xl-12">
            <div className="row main-card  m-2">
              <div className="col-xxl-9 col-lg-12">
                <div className="row">
                  <div className="col-xl-12 wow fadeInUp" data-wow-delay="1.5s">
                    <Card>
                      <Card.Body>
                        <Card.Title as="h2" className="mt-4 mb-3">
                          Fund Your Account
                        </Card.Title>
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Enter Email</Form.Label>
                            <Row>
                              <Col className="col-10">
                                <InputGroup>
                                  <Form.Control
                                    onChange={(e) =>
                                      (body.email = e.target.value)
                                    }
                                  />
                                </InputGroup>
                              </Col>
                            </Row>

                            <Form.Label>Enter Password</Form.Label>
                            <Row>
                              <Col className="col-10">
                                <InputGroup>
                                  <Form.Control
                                    onChange={(e) =>
                                      (body.password = e.target.value)
                                    }
                                  />
                                </InputGroup>
                              </Col>
                            </Row>
                            <Form.Label>Select Amount</Form.Label>
                            <Row>
                              <Col className="col-10">
                                <InputGroup>
                                  <Form.Control
                                    onChange={(e) =>
                                      (body.amount = e.target.value)
                                    }
                                  />
                                  <InputGroup.Text>$</InputGroup.Text>
                                </InputGroup>
                              </Col>
                              <Col className="col-2">
                                <Form.Select
                                  onChange={(e) =>
                                    (body.currency = e.target.value)
                                  }
                                >
                                  <option>USD</option>
                                  <option>AUD</option>
                                  <option>PKR</option>
                                </Form.Select>
                              </Col>
                            </Row>
                          </Form.Group>
                          <Row>
                            <Col>
                              <Form.Group className="mb-3">
                                <Form.Label className="mt-3">
                                  Payment Method
                                </Form.Label>
                                <Form.Select
                                  onChange={(e) =>
                                    (body.paymentMethod = e.target.value)
                                  }
                                >
                                  <option>Online Banking</option>
                                  <option>Crypto Payments</option>
                                </Form.Select>
                              </Form.Group>
                            </Col>
                          </Row>
                        </Form>

                        <Row className="text-center p-4 mb-1">
                          <span as="h6">
                            To complete your online bank deposit
                          </span>
                          <span>Please Click to attach your bank account </span>
                        </Row>

                        <Row className="text-center mb-5">
                          <hr className="mt-1" />
                          <Col>
                            <Button
                              size="lg"
                              className="mt-4"
                              onClick={() => {
                                setShowForm(!showForm);
                              }}
                              style={{ width: "400px" }}
                            >
                              ADD NEW BANK ACCOUNT
                            </Button>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Deposit;

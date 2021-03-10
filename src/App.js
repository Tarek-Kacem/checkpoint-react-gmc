import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Form>
          <Row>
            <Col md>
              <Form.Group controlID="formEmail">
                <Form.Label>Email Adress</Form.Label>
                <Form.Control type="email" placeholder="Exemple@email.com"/>
                <Form.Text className="text-muted">
                  We'll never share your email adress, trust us!
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md>
            <Form.Group controlID="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"/>
            </Form.Group>
            </Col>
          </Row>
          <Button className="mb-3" variant="secondary" type="submit">Login</Button>
        </Form>
        <Card className="mb-3" style={{ color: "#000" }}>
          <Card.Img src="https://picsum.photos/200/50"/>
          <Card.Body>
            <Card.Title>
              Welcome
            </Card.Title>
            <Card.Text>
              This is the best website ever !
            </Card.Text>
            <Button variant="primary">read More</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Books</Breadcrumb.Item>
          <Breadcrumb.Item>Movies</Breadcrumb.Item>
          <Breadcrumb.Item>Cars</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="success">See you</Alert>
        <Button>Leave</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;

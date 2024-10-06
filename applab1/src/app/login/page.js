"use client";
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
export default function Login() {
  return (
	<Container>
		<div style={{padding: "60px 0px 40px"}}>
			<h1>Login</h1>
		</div>
	<row>
		<Col sm={12} md={4}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit" style={{margin: "0px 30px 0px 0px"}}>
                Submit
              </Button>
			  <Link href="/register" passHref>
				<Button variant="primary">
					Register
				</Button>
          	</Link>
            </Form>
		</Col>
	</row>
	</Container>
  );
}

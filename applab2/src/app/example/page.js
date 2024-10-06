"use client";
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
export default function Login() {
  return (
	<Container>
		<div style={{padding: "60px 0px 40px"}}>
			<h1>Ejemplos de forms con React Boostrap</h1>
		</div>
		<Row>
			<Col>
				<h4 style={{padding: "20px 0px 20px"}}>Ejemplo de Select</h4>
				<Form.Select aria-label="Default select example">
					<option>Open this select menu</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</Form.Select>
			</Col>
			<Col>
				<h4 style={{padding: "20px 0px 20px"}}>Ejemplo de checkbox</h4>
				<Form>
					{['checkbox', 'radio'].map((type) => (
						<div key={`default-${type}`} className="mb-3">
						<Form.Check // prettier-ignore
							type={type}
							id={`default-${type}`}
							label={`default ${type}`}
						/>

						<Form.Check
							disabled
							type={type}
							label={`disabled ${type}`}
							id={`disabled-default-${type}`}
						/>
						</div>
					))}
				</Form>
			</Col>
		</Row>
		<Row>
			<Col>
				<h4 style={{padding: "20px 0px 20px"}}>Ejemplo de Range</h4>
				<Form.Label>Range</Form.Label>
				<Form.Range />
			</Col>
		</Row>
	</Container>
  );
}

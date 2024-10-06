"use client";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Post } from "../api/post";

function Posts() {
    return (
        <div className="App">
            <Container fluid>
				<h3 style={{padding: "20px 0px 20px 0px", textAling:"center"}}>Tipos de tecnologías para desarrollo</h3>
                <Container>
                    <Row>
                        {Post.map((v, i) => {
                            return <Cardd pitems={v} key={i} />;
                        })}
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default Posts;

function Cardd({ pitems }) {
    if (!pitems) {
        return null;
    }
    return (
        <div className="col-sm-3 my-3">
            <Col>
                <Card style={{ width: "18rem", height: "15rem"}}>
                    <Card.Body>
                        <Card.Title>{pitems.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {pitems.email}
                        </Card.Subtitle>
                        <Card.Text>{pitems.body}</Card.Text>
                        <Card.Link>{pitems.Product}</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
}
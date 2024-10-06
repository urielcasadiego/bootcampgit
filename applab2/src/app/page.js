
"use client";
import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

function Home() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
		<h1>Bienvenido al Projecto del ejercicio 3.</h1>
          <p className="mt-3">Esta es una aplicación de ejemplo usando Next.js y React-Bootstrap.</p>
          <Link href="/example" passHref>
            <Button variant="primary" size="lg" className="mt-4">
              Ingresar
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Col, Container, Row} from "react-bootstrap";
import SideBar from "./components/sideBar";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Container fluid className="p-0 overflow-hidden">
            <Row>
                <Col lg={3} className="p-0">
                    <SideBar></SideBar>
                </Col>
                <Col lg={9}>
                    <App/>
                </Col>
            </Row>
        </Container>
    </React.StrictMode>
);
reportWebVitals();

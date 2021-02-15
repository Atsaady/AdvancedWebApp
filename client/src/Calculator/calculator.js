import React from "react";
import "./calculator.scss"
import {Container, Jumbotron,Col,Row} from "react-bootstrap";

export default function Calculator() {
  return (
    <Jumbotron className="header">
    <Row>
    <Col>
    <h1 className="header__header">מחשבונים כלכליים</h1>
    <hr/>
    <p className="header__para">
    .לרשותכם מחשבונים כלכליים אשר יעזרו לכם לקבל נקודת מבט נוספת לגבי שווי חברות ,חישוב רווח ועוד
    </p>
    </Col>
    </Row>
  </Jumbotron>
    );
}

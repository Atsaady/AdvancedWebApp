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
      לרשותכם 3 מחשבונים אשר יעזרו לכם לנתח דוחות כספיים של חברה אשר בה אתם מתעניינים בהפן הפנדומנטלי שלה.
      חשוב שתשתמשו בשלושת המחשבונים לקבלת תמונה מלאה על מצב החברה.
      <hr/>
      חשוב להבין שמחשבונים אלה  לא באמת עובדים ואין באמור שום המלצה אלא רק לשם הפרוייקט 

    </p>
    </Col>
    </Row>
  </Jumbotron>
    );
}

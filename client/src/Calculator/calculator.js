import React from "react";
import "./calculator.scss"
import { Container, Jumbotron, Col, Row ,Form,Button} from "react-bootstrap";
import BalanceCalculator from "../Calculator/balanceClaculator.js";
import IncomeCalculator from "../Calculator/incomeCalculator";

export default function Calculator() {
  return (
    <>
    <Jumbotron className="header_jumbotron">
    <Row>
    <Col>
    <h1 className="header_jumbotron__header">מחשבונים כלכליים</h1>
    <hr/>
    <p className="header_jumbotron__para">
      לרשותכם שלושה מחשבונים אשר יעשו סדר ויעזרו בתהליך ניתוח דוחות כספיים של מניה, זיכרו מחשבונים אלא אינם תחליף או המלצה לקנייה או מכירה של מנייה אלא נועדו לשמש כעזר בלבד. חשוב מאוד שניתוח יתבצע בעזרת שלושת המחשבונים לקבלת תמונה מלאה ולא להסתמך על כל מחשבון בנפרד
    </p>
    </Col>
    </Row>
  </Jumbotron>
  <BalanceCalculator/>
  <IncomeCalculator/>
  
</>
    );
}

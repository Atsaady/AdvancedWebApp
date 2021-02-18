import React from "react";
import "./calculator.scss"
import { Container, Jumbotron, Col, Row, Nav } from "react-bootstrap";
import BalanceCalculator from "../Calculator/balanceClaculator.js";
import IncomeCalculator from "../Calculator/incomeCalculator";
import CashFlowCalculator from "../Calculator/cashFlowCalculator";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
export default function Calculator() {
  return (
    <>

      <BrowserRouter>
        <Jumbotron className="header_jumbotron">
          <Row>
            <Col>
              <h1 className="header_jumbotron__header">מחשבונים כלכליים</h1>
              <hr />
              <p className="header_jumbotron__para">
                לרשותכם שלושה מחשבונים אשר יעשו סדר ויעזרו בתהליך ניתוח דוחות כספיים של מניה, זיכרו מחשבונים אלא אינם תחליף או המלצה לקנייה או מכירה של מנייה אלא נועדו לשמש כעזר בלבד. חשוב מאוד שניתוח יתבצע בעזרת שלושת המחשבונים לקבלת תמונה מלאה ולא להסתמך על כל מחשבון בנפרד
    </p>
            </Col>
          </Row>
        </Jumbotron>
        <Container>
          <Nav fill variant="tabs" defaultActiveKey="/calc">
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                InveStocK
    </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3"><Link to="/calc/cashflowcalc">מחשבון תזרים מזומנים</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2"><Link to="/calc/incomecalc">מחשבון דוח רווח והפסד</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  href="/calc" ><Link to="/calc">מחשבון מאזן</Link></Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
        <Switch>
          <Route exact path="/calc">
            <BalanceCalculator />
          </Route>
          <Route  path="/calc/incomecalc">
            <IncomeCalculator/>
          </Route>
          <Route exact path="/calc/cashflowcalc">
            <CashFlowCalculator />
          </Route>
        </Switch>
      </BrowserRouter>


    </>
  );
}

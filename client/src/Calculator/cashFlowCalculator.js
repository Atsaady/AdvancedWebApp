import React from "react";
import { Container, Jumbotron, Col, Row, Form, Button } from "react-bootstrap";
import "./cashFlowCalculator.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Component } from "react";
import ReactPlayer from 'react-player';


class CashFlowCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opCash2018: "",
            opCash2019: "",
            opCash2020: "",
            investCah2018: "",
            investCah2019: "",
            investCah2020: "",
            freeCash2018: "",
            freeCash2019: "",
            freeCash2020: "",
            score: "0",
            idea: ""

        }

    }
    handleSubmit = (event) => {
        event.preventDefault();
        let calcScore = () => {
            let opCash = 0;
            if (this.state.opCash2018 < this.state.opCash2019 && this.state.opCash2019 < this.state.opCash2020) opCash = 2;
            if (((this.state.opCash2018 > this.state.opCash2019) && (this.state.opCash2019 < this.state.opCash2020)) || ((this.state.opCash2018 < this.state.opCash2019) && (this.state.opCash2019 > this.state.opCash2020))) { opCash = 1; }
            if (this.state.opCash2018 > this.state.opCash2019 && this.state.opCash2019 > this.state.opCash2020) opCash = 0;
            let investCah = 0;
            if (this.state.investCah2018 < this.state.investCah2019 && this.state.investCah2019 < this.state.investCah2020) investCah = 2;
            if ((this.state.investCah2018 > this.state.investCah2019 && this.state.investCah2019 < this.state.investCah2020) || (this.state.investCah2018 < this.state.investCah2019 && this.state.investCah2019 > this.state.investCah2020)) investCah = 1;
            if (this.state.investCah2018 > this.state.investCah2019 && this.state.investCah2019 > this.state.investCah2020) investCah = 0;
            let freeCash = 0;
            if (this.state.freeCash2018 < this.state.freeCash2019 && this.state.freeCash2019 < this.state.freeCash2020) freeCash = 2;
            if ((this.state.freeCash2018 > this.state.freeCash2019 && this.state.freeCash2019 < this.state.freeCash2020) || (this.state.freeCash2018 < this.state.freeCash2019 && this.state.freeCash2019 > this.state.freeCash2020)) freeCash = 1;
            if (this.state.freeCash2018 > this.state.freeCash2019 && this.state.freeCash2019 > this.state.freeCash2020) freeCash = 0;
            return opCash + freeCash + investCah;
        }
        let calcIdea = (temp) => {
            let ideaResult = "nothing";
            if (temp < 2) ideaResult = "חברה זבל איכס טפי";
            if (temp >= 2 && temp <= 4) ideaResult = "חברה סבבה,אפשר להמשיך למחשבונים האחרים";
            if (temp > 4) ideaResult = "להיט מאילנית ";
            return ideaResult;
        }
        let score = calcScore();
        let ideaResult = calcIdea(score);

        this.setState({
            score: score,
            idea: ideaResult
        });
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: Number.parseInt(event.target.value)
        });
    }
    render() {
        const { score } = this.state;
        const { idea } = this.state;
        return (
            <Container>
                <Jumbotron className="balance_jumbotron" fluid>
                    <h1 className="balance_jumbotron__header"><span style={{ fontFamily: "FontAwesome", fontSize: "2rem" }}>&#xf1ec;</span> מחשבון תזרים מזומנים</h1>
                    <hr />
                    <p className="balance_jumbotron__para">
                        דוח על תזרימי המזומנים (בקיצור דוח תזמ"ז) הוא דוח כספי המציג את המקורות לכספים שנתקבלו על ידי החברה והשימוש שנעשה בהם. הדוח מציג את היקף המזומנים שנבעו מפעילות שוטפת (או שימשו לפעילות שוטפת), המזומנים ששימשו לפעילות השקעה והמזומנים שנבעו מפעילות מימון. תנועת המזומנים של הישות החשבונאית מתייחסת לתקופה החשבונאית (שנה או רבעון). בשונה משאר הדוחות הכספיים שמייצגים פעילות על בסיס צבירה, הדוח על תזרימי המזומנים מציג פעילות על בסיס מזומן בלבד.
    </p>
                    <p className="balance_jumbotron__para">
                        מחשבון תזרים מזומנים הינו מחשבון שעוזר לנו להבין כסף נשאר מהרווח הנקי ולאן הוא נותב בחברה לדוגמא האם החברה השקיעה אותו בחברה בחזרה או שמה השקיעה את הכסף במקומות אחרים לדוגמה מיזוגים, השקעות פיננסיות או דיוידנדים, וכמובן המדד הכי חשוב כמה כסף פנוי נשאר לחברה בסופו של יום. במחשבון זה הציון המינימאלי הינו 0 והמקסימלי הינו 6
<br></br>
       שיהיה בהצלחה !!<br></br>
                        <a target="_blank" href="https://finance.yahoo.com/quote/AMZN/cash-flow?p=AMZN">נתונים לדוגמה באנגלית</a><br></br>
                        <a target="_blank" href="https://il.investing.com/equities/amazon-com-inc-cash-flow"> נתונים לדוגמא בעברית</a>
                    </p>
                    <hr />
                    <Form onSubmit={this.handleSubmit} className="balanceform">
                        <Form.Row  >
                            <Form.Group className="balanceform__group" as={Col} xs={4} controlId="formGridEmail">
                                <Form.Label className="balanceform__group__label">מזומנים נטו שנבעו מפעילות שוטפת 2018</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name="opCash2018" className="balanceform__group__input" type="number" placeholder=" הכנס מזומנים נטו שנבעו מפעילות שוטפת לשנת 2018" />
                            </Form.Group>

                            <Form.Group as={Col} className="balanceform__group" xs={4} controlId="formGridPassword">
                                <Form.Label className="balanceform__group__label">מזומנים נטו שנבעו מפעילות שוטפת 2019</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name="opCash2019" className="balanceform__group__input" type="number" placeholder="הכנס מזומנים נטו שנבעו מפעילות שוטפת לשנת 2019" />
                            </Form.Group>

                            <Form.Group as={Col} className="balanceform__group" xs={4} controlId="formGridPassword">
                                <Form.Label className="balanceform__group__label">מזומנים נטו שנבעו מפעילות שוטפת 2020</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name="opCash2020" className="balanceform__group__input" type="number" placeholder="הכנס מזומנים נטו שנבעו מפעילות שוטפת לשנת 2020" />
                            </Form.Group>
                        </Form.Row>


                        <Form.Row  >
                            <Form.Group className="balanceform__group" as={Col} xs={4} controlId="formGridEmail">
                                <Form.Label className="balanceform__group__label">מזומנים נטו ששימשו לפעילות השקעה 2018 (נא לכתוב את הסכום ללא המינוס)</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name="investCah2018" className="balanceform__group__input" type="number" placeholder="הכנס מזומנים לפעילות השקעה לשנת 2018" />
                            </Form.Group>

                            <Form.Group as={Col} className="balanceform__group" xs={4} controlId="formGridPassword">
                                <Form.Label className="balanceform__group__label">מזומנים נטו ששימשו לפעילות השקעה 2019 (נא לכתוב את הסכום ללא המינוס)</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name="investCah2019" className="balanceform__group__input" type="number" placeholder="הכנס מזומנים לפעילות השקעה לשנת 2019" />
                            </Form.Group>

                            <Form.Group as={Col} className="balanceform__group" xs={4} controlId="formGridPassword">
                                <Form.Label className="balanceform__group__label">מזומנים נטו ששימשו לפעילות השקעה 2020 (נא לכתוב את הסכום ללא המינוס)</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name="investCah2020" className="balanceform__group__input" type="number" placeholder="הכנס מזומנים לפעילות השקעה לשנת 2020" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row  >
                            <Form.Group className="balanceform__group" as={Col} xs={4} controlId="formGridEmail">
                                <Form.Label className="balanceform__group__label"> תזרים מזומנים פנוי 2018</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name="freeCash2018" className="balanceform__group__input" type="number" placeholder="הכנס תזרים מזומנים פנוי לשנת 2018" />
                            </Form.Group>

                            <Form.Group as={Col} className="balanceform__group" xs={4} controlId="formGridPassword">
                                <Form.Label className="balanceform__group__label">תזרים מזומנים פנוי 2019</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name="freeCash2019" className="balanceform__group__input" type="number" placeholder=" הכנס תזרים מזומנים פנוי לשנת 2019" />
                            </Form.Group>

                            <Form.Group as={Col} className="balanceform__group" xs={4} controlId="formGridPassword">
                                <Form.Label className="balanceform__group__label">2020 תזרים מזומנים פנוי</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name="freeCash2020" className="balanceform__group__input" type="number" placeholder="הכנס תזרים מזומנים פנוי לשנת 2020" />
                            </Form.Group>
                        </Form.Row>
                        <Col xs="auto" className="my-5 text-center">
                            <Button type="submit">ראה תוצאה</Button>
                        </Col>
                    </Form>
                    <hr />
                    <h1 className="score">{score} : התוצאה היא </h1>
                    <h1 className="score"> : דעתינו (לא המלצה) היא</h1>
                    <h1 className="score">{idea}</h1>
                    <hr />
                    <h1 style={{ textAlign: 'center' }} > הסבר קצר על איך לקרוא דוח תזרים מזומנים </h1>
                    <ReactPlayer controls="true" style={{ display: 'block', margin: 'auto' }} url='https://www.youtube.com/watch?v=wlI_jV30lTM' />
                </Jumbotron>
            </Container>
        );
    }
}

export default CashFlowCalculator

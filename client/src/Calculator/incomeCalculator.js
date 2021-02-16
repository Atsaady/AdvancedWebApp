import React from "react";
import { Container, Jumbotron, Col, Row ,Form,Button} from "react-bootstrap";
import "./incomeCalculator.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Component } from "react";

class IncomeCalculator extends Component  {
    constructor(props){
        super(props);
        this.state={
            cash2018:"",
            cash2019:"",
            cash2020:"",
            opIncome2018:"",
            opIncome2019:"",
            opIncome2020:"",
            netIncome2018:"",
            netIncome2019:"",
            netIncome2020:"",
            score:"0",
            idea:""

        }

    }
   handleSubmit= (event) =>{
        event.preventDefault();
        let calcScore = () =>{
            let cash=0;
            if(this.state.cash2018 < this.state.cash2019 && this.state.cash2019 < this.state.cash2020) cash=2;
            if((this.state.cash2018 > this.state.cash2019 && this.state.cash2019 < this.state.cash2020) || (this.state.cash2018 < this.state.cash2019 && this.state.cash2019 > this.state.cash2020)) cash=1;
            if(this.state.cash2018 > this.state.cash2019 && this.state.cash2019 > this.state.cash2020) cash=0;
            let opIncome=0;
            if(this.state.opIncome2018 < this.state.opIncome2019 && this.state.opIncome2019 < this.state.opIncome2020) opIncome=2;
            if((this.state.opIncome2018 > this.state.opIncome2019 && this.state.opIncome2019 < this.state.opIncome2020) || (this.state.opIncome2018 < this.state.opIncome2019 && this.state.opIncome2019 > this.state.opIncome2020)) opIncome=1;
            if(this.state.opIncome2018 > this.state.opIncome2019 && this.state.opIncome2019 > this.state.opIncome2020) opIncome=0;
            let  netIncome=0;
            if(this.state. netIncome2018 < this.state. netIncome2019 && this.state. netIncome2019 < this.state. netIncome2020)  netIncome=2;
            if((this.state. netIncome2018 > this.state. netIncome2019 && this.state. netIncome2019 < this.state. netIncome2020) || (this.state. netIncome2018 < this.state. netIncome2019 && this.state. netIncome2019> this.state. netIncome2020))  netIncome =1;
            if(this.state. netIncome2018 > this.state. netIncome2019 && this.state. netIncome2019 > this.state. netIncome2020)  netIncome=0;
            return cash +  netIncome + opIncome;
        } 
        let calcIdea = (temp) =>{
            let ideaResult="nothing";
            if(temp < 2) ideaResult="חברה זבל איכס טפי";
            if(temp >= 2 && temp <=4) ideaResult="חברה סבבה,אפשר להמשיך למחשבונים האחרים";
            if(temp > 4) ideaResult="להיט מאילנית ";
            return ideaResult;
        }
        let score =calcScore();
        let ideaResult=calcIdea(score);

        this.setState({
            score:score,
            idea:ideaResult
        });
   }

   handleInputChange = (event) =>{
       this.setState({
            [event.target.name]: Number.parseInt(event.target.value)
       });
   }
    render(){
        const {score} = this.state;
        const {idea} = this.state;
        return ( 
    <Container>
  <Jumbotron className="balance_jumbotron" fluid> 
    <h1 className="balance_jumbotron__header"><span style={{fontFamily: "FontAwesome" ,fontSize:"2rem"}}>&#xf1ec;</span> מחשבון רווח והפסד</h1>
    <hr/>
    <p className="balance_jumbotron__para">
    דוח רווח והפסד מציג את תוצאות פעילות החברה לתקופת זמן מוגדרת (רבעון, חצי שנה, 9 חודשים או שנה). דוח רווח והפסד מציג את סכומי המכירות/השירותים שניתנו/הכנסות אחרות בניכוי ההוצאות והעלויות, שהיו כרוכות בפעילות החברה. התוצאה הספית היא הרווח/הפסד הנקי לאותה שנה.
    </p>
    <p className="balance_jumbotron__para"> 
      מחשבון רווח והפסד הינו מחשבון שעוזר לנו לנתח את הצמיחה ואת יעילות החברה, כלומר בדוח רווח והפסד ניתן להשוות כמה החברה מכניסה "הביתה" לאחר כלל ההוצאות התפעול ומה נשאר לחברה להמשך השקעה. במחשבון זה הציון המינימאלי הינו 0 והמקסימלי הינו 6 <br></br>
       שיהיה בהצלחה !!<br></br>
         <a target="_blank" href="https://finance.yahoo.com/quote/AMZN/financials?p=AMZN">נתונים לדוגמה באנגלית</a><br></br>
         <a target="_blank" href="https://il.investing.com/equities/amazon-com-inc-income-statement"> נתונים לדוגמא בעברית</a> 
    </p>
    <hr/>
  <Form onSubmit={this.handleSubmit} className="balanceform">
  <Form.Row  >
    <Form.Group className="balanceform__group" as={Col} xs={4} controlId="formGridEmail">
      <Form.Label className="balanceform__group__label">הכנסות 2018</Form.Label>
      <Form.Control onChange={this.handleInputChange} name="cash201820  " className="balanceform__group__input" type="number" placeholder="הכנס הכנסות לשנת 2018" />
    </Form.Group>

    <Form.Group as={Col} className="balanceform__group" xs={4} controlId="formGridPassword">
      <Form.Label className="balanceform__group__label">הכנסות 2019</Form.Label>
      <Form.Control onChange={this.handleInputChange} name="cash2019" className="balanceform__group__input" type="number" placeholder="הכנס הכנסות לשנת 2019" />
    </Form.Group>

    <Form.Group as={Col} className="balanceform__group" xs={4} controlId="formGridPassword">
      <Form.Label className="balanceform__group__label">הכנסות 2020</Form.Label>
      <Form.Control onChange={this.handleInputChange} name="cash2020" className="balanceform__group__input" type="number" placeholder="הכנס הכנסות לשנת 2020" />
    </Form.Group>
  </Form.Row>


  <Form.Row  >
    <Form.Group className="balanceform__group" as={Col} xs={4} controlId="formGridEmail">
      <Form.Label className="balanceform__group__label"> רווח תפעולי 2018</Form.Label>
      <Form.Control onChange={this.handleInputChange} name="opIncome2018" className="balanceform__group__input" type="number" placeholder="הכנס את הרווח התפעולי לשנת 2018" />
    </Form.Group>

    <Form.Group as={Col} className="balanceform__group" xs={4} controlId="formGridPassword">
      <Form.Label className="balanceform__group__label">רווח תפעולי 2019</Form.Label>
      <Form.Control onChange={this.handleInputChange} name="opIncome2019"  className="balanceform__group__input" type="number" placeholder="הכנס את הרווח התפעולי לשנת 2019" />
    </Form.Group>

    <Form.Group as={Col} className="balanceform__group" xs={4} controlId="formGridPassword">
      <Form.Label className="balanceform__group__label"> 2020 רווח תפעולי</Form.Label>
      <Form.Control onChange={this.handleInputChange} name="opIncome2020"  className="balanceform__group__input" type="number" placeholder="הכנס את הרווח התפעולי לשנת 2020" />
    </Form.Group>
  </Form.Row>

  <Form.Row  >
    <Form.Group className="balanceform__group" as={Col} xs={4} controlId="formGridEmail">
      <Form.Label className="balanceform__group__label">סה"כ רווח נקי 2018</Form.Label>
      <Form.Control onChange={this.handleInputChange} name="netIncome2018" className="balanceform__group__input" type="number" placeholder="הכנס רווח נקי לשנת 2018" />
    </Form.Group>

    <Form.Group as={Col} className="balanceform__group" xs={4} controlId="formGridPassword">
      <Form.Label className="balanceform__group__label">סה"כ רווח נקי 2019</Form.Label>
      <Form.Control onChange={this.handleInputChange} name="netIncome2019" className="balanceform__group__input" type="number" placeholder=" הכנס רווח נקי לשנת 2019" />
    </Form.Group>

    <Form.Group as={Col} className="balanceform__group" xs={4} controlId="formGridPassword">
      <Form.Label className="balanceform__group__label">סה"כ רווח נקי 2020</Form.Label>
      <Form.Control onChange={this.handleInputChange} name="netIncome2020" className="balanceform__group__input" type="number" placeholder="הכנס רווח נקי לשנת 2020" />
    </Form.Group>
  </Form.Row>
  <Col xs="auto" className="my-5 text-center">
      <Button type="submit">ראה תוצאה</Button>
    </Col>
  </Form>
  <hr/>
  <h1 className="score">{score} : התוצאה היא </h1>
  <h1 className="score"> : דעתינו (לא המלצה) היא</h1>
  <h1 className="score">{idea}</h1>
</Jumbotron>
</Container>
  );
}
}

export default IncomeCalculator

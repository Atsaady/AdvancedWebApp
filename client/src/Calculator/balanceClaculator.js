import React from "react";
import { Component } from "react";
import { Container, Jumbotron, Col, Row ,Form,Button} from "react-bootstrap";
import "./balanceCalculator.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "font-awesome/css/font-awesome.min.css";
import ReactPlayer from 'react-player';

class BalanceCalculator extends Component  {
    constructor(props){
        super(props);
        this.state={
            currentAssets:"",
            currentLiabilities:"",
            cash2018:"",
            cash2019:"",
            cash2020:"",
            liabilities2018:"",
            liabilities2019:"",
            liabilities2020:"",
            equity2018:"",
            equity2019:"",
            equity2020:"",
            score:"0",
            idea:""

        }

    }
   handleSubmit= (event) =>{
        event.preventDefault();
        let calcScore = () =>{
            let divdenum=0;
            divdenum = this.state.currentAssets/this.state.currentLiabilities;
            if(divdenum < 1) divdenum=0;
            if(divdenum >= 1 & divdenum <= 2 ) divdenum=1;
            if(divdenum > 2) divdenum=2;
            let cash=0;
            if(this.state.cash2018 < this.state.cash2019 && this.state.cash2019 < this.state.cash2020) cash=2;
            if((this.state.cash2018 > this.state.cash2019 && this.state.cash2019 < this.state.cash2020) || (this.state.cash2018 < this.state.cash2019 && this.state.cash2019 > this.state.cash2020)) cash=1;
            if(this.state.cash2018 > this.state.cash2019 && this.state.cash2019 > this.state.cash2020) cash=0;
            let equity=0;
            if(this.state.equity2018 < this.state.equity2019 && this.state.equity2019 < this.state.equity2020) equity=2;
            if((this.state.equity2018 > this.state.equity2019 && this.state.equity2019 < this.state.equity2020) || (this.state.equity2018 < this.state.equity2019 && this.state.equity2019 > this.state.equity2020)) equity=1;
            if(this.state.equity2018 > this.state.equity2019 && this.state.equity2019 > this.state.equity2020) equity=0;
            let Liabilities=0;
            if(this.state.liabilities2018 < this.state.liabilities2019 && this.state.liabilities2019 < this.state.liabilities2020) Liabilities=0;
            if((this.state.liabilities2018 > this.state.liabilities2019 && this.state.liabilities2019 < this.state.liabilities2020) || (this.state.liabilities2018 < this.state.liabilities2019 && this.state.liabilities2019> this.state.liabilities2020)) Liabilities =1;
            if(this.state.liabilities2018 > this.state.liabilities2019 && this.state.liabilities2019 > this.state.liabilities2020) Liabilities=2;
            return cash + Liabilities + equity + divdenum;
        } 
        let calcIdea = (temp) =>{
            let ideaResult="nothing";
            if(temp < 3) ideaResult="חברה זבל איכס טפי";
            if(temp >= 3 && temp <=6) ideaResult="חברה סבבה,אפשר להמשיך למחשבונים האחרים";
            if(temp > 6) ideaResult="להיט מאילנית ";
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
    <h1 className="balance_jumbotron__header"><span style={{fontFamily: "FontAwesome" ,fontSize:"2rem"}}>&#xf1ec;</span>מחשבון מאזן</h1>
    <hr/>
    <p className="balance_jumbotron__para">
    המאזן מייצג את המצב הכספי של חברה, כפי שהיה ביום מסוים , כלומר, תאריך סיום רבעון או תאריך סוף שנה. המאזן המודפס מחולק לשני צדדים:
מצד ימין מוצגים הנכסים, ידוע גם בשם "אקטיב". בצד זה מוצגים הסחורות והרכוש, שבבעלות החברה וכן כספים שאחרים חייבים לחברה וטרם נגבו. מצד שמאל מוצגים ההתחייבויות וההון העצמי,ידוע גם בשם "פאסיב". בצד זה מוצגות כל ההתחייבויות, שעל החברה לפרוע וכל הזכאים כגון ספקים להם חייבת החברה כסף. ההון העצמי כולל את השקעות בעלי המניות בחברה, הסכום שלגביו החברה אחראית כלפי בעלי מניותיה. סך שני הצדדים תמיד שווה ("סך המאזן").
    </p>
    <p className="balance_jumbotron__para"> 
       מחשבון מאזן הינו מחשבון חשוב ביותר כאשר נרצה לבחון מנייה לטווח ארוך. אפשר וגם רצוי לראות במחשבון זה דרישת סף לבדיקת חברה לטווח הארוך יש להכניס את הנתונים כמו שהם כתובים בדוח (זה לא משנה עם הדוח כתוב באלפים או במליונים בדולרים או בשקלים) ולבדוק כאשר 0 זה הציון המינימלי שאפשר לקבל ו8 הציון המקסימלי <br></br>
       שיהיה בהצלחה !!<br></br>
         <a target="_blank" href="https://finance.yahoo.com/quote/AMZN/balance-sheet?p=AMZN">נתונים לדוגמה באנגלית</a><br></br>
         <a target="_blank" href="https://il.investing.com/equities/amazon-com-inc-balance-sheet"> נתונים לדוגמא בעברית</a> 
    </p>
    <hr/>
  <Form onSubmit={this.handleSubmit} className="balanceform">
  <Form.Row  >
    <Form.Group className="balanceform__group" as={Col} xs={6} controlId="formGridEmail">
      <Form.Label className="balanceform__group__label">נכסים שוטפים</Form.Label>
      <Form.Control onChange={this.handleInputChange} name="currentAssets" className="balanceform__group__input" type="number" placeholder="הכנס נכסים שוטפים של השנה האחרונה" />
    </Form.Group>

    <Form.Group as={Col} className="balanceform__group" xs={6} controlId="formGridPassword">
      <Form.Label className="balanceform__group__label">התחיבויות שוטפות</Form.Label>
      <Form.Control onChange={this.handleInputChange} name="currentLiabilities" className="balanceform__group__input" type="number" placeholder="הכנס התחיבויות שוטפות של השנה האחרונה" />
    </Form.Group>
  </Form.Row>


  <Form.Row  >
    <Form.Group className="balanceform__group" as={Col} xs={4} controlId="formGridEmail">
      <Form.Label className="balanceform__group__label">מזומן 2018</Form.Label>
      <Form.Control onChange={this.handleInputChange} name="cash2018" className="balanceform__group__input" type="number" placeholder="הכנס כמות מזומנים לשנת 2018" />
    </Form.Group>

    <Form.Group as={Col} className="balanceform__group" xs={4} controlId="formGridPassword">
      <Form.Label className="balanceform__group__label">מזומן 2019</Form.Label>
      <Form.Control onChange={this.handleInputChange} name="cash2019" className="balanceform__group__input" type="number" placeholder="הכנס כמות מזומנים לשנת 2019" />
    </Form.Group>

    <Form.Group as={Col} className="balanceform__group" xs={4} controlId="formGridPassword">
      <Form.Label className="balanceform__group__label">מזומן לשנת 2020</Form.Label>
      <Form.Control onChange={this.handleInputChange} name="cash2020" className="balanceform__group__input" type="number" placeholder="הכנס כמות מזומנים לשנת 2020" />
    </Form.Group>
  </Form.Row>


  <Form.Row  >
    <Form.Group className="balanceform__group" as={Col} xs={4} controlId="formGridEmail">
      <Form.Label className="balanceform__group__label">התחיבויות שוטפות 2018</Form.Label>
      <Form.Control onChange={this.handleInputChange} name="liabilities2018" className="balanceform__group__input" type="number" placeholder="הכנס את כמות ההתחיבויות השוטפות לשנת 2018" />
    </Form.Group>

    <Form.Group as={Col} className="balanceform__group" xs={4} controlId="formGridPassword">
      <Form.Label className="balanceform__group__label">התחיבויות שוטפות 2019</Form.Label>
      <Form.Control onChange={this.handleInputChange} name="liabilities2019"  className="balanceform__group__input" type="number" placeholder="הכנס את כמות ההתחיבויות השוטפות לשנת 2019" />
    </Form.Group>

    <Form.Group as={Col} className="balanceform__group" xs={4} controlId="formGridPassword">
      <Form.Label className="balanceform__group__label">התחיבויות שוטפות 2020</Form.Label>
      <Form.Control onChange={this.handleInputChange} name="liabilities2020"  className="balanceform__group__input" type="number" placeholder="הכנס את כמות ההתחיבויות השוטפות לשנת 2020" />
    </Form.Group>
  </Form.Row>

  <Form.Row  >
    <Form.Group className="balanceform__group" as={Col} xs={4} controlId="formGridEmail">
      <Form.Label className="balanceform__group__label">סה"כ הון 2018</Form.Label>
      <Form.Control onChange={this.handleInputChange} name="equity2018" className="balanceform__group__input" type="number" placeholder="הכנס הון לשנת 2018" />
    </Form.Group>

    <Form.Group as={Col} className="balanceform__group" xs={4} controlId="formGridPassword">
      <Form.Label className="balanceform__group__label">סה"כ הון 2019</Form.Label>
      <Form.Control onChange={this.handleInputChange} name="equity2019" className="balanceform__group__input" type="number" placeholder=" הכנס הון לשנת 2019" />
    </Form.Group>

    <Form.Group as={Col} className="balanceform__group" xs={4} controlId="formGridPassword">
      <Form.Label className="balanceform__group__label">סה"כ הון 2020</Form.Label>
      <Form.Control onChange={this.handleInputChange} name="equity2020" className="balanceform__group__input" type="number" placeholder="הכנס הון לשנת 2020" />
    </Form.Group>
  </Form.Row>
  <Col xs="auto" className="my-5 text-center">
      <Button type="submit">ראה תוצאה</Button>
    </Col>
  </Form>
  <hr/>
  <h1 className="h1">{score} : התוצאה היא </h1>
  <h1 className="h1"> : דעתינו (לא המלצה) היא</h1>
  <h1 className="h1">{idea}</h1>

  <hr/>
  <h1 style={{textAlign:'center'}} > הסבר קצר על איך לקרוא מאזן</h1>
  <ReactPlayer controls="true"  style={{display:'block',margin:'auto'}} url='https://www.youtube.com/watch?v=7THNE8xEcHk&t=644s' />
</Jumbotron>
</Container>
  );
}
}

export default BalanceCalculator

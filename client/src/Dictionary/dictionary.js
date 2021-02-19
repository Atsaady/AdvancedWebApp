import React from "react";
import "./dictionary.scss"
import { Container, Jumbotron, Col, Row,Card } from "react-bootstrap";
import SearchForTerms from "../Components/SearchForTerms/SerchForTerms";
import termList from "../termsForSearch";
import { Component } from "react";
import OneLetterDic from "../Dictionary/OneLetterDic"



class Dictionary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letter: "א"
  }
  }
  changeLetter = (event) =>{
    this.setState({
      letter:event.target.name
    });
  }
  render() {
   
    return (
      <>
        <Jumbotron className="headerbox">
          <Row>
            <Col>
              <h1 className="headerbox__header">מילון מונחים כלכליים בשוק ההון</h1>
              <hr />
              <p className="headerbox__para">
                במילון זה תוכלו למצוא ולהעזר במושגים בסיסיים מעולם שוק ההון והחשבונאות אשר הכרחיים לניתוח נתונים פנדומנטלים של חברה מסויימת בשוק ההון, מושגים אלה חשובים מאוד להערכת שווי חברות
    </p>

            </Col>
          </Row>
          <Row>
            <div className="searchbox">
              <SearchForTerms items={termList}/>
            </div>
          </Row>
        </Jumbotron>
        <Container>
          <Card>
      
            <ul className="atozbox__ul">
              
              
               <li   className="atozbox__ul__li" ><a onClick={this.changeLetter}name="א" className="atozbox__ul__li__a" >א</a></li>
               <li  className="atozbox__ul__li" ><a onClick={this.changeLetter} name="ב" className="atozbox__ul__li__a" >ב</a></li>
               <li  className="atozbox__ul__li" ><a onClick={this.changeLetter} name="ג" className="atozbox__ul__li__a" >ג</a></li>
               <li  className="atozbox__ul__li" ><a onClick={this.changeLetter} name="ד" className="atozbox__ul__li__a" >ד</a></li>
               <li  className="atozbox__ul__li" ><a onClick={this.changeLetter} name="ה" className="atozbox__ul__li__a" >ה</a></li>
               <li  className="atozbox__ul__li" ><a onClick={this.changeLetter} name="ו" className="atozbox__ul__li__a" >ו</a></li>
               <li  className="atozbox__ul__li" ><a onClick={this.changeLetter} name="ז" className="atozbox__ul__li__a" >ז</a></li>
               <li  className="atozbox__ul__li" ><a onClick={this.changeLetter} name="ח" className="atozbox__ul__li__a" >ח</a></li>
               <li  className="atozbox__ul__li" ><a onClick={this.changeLetter}  name="ט"className="atozbox__ul__li__a" >ט</a></li>
               <li  className="atozbox__ul__li" ><a onClick={this.changeLetter} name="י" className="atozbox__ul__li__a" >י</a></li>
               <li  className="atozbox__ul__li" ><a onClick={this.changeLetter} name="כ" className="atozbox__ul__li__a" >כ</a></li>
               <li  className="atozbox__ul__li" ><a onClick={this.changeLetter} name="ל" className="atozbox__ul__li__a" >ל</a></li>
               <li  className="atozbox__ul__li" ><a onClick={this.changeLetter} name="מ" className="atozbox__ul__li__a" >מ</a></li>
               <li  className="atozbox__ul__li" ><a onClick={this.changeLetter} name="נ" className="atozbox__ul__li__a" >נ</a></li>
               <li  className="atozbox__ul__li" ><a onClick={this.changeLetter} name="פ" className="atozbox__ul__li__a" >פ</a></li>
               <li  className="atozbox__ul__li" ><a onClick={this.changeLetter} name="ע" className="atozbox__ul__li__a" >ע</a></li>
               <li  className="atozbox__ul__li" ><a onClick={this.changeLetter} name="ק" className="atozbox__ul__li__a" >ק</a></li>
               <li  className="atozbox__ul__li" ><a onClick={this.changeLetter} name="ר" className="atozbox__ul__li__a" >ר</a></li>
               <li  className="atozbox__ul__li" ><a onClick={this.changeLetter} name="ש" className="atozbox__ul__li__a" >ש</a></li>
               <li  className="atozbox__ul__li" ><a onClick={this.changeLetter} name="ת" className="atozbox__ul__li__a" >ת</a></li>
            </ul>
      
          </Card>
        </Container>
       
        <br/>
        <br/>
      <OneLetterDic Letter={this.state.letter} />
    
            
      </>
    );
  }
}


export default Dictionary
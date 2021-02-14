import React from "react";
import "./dictionary.scss"
import {Container, Jumbotron,Col,Row} from "react-bootstrap";
import SearchPage from "../Components/Searchbar/searchbar";
import stockslist from "../Components/stocksForSearch";
import { Namespace } from "socket.io";

export default function Dictionary() {
  var letters=['א','ב','ג','ד','ה','ו','ז','ח','ט','י','כ','ל','מ','נ','פ','ע','ק','ר','ש','ת']
  return (
    <>
  
    <Jumbotron className="headerbox">
    <Row>
    <Col>
    <h1 className="headerbox__header">מילון מונחים כלכליים בשוק ההון</h1>
    <hr/>
    <p className="headerbox__para">
   במילון זה תוכלו למצוא ולהעזר במושגים בסיסיים מעולם שוק ההון והחשבונאות אשר הכרחיים לניתוח נתונים פנדומנטלים של חברה מסויימת בשוק ההון, מושגים אלה חשובים מאוד להערכת שווי חברות
    </p>
  
    </Col>
    </Row>
    <Row>
    <div className="searchbox">   
    <SearchPage items={stockslist} searchText={" .. חפש נייר ערך  &#xF002"}/>
    </div>
    </Row>
  </Jumbotron>
  <Container>
    <div className="atozbox">
      <ul className="atozbox__ul">
        {letters.map(function(name,index) {
          return <li className="atozbox__ul__li" key={index} ><a className="atozbox__ul__li__a" >{name}</a></li>
        })}
      </ul>
    </div>
  </Container>
  
 
  </>
  );
}

import React from "react";
import "./dictionary.scss"
import { Container, Jumbotron, Col, Row,Card } from "react-bootstrap";
import { Component } from "react";
import axios from "axios"
import {Link} from "react-router-dom";


class OneLetterDic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Terms:''
  }
}
  componentDidMount = () =>{
      this.getTermData();
  }
  getTermData = () => {
      var a =26;
    axios.get(`http://localhost:5000/termsbyletter/${a}`).then((response) => {
      const data = response.data;
      this.setState({Terms:data});
      console.log("Data has been received !!");
    }).catch(() => {
      console.log("Data has nottttt been received !!")
    });
  }

  displayTerms = (allTerms) => {
    if(!allTerms.length) return null;

    return allTerms.map((Terms,index) =>(
      <div Key={index}>
       <Link><h3 style={{textAlign:'right'}} >{Terms.title}</h3></Link> 
      </div>
    ))

  };


  render() {
    return (
      <>


<Container>
        <Jumbotron>
          <h1 style={{textAlign:'right'}}>כל המונחים</h1>
          {this.displayTerms(this.state.Terms)}
          </Jumbotron>
        </Container>
       


      </>
    );
  }
}


export default OneLetterDic
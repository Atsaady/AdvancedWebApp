import React from "react";
import "./dictionary.scss"
import { Container, Jumbotron, Col, Row,Card } from "react-bootstrap";
import { Component } from "react";
import axios from "axios"
import {Link} from "react-router-dom";
import { set } from "mongoose";


class TermPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"",
      description:"",
      allTerms:""
      
  }
}
componentDidMount = () =>{
    this.getTermData();
    
}
getTermData = () => {
    var a =26;
  axios.get(`http://localhost:5000/terms`).then((response) => {
    const data = response.data;
    this.setState({Terms:data});
    console.log("Data has been received !!");
  }).catch(() => {
    console.log("Data has nottttt been received !!")
  });
}
displayTermByName = (allTerms) => {
    if(!allTerms.length) return null;
      let termsByname= allTerms.filter( item => item.title === this.props.name);
      alert(termsByname.title)
      this.setState({
        title:termsByname.title,
        description:termsByname.description
      })
  
  };
  render() {
    return (

          <Container>
              <Jumbotron>
                  <h1 style={{ textAlign: 'center' }}>{this.state.title} </h1>
                 <h1 style={{ textAlign: 'right' }} >תיאור</h1>
                 <h3 style={{ textAlign: 'right' }} >{this.state.description}</h3>
                { this.displayTermByName(this.state.allTerms)}
              </Jumbotron>
          </Container>

      );
  }
}


export default TermPage
import React from "react";
import "./dictionary.scss"
import { Container, Jumbotron, Col, Row,Card } from "react-bootstrap";
import SearchPage from "../Components/Searchbar/searchbar";
import stockslist from "../Components/stocksForSearch";
import { Component } from "react";
import axios from "axios"
import {Link} from "react-router-dom";


class AlllTermsDic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTerms:''
  }
}
  componentDidMount = () =>{
      this.getTermData();
  }
  getTermData = () => {
    axios.get("http://localhost:5000/terms").then((response) => {
      const data = response.data;
      this.setState({allTerms:data});
      console.log("Data has been received !!");
    }).catch(() => {
      console.log("Data has nottttt been received !!")
    });
  }

  displayTerms = (allTerms) => {
    if(!allTerms.length) return null;

    return allTerms.map((allTerms,index) =>(
      <div Key={index}>
       <Link><h3 style={{textAlign:'right'}} >{allTerms.title}</h3></Link> 
      </div>
    ))

  };


  render() {
    return (
      <>


<Container>
        <Jumbotron>
          <h1 style={{textAlign:'right'}}>כל המונחים</h1>
          {this.displayTerms(this.state.allTerms)}
          </Jumbotron>
        </Container>
       


      </>
    );
  }
}


export default AlllTermsDic
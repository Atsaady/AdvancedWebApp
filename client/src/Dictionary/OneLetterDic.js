import React from "react";
import "./dictionary.scss"
import { Container, Jumbotron } from "react-bootstrap";
import { Component } from "react";
import axios from "axios"


class OneLetterDic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: '',
      name: ''
    }
  }
  componentDidMount = () => {     //get the data from server when the page is up
    this.getTermData();
  }
  getTermData = () => {
    var a = 26;
    axios.get(`http://localhost:5000/terms`).then((response) => {      ////get the data from server 
      const data = response.data;
      this.setState({ terms: data });
      console.log("Data has been received !!");
    }).catch(() => {
      console.log("Data has nottttt been received !!")
    });
  }

  displayTerms = (allTerms) => {   //find all the terms that have first letter that simmlar to the clciked letter
    if (!allTerms.length) return null;
    let termsByLetter = allTerms.filter(item => item.firstLetter === this.props.Letter);

    return termsByLetter.map((termsByLetter, index) => (
      <div Key={index}>
        <h1  value={termsByLetter.title} style={{ textAlign: 'right', color:"darkblue"}} >{termsByLetter.title}</h1>
        <hr />
        <h2 style={{ textAlign: 'right',color:"darkblue" }} > : תיאור</h2>
        <h3  value={termsByLetter.title} style={{ textAlign: 'right',color:"darkblue" }} >{termsByLetter.description}</h3>
        <br></br>
      </div>
    ))

  };

  /* sendName = (index,allTerms) => { function for termpage componnet ignor it
     this.setState({
       name: allTerms[index].title
     });
   };*/
  render() {
    return (
      <>


        <Container>
          <Jumbotron>
            <h1 style={{ textAlign: 'center',color:"darkblue" }}> כל המונחים באות {this.props.Letter} </h1>
            <hr />
            {this.displayTerms(this.state.terms)}
          </Jumbotron>
        </Container>



      </>
    );
  }
}


export default OneLetterDic
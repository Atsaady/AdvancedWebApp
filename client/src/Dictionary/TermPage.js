import React, { useState,useEffect } from "react";
import "./dictionary.scss"
import { Container, Jumbotron, Col, Row,Card } from "react-bootstrap";
import { Component } from "react";
import axios from "axios"
import {Link} from "react-router-dom";
import { set } from "mongoose";
import { useParams } from "react-router-dom";


export default function TermPage(props)  {
 
  let { term } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  useEffect(() => {
  
    getTermData();
                
  },[]);

const getTermData = () => {
 axios.get(`http://localhost:5000/terms`).then((response) => {
    const data = response.data;
    displayTermByName(data);
    console.log("Data has been received !!");
  }).catch(() => {
    console.log("Data has nottttt been received !!")
  });
}
const displayTermByName = (allTerms) => {
    let temp = term;
    let title="fuk";
    let description=null;
    for (let index = 0; index < allTerms.length; index++) {
     if(allTerms[index].title == temp){
     title = allTerms[index].title;
     description= allTerms[index].description;
     };
    }
        setTitle(title);
        setDescription(description);
        
  };

    return (
   
          <Container>
              <Jumbotron>
                  <h1 style={{ textAlign: 'center' , color:"darkblue"}}>{title} </h1>
                  <hr/>
                 <h1 style={{ textAlign: 'right',color:"darkblue" }} >תיאור</h1>
                 <h3 style={{ textAlign: 'right' ,color:"darkblue"}} >{description}</h3>

                 <Link to="/dic">back</Link>
                 
              </Jumbotron>
          </Container>

      );
  }


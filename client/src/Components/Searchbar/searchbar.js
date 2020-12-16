import React from 'react';
import { MDBCol,MDBIcon,MDBBtn, MDBRow } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css';
import'mdbreact/dist/css/mdb.css';
import './searchbar.scss'



function searchbar() {
    
    return (
      <MDBRow>
      <MDBCol  md="6">
      <form className="form-inline mt-4 mb-4"   >
        <MDBIcon  icon="search" className="text-white"/>
        <input className="form-control form-control-sm ml-3 w-75 h-400" type="text" placeholder="Search stock here .." aria-label="Search" />
        <MDBBtn  gradient="blue" rounded >Search</MDBBtn>
      </form>
      
    </MDBCol>
    </MDBRow>
     
    );
}

export default searchbar;
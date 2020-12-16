import React from 'react';
import { MDBCol,MDBIcon,MDBBtn, MDBRow } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css';
import'mdbreact/dist/css/mdb.css';




function searchbar() {
    
    return (
      <MDBRow>
      <MDBCol  md="14">
      <form className="form-inline" >
        <MDBIcon  icon="search" className="text-white" />
        <input className="form-control form-control-sm ml-3" style={{backgroundColor: "transparent",height : '2.5rem',width:'30rem'}} type="text" placeholder="Search stock here .." aria-label="Search" />
        <MDBBtn style={{height : '2.5rem' , borderRadius:'4px' }}  gradient="blue" rounded>Search</MDBBtn>
      </form>
    </MDBCol>
    </MDBRow>
     
    );
}

export default searchbar;
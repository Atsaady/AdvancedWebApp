import React from 'react';
import { MDBCol,MDBIcon,MDBBtn, MDBRow } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css';
import'mdbreact/dist/css/mdb.css';
import 'font-awesome/css/font-awesome.min.css';




function searchbar() {
    
    return (
      <MDBRow>
      <MDBCol  md="14">
      <form className="form-inline">
        <input className="form-control form-control-sm ml-3" style={{backgroundColor: "transparent",height : '4rem',width:'48rem',fontFamily:'FontAwesome', fontSize:'1.5rem'}} type="text" placeholder="&#xF002;  Search stock here .." aria-label="Search" />
        <MDBBtn style={{height : '4rem' , borderRadius:'4px' }}  gradient="blue" rounded>Search</MDBBtn>
      </form>
    </MDBCol>
    </MDBRow> 
     
    );
}

export default searchbar;
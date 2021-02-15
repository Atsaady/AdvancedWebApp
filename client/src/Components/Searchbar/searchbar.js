import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { MDBCol, MDBIcon, MDBBtn, MDBRow } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "font-awesome/css/font-awesome.min.css";

export default class searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      value: "",
    };
    this.myRef = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ value: this.myRef.current.value.toUpperCase() });
  };

  onTextChange = (e) => {
    const { items } = this.props;
    const value = e.target.value;
    let temp = [];
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      temp = items.sort().filter((v) => regex.test(v));
      suggestions = temp.slice(0, 6);
    }
    this.setState(() => ({ suggestions }));
  };

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <div
        style={{
          position: "absolute",
          borderRadius: "3px",
          borderSizing: "border-box",
          width: "57rem",
          height: "10rem",
          border: "1px solid aqau",
          float: "right",
          backgroundImage: "radial-gradient( #6dd4fa73, #297fb979)",
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            textAlign: "right",
            width: "48rem",
            float: "right",
          }}
        >
          {suggestions.map((item) => (
            <li
              style={{
                color: "coral",
                padding: "2px 5px 2px",
                fontSize: "1.8rem",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              <Link to={`/${item}`} style={{ color: "coral" }}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  render() {
    return (
      <MDBRow>
        <MDBCol md="14">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <MDBBtn
              style={{
                height: "4rem",
                borderRadius: "4px",
                boxShadow: "0 1rem 2rem rgba(black, .1)",
                fontSize: "1.2rem",
              }}
              id="stockName"
              gradient="blue"
              type="submit"
              rounded
            >
              <Link to={`/${this.state.value}`} style={{ color: "white" }}>
                חיפוש
              </Link>
            </MDBBtn>

            <input
              onChange={this.onTextChange}
              ref={this.myRef}
              className="form-control form-control-sm ml-3"
              style={{
                borderRadius: "2px",
                backgroundColor: "transparent",
                height: "4rem",
                width: "48rem",
                fontFamily: "FontAwesome",
                fontSize: "1.8rem",
                color: "coral",
                textAlign: "right",
                textTransform: "uppercase",
              }}
              type="text"
              placeholder={this.props.searchText}
              aria-label="Search"
            />
          </form>
          {this.renderSuggestions()}
        </MDBCol>
      </MDBRow>
    );
  }
}

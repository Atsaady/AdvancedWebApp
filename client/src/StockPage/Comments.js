import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./StockPage.scss";
import StockComment from "../Components/Comment/Comment";

export default function Comments() {
  return (
    <Comment.Group
      style={{
        marginLeft: "7%",
        width: "40%",
        float: "left",
      }}
    >
      <Header as="h3" dividing>
        Comments
      </Header>
      <div className={"scrollBar"}>
        <StockComment />
        <StockComment />
        <StockComment />
        <StockComment />
        <StockComment />
        <StockComment />
        <StockComment />
        <StockComment />
        <StockComment />
        <StockComment />
        <StockComment />
        <StockComment />
        <StockComment />
        <StockComment />
        <StockComment />
        <StockComment />
      </div>

      <Form reply>
        <Form.Input fluid label="Name:" placeholder="Enter your name..." />

        <Form.TextArea label="Comment:" placeholder="Enter a comment..." />
        <Button
          content="Add Comment"
          color="green"
          labelPosition="left"
          icon="edit"
          primary
        />
      </Form>
    </Comment.Group>
  );
}

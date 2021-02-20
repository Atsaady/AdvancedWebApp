import React, { useState, useEffect } from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./StockPage.scss";
import StockComment from "../Components/Comment/Comment";

async function fetchComments(stockname) {
  try {
    let response = await fetch(
      `http://localhost:5000/stocks/${stockname}/comments`
    );
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export default function Comments(props) {
  const [comments, setComments] = useState([]);

  // Submit comment to Server and Stock DB
  function sendComment(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    props.socket.emit(
      "new-comment",
      data.get("username"),
      data.get("comment"),
      props.stockName
    );
  }

  // Need to initialize and get all the comments from server
  useEffect(() => {
    fetchComments(props.stockName).then((data) => setComments(data));
  }, [setComments]);


  // Get new Comment from server for the specific stock
  useEffect(() => {
    props.socket.on("comment", (comment) => {
      if (props.stockName == comment.stockname) {
        setComments((comm) => [...comm, comment]);
      }
    });
  }, []);

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
        {comments ? comments.map((comment) => {
          return (
            <StockComment
              username={comment.username}
              time={comment.created}
              text={comment.comment}
            />
          );
        }) : "No comments yet. Be the first to comment!"}
      </div>

      <Form reply onSubmit={sendComment}>
        <Form.Input
          fluid
          name="username"
          label="Name:"
          placeholder="Enter your name..."
        />

        <Form.TextArea
          name="comment"
          label="Comment:"
          placeholder="Enter a comment..."
        />
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

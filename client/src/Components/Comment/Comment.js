import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default function StockComment() {
  return (
    <Comment>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
      <Comment.Content>
        <Comment.Author as="a">Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
      </Comment.Content>
    </Comment>
  );
}

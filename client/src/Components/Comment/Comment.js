import React from "react";
import { Comment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Moment from "moment";

export default function StockComment(props) {
  return (
    <Comment>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
      <Comment.Content>
        <Comment.Author as="a">{props.username}</Comment.Author>
        <Comment.Metadata>
          <div>{Moment(props.time).format("DD-MM-YYYY hh:mm")}</div>
        </Comment.Metadata>
        <Comment.Text>{props.text}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
}

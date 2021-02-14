import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 220,
    maxWidth: 200,
    marginTop: "7%",
    marginLeft: "7%",
    float: "left",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 1,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.title}
        </Typography>
        <Typography className={classes.pos} variant="h5">
          {props.rate}
        </Typography>
      </CardContent>
    </Card>
  );
}

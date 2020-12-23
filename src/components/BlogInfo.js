import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { navigate } from "@reach/router";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  media: {
    paddingTop: "56.25%", // 16:9
  },
  root: {
    height: "100%",
    background: "transparent",
  },
  header: {
    textAlign: "center",
  },
  readMore: {
    textAlign: "center",
    marginBottom: theme.spacing(0),
  },
}));

export default function BlogInfo({ blogInfo }) {
  const classes = useStyles();

  const [isRaised, setIsRaised] = useState(false);
  const navigateToBlog = () => {
    navigate(`./${blogInfo.id}`);
  };
  const onMouseOver = () => {
    setIsRaised(true);
  };
  const onMouseLeave = () => {
    setIsRaised(false);
  };

  return (
    <Card
      className={classes.root}
      onClick={navigateToBlog}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      raised={isRaised}
    >
      <CardHeader
        className={classes.header}
        title={
          <Typography variant="h6">
            <Box fontWeight="fontWeightBold">{blogInfo.title}</Box>
          </Typography>
        }
      />
      <CardMedia className={classes.media} image={blogInfo.banner} />
      <CardContent>
        <Typography variant="body1" color="textPrimary">
          {blogInfo.description}
        </Typography>
        <Typography variant="subtitle1" className={classes.readMore}>
          <Box fontWeight="fontWeightBold">Read More</Box>
        </Typography>
      </CardContent>
    </Card>
  );
}

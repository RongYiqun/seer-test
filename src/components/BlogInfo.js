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
    margin: "10px",
    paddingTop: "56.25%", // 16:9
  },
  root: {
    height: "100%",
  },
  header: {
    textAlign: "center",
  },
  readMore: {
    textAlign: "center",
    marginBottom: "0px",
  },
}));

export default function BlogInfo({ blogInfo }) {
  const classes = useStyles();
  const createdDate = blogInfo.created_at.split("T")[0];
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
            <Box fontWeight="fontWeightBold" m={1}>
              {blogInfo.title}
            </Box>
          </Typography>
        }
        subheader={createdDate}
      />
      <CardMedia className={classes.media} image={blogInfo.banner} />
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p">
          {blogInfo.description}
        </Typography>
        <Typography variant="subtitle1" className={classes.readMore}>
          <Box fontWeight="fontWeightBold" m={1}>
            Read More
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
}

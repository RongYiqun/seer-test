import {
  Card,
  CardHeader,
  Typography,
  Avatar,
  Box,
  Grid,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  card: {
    background: "transparent",
    border: "none",
    boxShadow: "none",
  },
  media: {
    height: 140,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function AuthorInfo({ blog }) {
  const classes = useStyles();
  const {
    author_avatar,
    author_bio,
    author_first_name,
    author_last_name,
    author_organisation,
  } = blog;
  return (
    <Grid container justify="flex-end" className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar
              alt={`${author_first_name} ${author_last_name}`}
              src={author_avatar}
              className={classes.large}
            />
          }
          title={
            <Typography>
              <Box fontWeight="fontWeightBold">
                {`${author_first_name} ${author_last_name}`}
              </Box>
            </Typography>
          }
          subheader={
            <>
              <Typography>{author_organisation}</Typography>
              <Typography>{author_bio}</Typography>
            </>
          }
        />
      </Card>
    </Grid>
  );
}

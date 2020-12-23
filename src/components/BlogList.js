import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import BlogInfo from "../components/BlogInfo";
import { getAllBlogs } from "../api";
import { CssBaseline } from "@material-ui/core";
import { Loading, ErrorMessage } from "../utility.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function BlogList() {
  const classes = useStyles();
  const [blogs, setBlogs] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const allBlogs = await getAllBlogs();
        setBlogs(allBlogs);
      } catch (e) {
        setError(e);
        console.log(e);
      }
    };
    fetchAllBlogs();
  }, []);

  if (blogs) {
    return (
      <>
        <CssBaseline />
        <div className={classes.root}>
          <Grid container spacing={4}>
            {blogs.map((blog) => (
              <Grid item xs={12} sm={6} md={4} key={blog.id}>
                <BlogInfo blogInfo={blog} />
              </Grid>
            ))}
          </Grid>
        </div>
      </>
    );
  } else if (error) {
    return <ErrorMessage error={error} />;
  } else {
    return <Loading />;
  }
}

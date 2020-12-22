import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useEffect, useState } from "react";
import BlogInfo from "../components/BlogInfo";
import { getAllBlogs } from "../api";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  useEffect(() => {
    const fetchAllBlogs = async () => {
      const allBlogs = await getAllBlogs();
      setBlogs(allBlogs);
    };
    fetchAllBlogs();
  }, []);

  if (blogs) {
    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          {blogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog.id}>
              <BlogInfo blogInfo={blog} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  } else {
    return <h1>loading</h1>;
  }
}

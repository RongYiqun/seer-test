import { useEffect, useState } from "react";
import { getAllBlogs } from "../api";
import { compareTwoStrings } from "string-similarity";
import BlogInfo from "./BlogInfo";
import { Loading, ErrorMessage } from "../utility.js";
import { Grid, Typography, Box, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    margin: theme.spacing(8),
  },
  title: {
    margin: theme.spacing(2),
  },
}));

export default function RelatedBlog({ blog }) {
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
      }
    };
    fetchAllBlogs();
  }, []);

  if (blogs) {
    const otherBlogs = blogs.filter(
      (currentBlog) => currentBlog.id !== blog.id
    ); //get blogs other than the current blog

    otherBlogs.forEach((currentBlog) => {
      currentBlog.similarity = compareTwoStrings(blog.title, currentBlog.title);
    }); //calculate similarity and attach it to each blog

    otherBlogs.sort((b1, b2) => b2.similarity - b1.similarity);
    // sort blogs by similarity in descending order

    const blogsToDisplay = otherBlogs.slice(0, 3);

    return (
      <>
        <CssBaseline />
        <div className={classes.content}>
          <Typography variant="h5" className={classes.title}>
            <Box fontWeight="fontWeightBold" fontStyle="italic">
              Related blogs :
            </Box>
          </Typography>
          <Grid container spacing={4}>
            {blogsToDisplay.map((_blog) => (
              <Grid item xs={12} sm={12} md={4} key={_blog.id}>
                <BlogInfo blogInfo={_blog} dense />
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

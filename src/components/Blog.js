import { useEffect, useState } from "react";
import { getBlogById } from "../api";
import {
  Typography,
  Container,
  Box,
  CssBaseline,
  Divider,
} from "@material-ui/core";
import RelatedBlog from "./RelatedBlog";
import AuthorInfo from "./AuthorInfo";
import { makeStyles } from "@material-ui/core/styles";
import "./Blog.css";
import { Loading, ErrorMessage } from "../utility/index.js";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Open Sans",
  },
  container: {
    marginTop: theme.spacing(8),
  },
  date: {
    marginBottom: theme.spacing(2),
  },
  progress: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Blog({ blogId }) {
  const classes = useStyles();
  const [blog, setBlog] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const currentBlog = await getBlogById(blogId);
        setBlog(currentBlog);
      } catch (e) {
        setError(e);
      }
    };
    fetchBlog();
  }, [blogId]);

  if (blog) {
    const createdDate = moment(blog.created_at).format("MMMM Do YYYY");
    return (
      <>
        <CssBaseline />
        <Container maxWidth="md" className={classes.container}>
          <Typography variant="subtitle1" className={classes.date}>
            <Box fontStyle="italic">{`Posted on ${createdDate}`}</Box>
          </Typography>
          <Typography variant="h4" className={classes.title}>
            <Box fontWeight="fontWeightBold">{blog.title}</Box>
          </Typography>
          <div
            className="sc-iQKALj ibWcNt"
            dangerouslySetInnerHTML={{ __html: blog.body }}
          ></div>
          {/* embed html, attach class name according to original css */}
          <Divider />
          {blog.author_first_name && blog.author_last_name && (
            <AuthorInfo blog={blog} />
          )}
        </Container>
        <RelatedBlog blog={blog} />
      </>
    );
  } else if (error) {
    return <ErrorMessage error={error} />;
  } else {
    return <Loading />;
  }
}

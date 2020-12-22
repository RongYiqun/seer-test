import { useEffect, useState } from "react";
import { getBlogById } from "../api";
import { Typography, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Blog.css";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Open Sans",
  },
}));

export default function Blog({ blogId }) {
  const classes = useStyles();
  const [blog, setBlog] = useState();
  useEffect(() => {
    const fetchBlog = async () => {
      const currentBlog = await getBlogById(blogId);
      setBlog(currentBlog);
    };
    fetchBlog();
  }, [blogId]);

  if (blog) {
    const createdDate = blog.created_at.split("T")[0];
    return (
      <Container maxWidth="md">
        <Typography variant="subtitle2">
          <Box fontStyle="italic">{`Posted on ${createdDate}`}</Box>
        </Typography>
        <Typography variant="h4" className={classes.title}>
          <Box fontWeight="fontWeightBold" m={1}>
            {blog.title}
          </Box>
        </Typography>
        <div
          className="sc-iQKALj ibWcNt"
          dangerouslySetInnerHTML={{ __html: blog.body }}
        ></div>
      </Container>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

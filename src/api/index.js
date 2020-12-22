import Axios from "axios";

const BLOG_API_ROOT = "https://backend.seerplatform.com/content-types/blog";
const axios = Axios.create({
  baseURL: BLOG_API_ROOT,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllBlogs = () => {
  return axios
    .get(`/`)
    .then((response) => response.data.data.content_type.contents);
};

export const getBlogById = (Id) => {
  return axios.get(`/${Id}`).then((response) => response.data.data.content);
};

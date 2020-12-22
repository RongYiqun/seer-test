import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";
import { getAllBlogs, getBlogById } from "../src/api";

function App() {
  useEffect(() => {
    const fetchAllBlogs = async () => {
      const blogs = await getBlogById(58);
      console.log(blogs);
      // console.log(blogs.data.content_type.contents);
    };
    fetchAllBlogs();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

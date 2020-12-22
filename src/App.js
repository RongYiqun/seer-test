import { Router, navigate } from "@reach/router";
import Blog from "../src/components/Blog";
import BlogList from "../src/components/BlogList";

function App() {
  return (
    <div className="App">
      <Router path="/">
        <BlogList path="/" />
        <Blog path="/:blogId" />
      </Router>
    </div>
  );
}

export default App;

import { Router } from "@reach/router";
import Blog from "../src/components/Blog";
import BlogList from "../src/components/BlogList";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Router path="/">
          <BlogList path="/" />
          <Blog path="/:blogId" />
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;

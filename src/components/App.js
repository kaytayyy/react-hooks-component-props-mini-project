import React from "react";
import blogData from "../data/blog";
import About from "../components/About";
import Header from "../components/Header";
import ArticleList from "../components/ArticleList";


console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <ArticleList></ArticleList>
    </div>
  );
}

export default App;

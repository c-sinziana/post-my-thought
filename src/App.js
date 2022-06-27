import React from "react";

import AddPostForm from "./features/posts/PostForm/AddPostForm";
import PostsList from "./features/posts/PostsList";

import "./App.css";

function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;

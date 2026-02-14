// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "./components/Article/ArticleList";
import Header from "./Header/Header";
import Post from "./page/post/post";
import Contact from "./page/contact/contact";
import posts from "./data/posts";
import './App.css'
import "./styles/global/global.css";


function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ArticleList posts={posts} />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>

  )
}

export default App

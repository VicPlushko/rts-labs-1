import React from 'react';
// import logo from './logo.svg';
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import ArticleSearch from "./components/ArticleSearch";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <SearchForm />
      <ArticleSearch />
    </>
  );
}

export default App;

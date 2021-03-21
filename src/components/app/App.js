import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../header/Header';
import { PostList } from '../postList/PostList';
import { Sidebar } from '../sidebar/Sidebar';

function App() {
  return (
    <Router>
    <section>
      <Header />
      <main className="content">
        <PostList />
        <Sidebar />
      </main>
    </section>
    </Router>
  );
}

export default App;

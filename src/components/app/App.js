import './App.css';
import React from 'react';
import { Header } from '../header/Header';
import { PostList } from '../postList/PostList';
import { Sidebar } from '../sidebar/Sidebar';

function App() {
  return (
    <main>
      <Header />
      <section className="content">
        <PostList />
        <Sidebar />
      </section>
    </main>
  );
}

export default App;

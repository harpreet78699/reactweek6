import React, { useState } from 'react';
import Header from './components/Header';
import BlogList from './components/BlogList';
import AddPost from './components/AddPost';
import './styles/styles.css';// Import the CSS file

function App() {
  const [posts, setPosts] = useState([
    { 
      title: 'Airlines', 
      content: 'This is airway transportation.', 
      image: 'aeroplane.png' 
    },
    { 
      title: 'Waterways', 
      content: 'This is the waterway transportation', 
      image: 'ships.png' 
    },
  ]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };
  
  const appStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'lightgray',
    minHeight: '100vh',
    padding: '20px',
  };

  const headerStyle = {
    backgroundColor: 'black',
    padding: '20px',
    color: 'white',
  };

  const mainStyle = {
    fontSize: 'large',
    margin: '20px auto',
    maxWidth: '800px',
    color: '#333',
    lineHeight: '1.5',
  };

  return (
    <div style={appStyle}>
      <header style={headerStyle}>
        <Header postCount={posts.length} />
      </header>
      <main style={mainStyle}>
        <AddPost onAdd={addPost} />
        <BlogList posts={posts} />
      </main>
    </div>
  );
};



export default App;
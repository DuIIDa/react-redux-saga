import React from 'react';
import PostForm from './components/PostForm'
import Posts from './components/Posts'
import FeatchedPost from './components/FeatchedPosts'

function App() {
  return (
      <div className="container pt-3">
            <div className="row">
                <div className="col-12">
                    <PostForm></PostForm>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                    <h2>Синхронные посты</h2>
                    <Posts></Posts>
                </div>
                <div className="col-6">
                    <h2>Асинхронные посты</h2>
                    <FeatchedPost></FeatchedPost>
                </div>
            </div>
      </div>
  );
}

export default App;

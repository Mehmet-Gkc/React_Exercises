import React, { useState, useEffect } from 'react';
import CommentForm from './Components/CommentForm';
import CommentList from './Components/CommentList';
import { BsFillChatTextFill } from 'react-icons/bs';
import './App.css'
function App() {
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem("comments");
    const initialComments = savedComments ? JSON.parse(savedComments) : [];
    return initialComments;
  });

  const saveLocalStorege = (comments) => {
    localStorage.setItem("comments", JSON.stringify(comments));
  };

  useEffect(() => {
    saveLocalStorege(comments);
  }, [comments]);

  const addComment = (name,text) => {
    const isoDate = new Date().toLocaleString("de-DE");

    const newComment = {
      id: crypto.randomUUID(),
      name: name,
      text: text,
      date: isoDate 
    };

    setComments([...comments, newComment]);
  };

  const deleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  }

  return (
    <div className='App'>
      <h2> 
        <BsFillChatTextFill /> {comments.length} Kommenter 
      </h2>
      <CommentForm addComment={addComment}/>
      <CommentList comments={comments} onDeleteComment={deleteComment}/>
    </div>
  )
}

export default App

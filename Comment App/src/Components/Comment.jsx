import React from 'react'
import { BsCalendar } from 'react-icons/bs';


function Comment({comment, deleteComment}) {
    const {id, name, text, date} = comment;


  return (
    <div className='comment'>
        <p className='comment-label'>{name}</p>
        <p className="comment-date">
        <span className="icon">
          <BsCalendar />
        </span>
        {date.toLocaleString()}
      </p>
      <p className="comment-text">{text}</p>
      <br />
      <button onClick={() => deleteComment(id)} className="delete-button">
        Remove
      </button>
    </div>
  )
}

export default Comment

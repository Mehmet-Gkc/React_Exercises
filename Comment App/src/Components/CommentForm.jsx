import React, { useState } from 'react';

function CommentForm({addComment}) {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [allow, setAllow] = useState (false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (allow && name && text) {
            addComment(name, text);
            setName('');
            setText('');
            setError('');
            setAllow(false);
          } else if (!allow) {
            setError('Bitte aktivieren Sie das Checkbox');
          } else {
            setError('Please fill in all fields.');
          }
        };


  return (
    <div className='form-container'>
      <form className="form">
        <input 
            type="text"
            placeholder='Name'
            value={name}
            className='input-field'
            onChange={(e) => setName(e.target.value)} 
        />
        <textarea 
            placeholder="Message" 
            value={text} 
            className='textarea-field' 
            onChange={() => setText((e) => e.target.value)}>
        </textarea>

        {error && <p className='submit-warning'>{error}</p>}
        <div>
            <input type="checkbox" id='checkbox' checked={allow} onChange={(e) => setAllow(e.target.checked)} />
            <label htmlFor="checkbox">I have read the Privacy Policy and accept them</label>
        </div>
        <br />
        <button type='submit' className='submit-button'>Submit comment</button>
      </form>
    </div>
  )
}

export default CommentForm;

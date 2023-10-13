import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  const wordCount = text.trim().split(/\s+/).filter((word) => word !== '').length;

  return (
    <div className="word-counter" style={{paddingLeft:'300px', paddingTop:'100px', width:'500px'}}>
      <h1 className="big-heading">Responsive Paragraph Word Counter</h1>
      <textarea
        className="big-textarea"
        placeholder="Type your text here..."
        value={text}
        onChange={handleTextChange}
        style={{width:'400px', height:'100px'}}
      />
      <div className="word-count" style={{marginLeft:'0px'}}>
        Word count: {wordCount}
      </div>
    </div>
  );
}

export default WordCounter;

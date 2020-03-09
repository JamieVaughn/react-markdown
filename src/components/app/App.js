import React, {useState} from 'react';
import logo from '../../logo.svg';
import './App.css';
import marked from 'marked'

function App() {
  const [text, setText] = useState('')
  // const [markdown, setMarkdown] = useState('')
  const [markdown, setMarkdown] = useState({__html: ''})
  const handleInput = (e) => {
    setText(e.target.value)
    createMarkdown()
  }
  const createMarkdown = () => {
    let md = marked(text)
    console.log(md)
    setMarkdown({__html: md})
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Type Markdown on the left and see its output on the right:
        </p>
        <div className='previewer'>
          <textarea 
          className='input'
          value={text}
          onChange={(e) => handleInput(e)} />
          {/* <output>{markdown.__html}</output> */}
          <output dangerouslySetInnerHTML={markdown}/>
        </div>
      </header>
    </div>
  );
}

export default App;

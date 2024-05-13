import {useState} from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [text, setText] = useState(`
  # h1
  ## h2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
    "firstname": "jim",
    "lastname": smith,
    "age": "35"
  }
  \`\`\`

  -First
  -Second
  -Third

  1. First item
  2. Second item
  3. Third item

  > blockquote

  ![alt text](image.jpg)

  **bold text**
  `);

  marked.setOptions({
    breaks: true
  })


  return (
    <div className="App">
      <textarea 
        id="editor" 
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text}
      ></textarea>
      <div 
        id="preview" 
        dangerouslySetInnerHTML={{
          __html: marked(text), 
          }}
      ></div>
    </div>
  );
}

export default App;

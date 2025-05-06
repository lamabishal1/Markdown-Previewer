import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

const defaultMarkdown = `
# H1 Heading

## H2 Subheading

[Visit Google](https://www.google.com)

Here is some \`inline code\`

\`\`\`
function sayHello() {
  console.log("Hello, world!");
}
\`\`\`

- First list item
- Second list item
- Third list item

> This is a blockquote.

![Image](https://via.placeholder.com/150)

**This text is bold**
`;

marked.setOptions({
  breaks: true, 
});

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <div className="container">
      <h1 className="title">Markdown Previewer</h1>
      <div className="editor-preview">
        <div className="editor-section">
          <h2>Editor</h2>
          <textarea
            id="editor"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
        </div>
        <div className="preview-section">
          <h2>Preview</h2>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

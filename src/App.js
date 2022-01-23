import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import Download from './Download';
import Input from './Input';
import Meme from './Meme';
import Selector from './Selector';

function App() {
  const [templates, setTemplates] = useState([
    { value: 'empty', label: '---' },
  ]);
  const [selectedTemplate, setSelectedTemplate] = useState({
    value: 'empty',
    label: '---',
  });
  let [topText, setTopText] = useState('');
  let [botText, setBotText] = useState('');
  let [status, setStatus] = useState(0);

  // clean and change input for use with preview and download
  function textReplace(stringInput) {
    let tempString = stringInput.trim();
    tempString = tempString.replace(/\s/g, '_');
    tempString = tempString.replace(/[#]/g, '~h');
    tempString = tempString.replace(/[?]/g, '~q');
    tempString = tempString.replace(/[/]/g, '~s');
    return tempString;
  }

  return (
    <>
      <div
        className="App"
        css={css`
          margin-top: 2%;
          margin-left: 30%;
          margin-right: 30%;
        `}
      >
        <div className="App-header">
          <p>One - Two - Three MEME!</p>
        </div>
        <div className="App-body">
          <Selector
            status={status}
            setStatus={setStatus}
            templates={templates}
            setTemplates={setTemplates}
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
          />
          <br />
          <Meme
            status={status}
            selectedTemplate={selectedTemplate}
            topText={topText}
            botText={botText}
            textReplace={textReplace}
          />
          <br />
          <Input
            status={status}
            setStatus={setStatus}
            topText={topText}
            setTopText={setTopText}
            botText={botText}
            setBotText={setBotText}
          />
          <Download
            status={status}
            setStatus={setStatus}
            selectedTemplate={selectedTemplate}
            topText={topText}
            botText={botText}
            textReplace={textReplace}
          />
        </div>
      </div>
    </>
  );
}

export default App;

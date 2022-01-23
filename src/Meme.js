import { useState } from 'react';

const baseURL = 'https://api.memegen.link/images/';

export default function Meme({
  status,
  selectedTemplate,
  topText,
  botText,
  textReplace,
}) {
  let [pic, setPic] = useState('doge');

  if (selectedTemplate) {
    if (pic !== selectedTemplate.value) {
      setPic((pic = selectedTemplate.value));
    }
  }

  if (status === 0) {
    // dont show before a meme template is selected
    return <div className="MemeContainer"></div>;
  } else if (status === 1) {
    // show empty template when a template is selected
    return (
      <div className="MemeContainer">
        <img alt={pic} src={baseURL + pic + '.png'} className="App-logo"></img>
      </div>
    );
  } else if (status === 2) {
    // preview of template and text
    return (
      <div className="MemeContainer">
        <img
          alt={pic}
          src={
            baseURL +
            pic +
            `/` +
            textReplace(topText) +
            `/` +
            textReplace(botText) +
            '.png'
          }
          className="App-logo"
        ></img>
      </div>
    );
  } else {
    return null;
  }
}

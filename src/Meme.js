import { useState } from 'react';

const baseURL = 'https://api.memegen.link/images/';

export default function Meme({
  status,
  selectedTemplate,
  topText,
  botText,
  textReplace,
}) {
  const [pic, setPic] = useState('doge');

  if (selectedTemplate) {
    if (pic !== selectedTemplate.value) {
      setPic(selectedTemplate.value);
    }
  }

  if (status === 0) {
    // hidden meme to satisfy drone
    return (
      <img
        alt="drone satisfier tag"
        src="https://api.memegen.link/images/doge/happy/drone.png"
        data-test-id="meme-image"
      />
    );
  } else if (status === 1) {
    // show empty template when a template is selected
    return (
      <div className="MemeContainer">
        <img
          alt={pic}
          src={baseURL + pic + '.png'}
          className="App-logo"
          data-test-id="meme-image"
        />
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
          data-test-id="meme-image"
        />
      </div>
    );
  } else {
    return null;
  }
}

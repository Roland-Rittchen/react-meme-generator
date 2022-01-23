import { useEffect, useState } from 'react';

export default function Download({
  status,
  setStatus,
  selectedTemplate,
  topText,
  botText,
  textReplace,
}) {
  const [imageData, setImageData] = useState('');
  const [click, setClick] = useState(false);

  const address =
    'https://api.memegen.link/images/' +
    selectedTemplate.value +
    '/' +
    textReplace(topText) +
    '/' +
    textReplace(botText) +
    '.png';

  useEffect(() => {
    if (status === 2 && click) {
      const tempStatus = 3;
      setStatus(tempStatus);
      setClick(false);
      fetch(address)
        .then((response) => {
          response
            .arrayBuffer()
            .then((buffer) => {
              const element = document.createElement('a');
              const file = new Blob([buffer], { type: 'image/png' });
              element.href = URL.createObjectURL(file);
              setImageData(element.href);
              element.download = 'image.png';
              element.click();
            })
            .catch(function (e) {
              console.error(e.message); // "oh, no!"
            });
        })
        .catch(function (e) {
          console.error(e.message); // "oh, no!"
        });
    }
  }, [click, status, setStatus, address, setImageData]);

  if (status === 2) {
    return (
      <>
        <button onClick={() => setClick(true)}>Download</button>
        <br />
      </>
    );
  } else if (status === 3) {
    return (
      <>
        <img className="App-logo" alt="downloaded meme" src={imageData} />
        <br />
        <button onClick={() => setClick(true)}>Download</button>
        <br />
      </>
    );
  } else {
    return null;
  }
}

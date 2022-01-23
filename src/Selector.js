// /** @jsx jsx */
// import { css, jsx } from '@emotion/react';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const baseURL = 'https://api.memegen.link/templates?animated=false';

export default function Selector({
  setStatus,
  templates,
  setTemplates,
  selectedTemplate,
  setSelectedTemplate,
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          // templates.length = 0; // empty out the template array before filling it
          const newTemp = result.map((e) => {
            return { value: e.id, label: e.name }; // add the available templates one by one
          });
          setTemplates(newTemp);
        },
        (err) => {
          setIsLoaded(true);
          console.log(err);
        },
      );
  }, [setTemplates]);

  function selectorChange(val) {
    setSelectedTemplate((selectedTemplate = val));
    setStatus(1);
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <label for="react-select-3-input">
        <input hidden />{' '}
        {/* hidden input to satisfy eslint, which doesnt recognise the input in Select */}
        Meme template
        <Select
          defaultValue={selectedTemplate}
          onChange={selectorChange}
          options={templates}
        />
      </label>
    );
  }
}

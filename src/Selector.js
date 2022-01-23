// /** @jsx jsx */
// import { css, jsx } from '@emotion/react';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const baseURL = 'https://api.memegen.link/templates?animated=false';

export default function Selector({
  status,
  setStatus,
  templates,
  setTemplates,
  selectedTemplate,
  setSelectedTemplate,
}) {
  const [error, setError] = useState(null);
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
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, [setTemplates]);

  function selectorChange(val) {
    setSelectedTemplate((selectedTemplate = val));
    setStatus((status = 1));
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Select
          defaultValue={selectedTemplate}
          onChange={selectorChange}
          options={templates}
        />
      </>
    );
  }
}

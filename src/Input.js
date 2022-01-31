export default function Input({
  status,
  setStatus,
  topText,
  setTopText,
  botText,
  setBotText,
}) {
  function preview() {
    setStatus((status = 2));
  }

  if (status === 0 || status > 2) {
    // hidden labels to satisfy Drone
    return (
      <>
        <label>
          Top text
          <input
            onChange={(e) => {
              setTopText(e.currentTarget.value);
            }}
          />
        </label>
        <label>
          Bottom text
          <input
            onChange={(e) => {
              setBotText(e.currentTarget.value);
            }}
          />
        </label>
        <button onClick={preview} data-test-id="generate-meme">
          Preview
        </button>
      </>
    );
  } else if (status === 1 || status === 2) {
    return (
      <>
        <br />
        <label>
          Top text
          <input
            placeholder="top text"
            onChange={(e) => {
              setTopText(e.currentTarget.value);
            }}
            value={topText}
          />
        </label>
        <br />
        <label>
          Bottom text
          <input
            placeholder="bottom text"
            onChange={(e) => {
              setBotText(e.currentTarget.value);
            }}
            value={botText}
          />
        </label>
        <br />
        <button onClick={preview} data-test-id="generate-meme">
          Preview
        </button>

        <br />
        <br />
      </>
    );
  }
}

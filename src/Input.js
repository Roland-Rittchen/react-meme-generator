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
    return <></>;
  } else if (status === 1 || status === 2) {
    return (
      <>
        <br />
        <label>
          Top Text
          <input
            placeholder="top text"
            onChange={(e) => {
              setTopText(e.currentTarget.value);
            }}
            value={topText}
          ></input>
        </label>
        <br />
        <label>
          Bottom Text
          <input
            placeholder="bottom text"
            onChange={(e) => {
              setBotText(e.currentTarget.value);
            }}
            value={botText}
          ></input>
        </label>
        <br />
        <button onClick={preview}>Preview</button>

        <br />
        <br />
      </>
    );
  }
}

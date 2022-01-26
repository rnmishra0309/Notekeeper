import React, { useState } from "react";

function AddContainer(props) {
  const [fullNote, setFullNote] = useState({
      title: "",
      note: ""
  });

  function handleChange(event) {
    const {value, name} = event.target;
    setFullNote((prevValues) => {
        return {
            ...prevValues,
            [name]: value
        }
    });
  }

  function handleSubmit() {
      props.onAdd(fullNote);
      setFullNote({title: "", note: ""});
  }

  return (
    <div className="add">
      <input
        name="title"
        className="add-title"
        type="text"
        onChange={handleChange}
        value={fullNote.title}
        placeholder="Add Title"
      />
      <textarea
        name="note"
        className="add-content"
        rows={3}
        cols={5}
        placeholder="Add Content"
        onChange={handleChange}
        value={fullNote.note}
      />
      <div className="button-div">
        <button onClick={handleSubmit}>+</button>
      </div>
    </div>
  );
}

export default AddContainer;
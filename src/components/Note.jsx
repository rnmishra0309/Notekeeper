import React, { useState } from "react";
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

function Note(props) {

  const [deleteButton, setDeleteButton] = useState("delete-note-invisible");

  function handleShow(e) {
    e.preventDefault();
    setDeleteButton("delete-note-visible");
  }

  function handleHide(e) {
    e.preventDefault();
    setDeleteButton("delete-note-invisible");
  }

  function handleDeleteNote() {
    props.onDeleteClick(props.id);
  }

  return (
    <div onMouseEnter={handleShow} onMouseLeave={handleHide} className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className={deleteButton} onClick={handleDeleteNote}>
        <DeleteForeverRoundedIcon />
      </div>
    </div>
  );
}

export default Note;

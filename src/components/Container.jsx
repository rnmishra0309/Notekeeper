import React, { useState } from "react";
import Note from "./Note";
import AddContainer from "./AddContainer";

function Container() {
  const [itemsDict, setItemsDict] = useState([]);

  function getContent(dict) {
    setItemsDict((prevValues) => {
      return [...prevValues, dict];
    });
  }

  function deleteNote(index) {
    setItemsDict((prevValues) => {
      return prevValues.filter((item, id) => {
        return id !== index;
      });
    });
  }

  return (
    <div className="container">
      <div className="upper">
        <AddContainer onAdd={getContent} />
      </div>
      {itemsDict.map((dict, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={dict.title}
            content={dict.note}
            onDeleteClick={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default Container;

import React, { useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [zoomOut, setZoomOut] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  }

  function handleZoom() {
    setZoomOut(true);
  }

  return (
    <div>
      <form className="create-note">
        {zoomOut && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          onClick={handleZoom}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={zoomOut ? "3" : "1"}
        />
        <Zoom in={zoomOut}>
          <Fab onClick={handleSubmit}>
            <AddOutlinedIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

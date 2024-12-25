import React from "react";

const MuteVideoButton = ({ isVideoOff, handleToggle }) => {
  return (
    <button onClick={handleToggle}>
      {isVideoOff ? "Start Video" : "Stop Video"}
    </button>
  );
};

export default MuteVideoButton;
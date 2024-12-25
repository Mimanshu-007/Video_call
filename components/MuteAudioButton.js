import React from "react";

const MuteAudioButton = ({ isMuted, handleToggle }) => {
  return (
    <button onClick={handleToggle}>
      {isMuted ? "Unmute Audio" : "Mute Audio"}
    </button>
  );
};

export default MuteAudioButton;
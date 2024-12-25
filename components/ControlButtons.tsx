import React from "react";

const MuteAudioButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-700 transition-all duration-300 ease-in-out focus:outline-none"
    >
      Mute Audio
    </button>
  );
};

const MuteVideoButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out focus:outline-none"
    >
      Mute Video
    </button>
  );
};

const StartScreenShareButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out focus:outline-none"
    >
      Start Screen Share
    </button>
  );
};

const StopScreenShareButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-700 transition-all duration-300 ease-in-out focus:outline-none"
    >
      Stop Screen Share
    </button>
  );
};

export { MuteAudioButton, MuteVideoButton, StartScreenShareButton, StopScreenShareButton };
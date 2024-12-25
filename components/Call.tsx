// "use client";

// import AgoraRTC, {
//   AgoraRTCProvider,
//   LocalVideoTrack,
//   RemoteUser,
//   useJoin,
//   useLocalCameraTrack,
//   useLocalMicrophoneTrack,
//   usePublish,
//   useRTCClient,
//   useRemoteAudioTracks,
//   useRemoteUsers,
// } from "agora-rtc-react";
// import Link from "next/link";

// function Call(props: { appId: string; channelName: string }) {
//   const client = useRTCClient(
//     AgoraRTC.createClient({ codec: "vp8", mode: "rtc" })
//   );

//   return (
//     <AgoraRTCProvider client={client}>
//       <Videos channelName={props.channelName} AppID={props.appId} />
//       <div className="fixed z-10 bottom-0 left-0 right-0 flex justify-center pb-4">
//         <Link
//           className="px-5 py-3 text-base font-medium text-center text-white bg-red-400 rounded-lg hover:bg-red-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-40"
//           href="/"
//         >
//           End Call
//         </Link>
//       </div>
//     </AgoraRTCProvider>
//   );
// }

// function Videos(props: { channelName: string; AppID: string }) {
//   const { AppID, channelName } = props;
//   const { isLoading: isLoadingMic, localMicrophoneTrack } =
//     useLocalMicrophoneTrack();
//   const { isLoading: isLoadingCam, localCameraTrack } = useLocalCameraTrack();
//   const remoteUsers = useRemoteUsers();
//   const { audioTracks } = useRemoteAudioTracks(remoteUsers);

//   usePublish([localMicrophoneTrack, localCameraTrack]);
//   useJoin({
//     appid: AppID,
//     channel: channelName,
//     token: null,
//   });

//   audioTracks.map((track) => track.play());
//   const deviceLoading = isLoadingMic || isLoadingCam;
//   if (deviceLoading)
//     return (
//       <div className="flex flex-col items-center pt-40">Loading devices...</div>
//     );
//   const unit = "minmax(0, 1fr) ";

//   return (
//     <div className="flex flex-col justify-between w-full h-screen p-1">
//       <div
//         className={`grid  gap-1 flex-1`}
//         style={{
//           gridTemplateColumns:
//             remoteUsers.length > 9
//               ? unit.repeat(4)
//               : remoteUsers.length > 4
//               ? unit.repeat(3)
//               : remoteUsers.length > 1
//               ? unit.repeat(2)
//               : unit,
//         }}
//       >
//         <LocalVideoTrack
//           track={localCameraTrack}
//           play={true}
//           className="w-full h-full"
//         />
//         {remoteUsers.map((user) => (
//           <RemoteUser user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Call;




//############


// "use client";

// import React from 'react';

// import { MuteAudioButton, MuteVideoButton, StartScreenShareButton, StopScreenShareButton } from "../components/ControlButtons";

// import { useEffect, useState } from "react";
// import AgoraRTC, {
//   AgoraRTCProvider,
//   LocalVideoTrack,
//   RemoteUser,
//   useJoin,
//   useLocalCameraTrack,
//   useLocalMicrophoneTrack,
//   usePublish,
//   useRTCClient,
//   useRemoteAudioTracks,
//   useRemoteUsers,
// } from "agora-rtc-react";
// import Link from "next/link";
// import {
//   MuteAudioButton,
//   MuteVideoButton,
//   StartScreenShareButton,
//   StopScreenShareButton,
// } from "../components";

// function Call(props: { appId: string; channelName: string }) {
//   const [isClient, setIsClient] = useState(false);
//   const client = useRTCClient(
//     AgoraRTC.createClient({ codec: "vp8", mode: "rtc" })
//   );

//   useEffect(() => {
//     setIsClient(true); // Ensure client-side logic runs only after mounting
//   }, []);

//   if (!isClient) return null; // Or show a loading spinner


//   return (
//     <AgoraRTCProvider client={client}>
//       <Videos channelName={props.channelName} AppID={props.appId} />
//       <div className="fixed z-10 bottom-0 left-0 right-0 flex justify-center gap-4 pb-4">
//         <Link
//           className="px-5 py-3 text-base font-medium text-center text-white bg-red-400 rounded-lg hover:bg-red-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-40"
//           href="/"
//         >
//           End Call
//         </Link>
//       </div>
//     </AgoraRTCProvider>
//   );

//   const handleMuteAudio = () => {
//     // Logic to mute/unmute audio
//   };

//   const handleMuteVideo = () => {
//     // Logic to mute/unmute video
//   };

//   const handleStartScreenShare = () => {
//     // Logic to start screen sharing
//   };

//   const handleStopScreenShare = () => {
//     // Logic to stop screen sharing
//   };

//   return (
//     <div>
//       <h1>Video Call</h1>
//       <div className="flex space-x-4">
//         <MuteAudioButton onClick={handleMuteAudio} />
//         <MuteVideoButton onClick={handleMuteVideo} />
//         <StartScreenShareButton onClick={handleStartScreenShare} />
//         <StopScreenShareButton onClick={handleStopScreenShare} />
//       </div>
//     </div>
//   );
// }

// function Videos(props: { channelName: string; AppID: string }) {
//   const { AppID, channelName } = props;
//   const { isLoading: isLoadingMic, localMicrophoneTrack } =
//     useLocalMicrophoneTrack();
//   const { isLoading: isLoadingCam, localCameraTrack } = useLocalCameraTrack();
//   const remoteUsers = useRemoteUsers();
//   const { audioTracks } = useRemoteAudioTracks(remoteUsers);

//   usePublish([localMicrophoneTrack, localCameraTrack]);
//   useJoin({
//     appid: AppID,
//     channel: channelName,
//     token: null,
//   });

//   audioTracks.map((track) => track.play());
//   const deviceLoading = isLoadingMic || isLoadingCam;

//   const [audioMuted, setAudioMuted] = React.useState(false);
//   const [videoMuted, setVideoMuted] = React.useState(false);

//   const handleToggleAudio = () => {
//     if (localMicrophoneTrack) {
//       localMicrophoneTrack.setEnabled(audioMuted);
//       setAudioMuted((prev) => !prev);
//     }
//   };

//   const handleToggleVideo = () => {
//     if (localCameraTrack) {
//       localCameraTrack.setEnabled(videoMuted);
//       setVideoMuted((prev) => !prev);
//     }
//   };

//   const handleStartScreenShare = async () => {
//     const screenTrack = await AgoraRTC.createScreenVideoTrack();
//     await client.unpublish(localCameraTrack);
//     await client.publish(screenTrack);
//   };

//   const handleStopScreenShare = async () => {
//     const screenTrack = await AgoraRTC.createScreenVideoTrack();
//     await client.unpublish(screenTrack);
//     await client.publish(localCameraTrack);
//   };

//   if (deviceLoading)
//     return (
//       <div className="flex flex-col items-center pt-40">Loading devices...</div>
//     );

//   const unit = "minmax(0, 1fr) ";

//   return (
//     <div className="flex flex-col justify-between w-full h-screen p-1">
//       <div
//         className={`grid gap-1 flex-1`}
//         style={{
//           gridTemplateColumns:
//             remoteUsers.length > 9
//               ? unit.repeat(4)
//               : remoteUsers.length > 4
//               ? unit.repeat(3)
//               : remoteUsers.length > 1
//               ? unit.repeat(2)
//               : unit,
//         }}
//       >
//         <LocalVideoTrack
//           track={localCameraTrack}
//           play={true}
//           className="w-full h-full"
//         />
//         {remoteUsers.map((user) => (
//           <RemoteUser user={user} />
//         ))}
//       </div>
//       <div className="fixed z-10 bottom-16 left-0 right-0 flex justify-center gap-4">
//         <MuteAudioButton isMuted={audioMuted} handleToggle={handleToggleAudio} />
//         <MuteVideoButton isVideoOff={videoMuted} handleToggle={handleToggleVideo} />
//         <StartScreenShareButton handleStart={handleStartScreenShare} />
//         <StopScreenShareButton handleStop={handleStopScreenShare} />
//       </div>
//     </div>
//   );
// }


// export default Call;


"use client";

import React, { useEffect, useState } from 'react';
import AgoraRTC, {
  AgoraRTCProvider,
  LocalVideoTrack,
  RemoteUser,
  useJoin,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  usePublish,
  useRTCClient,
  useRemoteAudioTracks,
  useRemoteUsers,
} from "agora-rtc-react";
import Link from "next/link";

// Import the buttons from the components
import {
  MuteAudioButton,
  MuteVideoButton,
  StartScreenShareButton,
  StopScreenShareButton,
} from "../components";

function Call(props: { appId: string; channelName: string }) {
  const [isClient, setIsClient] = useState(false);
  const client = useRTCClient(
    AgoraRTC.createClient({ codec: "vp8", mode: "rtc" })
  );

  useEffect(() => {
    setIsClient(true); // Ensure client-side logic runs only after mounting
  }, []);

  if (!isClient) return null; // Or show a loading spinner

  return (
    <AgoraRTCProvider client={client}>
      <Videos channelName={props.channelName} AppID={props.appId} />
      <div className="fixed z-10 bottom-0 left-0 right-0 flex justify-center gap-4 pb-4">
        <Link
          className="px-5 py-3 text-base font-medium text-center text-white bg-red-400 rounded-lg hover:bg-red-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-40"
          href="/"
        >
          End Call
        </Link>
      </div>
    </AgoraRTCProvider>
  );
}

function Videos(props: { channelName: string; AppID: string }) {
  const { AppID, channelName } = props;
  const { isLoading: isLoadingMic, localMicrophoneTrack } =
    useLocalMicrophoneTrack();
  const { isLoading: isLoadingCam, localCameraTrack } = useLocalCameraTrack();
  const remoteUsers = useRemoteUsers();
  const { audioTracks } = useRemoteAudioTracks(remoteUsers);

  usePublish([localMicrophoneTrack, localCameraTrack]);
  useJoin({
    appid: AppID,
    channel: channelName,
    token: null,
  });

  audioTracks.map((track) => track.play());
  const deviceLoading = isLoadingMic || isLoadingCam;

  const [audioMuted, setAudioMuted] = useState(false);
  const [videoMuted, setVideoMuted] = useState(false);

  const handleToggleAudio = () => {
    if (localMicrophoneTrack) {
      localMicrophoneTrack.setEnabled(audioMuted);
      setAudioMuted((prev) => !prev);
    }
  };

  const handleToggleVideo = () => {
    if (localCameraTrack) {
      localCameraTrack.setEnabled(videoMuted);
      setVideoMuted((prev) => !prev);
    }
  };

  const handleStartScreenShare = async () => {
    const screenTrack = await AgoraRTC.createScreenVideoTrack();
    await client.unpublish(localCameraTrack);
    await client.publish(screenTrack);
  };

  const handleStopScreenShare = async () => {
    const screenTrack = await AgoraRTC.createScreenVideoTrack();
    await client.unpublish(screenTrack);
    await client.publish(localCameraTrack);
  };

  if (deviceLoading)
    return (
      <div className="flex flex-col items-center pt-40">Loading devices...</div>
    );

  const unit = "minmax(0, 1fr) ";

  return (
    <div className="flex flex-col justify-between w-full h-screen p-1">
      <div
        className={`grid gap-1 flex-1`}
        style={{
          gridTemplateColumns:
            remoteUsers.length > 9
              ? unit.repeat(4)
              : remoteUsers.length > 4
              ? unit.repeat(3)
              : remoteUsers.length > 1
              ? unit.repeat(2)
              : unit,
        }}
      >
        <LocalVideoTrack
          track={localCameraTrack}
          play={true}
          className="w-full h-full"
        />
        {remoteUsers.map((user) => (
          <RemoteUser user={user} />
        ))}
      </div>
      <div className="fixed z-10 bottom-16 left-0 right-0 flex justify-center gap-4">
        <MuteAudioButton isMuted={audioMuted} handleToggle={handleToggleAudio} />
        <MuteVideoButton isVideoOff={videoMuted} handleToggle={handleToggleVideo} />
        <StartScreenShareButton handleStart={handleStartScreenShare} />
        <StopScreenShareButton handleStop={handleStopScreenShare} />
      </div>
    </div>
  );
}

export default Call;

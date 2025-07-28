import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';


const VideoPlayer = ({ src, type }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const player = videojs(videoElement, {
      controls: true,
      autoplay: false,
      preload: 'auto',
      sources: [{
        src: src,
        //type: 'application/x-mpegURL' // or 'video/mp4' if you're using MP4 files
		 type: type
		
      }]
    });

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [src]);

  return (
    <div>
      <video ref={videoRef} className="video-js vjs-default-skin" controls preload="auto" width="320" height="240"></video>
    </div>
  );
};

export default VideoPlayer;

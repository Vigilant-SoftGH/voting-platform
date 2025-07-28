import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';



const VideoPlayerMobile = ({ src, type }) => {
  const videoRefMobile = useRef(null);
  


  useEffect(() => {
    const videoElement = videoRefMobile.current;

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
      <video ref={videoRefMobile} className="video-js vjs-default-skin" controls preload="auto" width="240" height="180"></video>
    </div>
  );
};

export default VideoPlayerMobile;

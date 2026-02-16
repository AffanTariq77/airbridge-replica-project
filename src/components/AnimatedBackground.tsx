import React, { useEffect, useRef } from "react";

const AnimatedBackground: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Ensure the video autoplays when component mounts
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const player = iframe.contentWindow;
      
      // Send play command to YouTube player
      setTimeout(() => {
        player?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      }, 1000);
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      <div className="absolute inset-0 w-full h-full">
        <iframe
          ref={iframeRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "100vw",
            height: "56.25vw", // 16:9 aspect ratio
            minHeight: "100vh",
            minWidth: "177.77vh", // 16:9 aspect ratio
          }}
          src="https://www.youtube.com/embed/QK5GIZCDHL0?playlist=QK5GIZCDHL0&autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1&disablekb=1&fs=0&cc_load_policy=0"
          title="Blue Purple Gradients and Shapes Animation"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;

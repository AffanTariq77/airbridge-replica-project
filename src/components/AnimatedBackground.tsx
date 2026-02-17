import React, { useEffect, useRef, useState } from "react";

const AnimatedBackground: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    setIsLoading(false);
    window.addEventListener('resize', checkMobile);

    // Ensure the video autoplays when component mounts
    if (iframeRef.current && !isMobile) {
      const iframe = iframeRef.current;
      const player = iframe.contentWindow;
      
      // Send play command to YouTube player
      setTimeout(() => {
        player?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      }, 1000);
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  if (isLoading) return null;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Video background for desktop and tablet */}
      {!isMobile && (
        <div className="absolute inset-0 w-full h-full hidden md:block">
          <iframe
            ref={iframeRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: "100vw",
              height: "56.25vw",
              minHeight: "100vh",
              minWidth: "177.77vh",
            }}
            src="https://www.youtube.com/embed/QK5GIZCDHL0?playlist=QK5GIZCDHL0&autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1&disablekb=1&fs=0&cc_load_policy=0"
            title="Blue Purple Gradients and Shapes Animation"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      )}

      {/* Optimized SVG animation for mobile with better performance */}
      <div className="absolute inset-0 w-full h-full md:hidden opacity-60">
        <svg
          className="w-full h-full"
          viewBox="0 0 375 667"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="mobilePurple" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.1" />
            </radialGradient>
            <radialGradient id="mobileCyan" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1" />
            </radialGradient>
            <radialGradient id="mobilePink" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#be185d" stopOpacity="0.1" />
            </radialGradient>
            <radialGradient id="mobileLavender" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          
          <circle cx="70" cy="80" r="150" fill="url(#mobilePurple)">
            <animate attributeName="cy" values="80;100;80" dur="12s" repeatCount="indefinite" />
            <animate attributeName="r" values="150;160;150" dur="14s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="-50" cy="400" r="180" fill="url(#mobileCyan)">
            <animate attributeName="cy" values="400;380;400" dur="15s" repeatCount="indefinite" />
            <animate attributeName="cx" values="-50;-30;-50" dur="16s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="350" cy="150" r="200" fill="url(#mobilePurple)">
            <animate attributeName="cy" values="150;170;150" dur="13s" repeatCount="indefinite" />
            <animate attributeName="r" values="200;210;200" dur="15s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="300" cy="550" r="120" fill="url(#mobilePink)">
            <animate attributeName="cy" values="550;530;550" dur="11s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="150" cy="350" r="90" fill="url(#mobileCyan)">
            <animate attributeName="cx" values="150;170;150" dur="10s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="250" cy="250" r="70" fill="url(#mobileLavender)">
            <animate attributeName="cy" values="250;270;250" dur="9s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedBackground;

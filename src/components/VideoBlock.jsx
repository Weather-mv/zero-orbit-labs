import React from 'react'
import ReactPlayer from 'react-player'

import { useState } from 'react'

const VideoBlock = () => {
      const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="project-image"
      onClick={() => window.location.href = 'https://drive.google.com/file/d/1VC3G89DevkgSkB9-RjVQDX5V7BQR8o0q/view?usp=sharing'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: "pointer", position: "relative" }}
    >
      {!isHovered ? (
        <img 
          src={'https://drive.google.com/file/d/1VC3G89DevkgSkB9-RjVQDX5V7BQR8o0q/view?usp=sharing'} 
          alt="Video thumbnail" 
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <ReactPlayer
          url={'https://drive.google.com/file/d/1VC3G89DevkgSkB9-RjVQDX5V7BQR8o0q/view?usp=sharing'}
          playing={true}
          controls={false}
          width="100%"
          height="100%"
          loop={true}
          muted={true}
          style={{ pointerEvents: "none" }}
        />
      )}
    </div>
  )
}

export default VideoBlock

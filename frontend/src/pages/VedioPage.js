import React from "react";
import "../style/VedioPage.css";

const VideoPage = () => {
  const videos = [
    { id: 1, title: "Company Meeting", src:"vedios/vedio3.mp4" },
    { id: 2, title: "Office Party", src:"vedios/vedio4.mp4"},
    { id: 3, title: "Annual deals Celebration", src:"vedios/vedio1.mp4" },
  ];

  return (
    <div className="video-page">
      <h2 className="video-title">Our Events & Highlights</h2>
      <div className="video-grid">
        {videos.map((video) => (
          video.src ? ( // Only render if video source exists
            <div key={video.id} className="video-card">
              <video controls autoPlay loop muted>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>{video.title}</p>
            </div>
          ) : (
            <p key={video.id} className="error-message">Video unavailable: {video.title}</p>
          )
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
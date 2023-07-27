import React, {useRef, useEffect} from 'react';

import videoFile from '../../videos/video1.mp4'; // Passe den Pfad zum Video entsprechend an

const VideoPlayer = (props) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        // Funktion, um das Video zu wiederholen, sobald es beendet ist
        const handleEnd = () => {
            videoElement.currentTime = 0;
            videoElement.play();
        };

        // Event Listener hinzufügen, um das Ende des Videos zu erkennen
        videoElement.addEventListener('ended', handleEnd);

        // Starte das Video-Autoplay
        videoElement.play();

        // Event Listener entfernen, wenn die Komponente unmontiert wird
        return () => {
            videoElement.removeEventListener('ended', handleEnd);
        };
    }, []);

    return (
        <article>
            <video ref={videoRef} controls={false} autoPlay muted>
                <source src={props.videoFile} type='video/mp4' />
                Your browser does not support the video element.
            </video>
            <div className='text-white max-w-screen-md mx-auto'>
                <h1>{props.heading}</h1>
                <p>{props.children}</p>
            </div>
        </article>
    );
};

export default VideoPlayer;

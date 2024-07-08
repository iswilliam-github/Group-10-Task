// document.getElementById('playBtn').addEventListener('click', function() {
//     console.log('Play button clicked');
//     // Add your play logic here
// });

// document.getElementById('pauseBtn').addEventListener('click', function() {
//     console.log('Pause button clicked');
//     // Add your pause logic here
// });

// document.getElementById('stopBtn').addEventListener('click', function() {
//     console.log('Stop button clicked');
//     // Add your stop logic here
// });

// document.getElementById('nextBtn').addEventListener('click', function() {
//     console.log('Next button clicked');
//     // Add your next track logic here
// });

// document.getElementById('prevBtn').addEventListener('click', function() {
//     console.log('Previous button clicked');
//     // Add your previous track logic here
// });


document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    const tracks = [
        "Assets/Audio/01 - My Soul Will Sings - In Jesus' Name.mp3", 
        "Assets/Audio/02 My Hope Is In Jesus.mp3",
        "Assets/Audio/03 King of Glory.mp3",
    ];

    let currentTrack = 0;

    function loadTrack(trackIndex) {
        audioPlayer.src = tracks[trackIndex];
        audioPlayer.load();
        audioPlayer.play();
    }

    playBtn.addEventListener('click', function() {
        audioPlayer.play();
    });

    pauseBtn.addEventListener('click', function() {
        audioPlayer.pause();
    });

    stopBtn.addEventListener('click', function() {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    });

    nextBtn.addEventListener('click', function() {
        currentTrack = (currentTrack + 1) % tracks.length;
            loadTrack(currentTrack);
    });

    prevBtn.addEventListener('click', function() {
        currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
        loadTrack(currentTrack);
    });
});

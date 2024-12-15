let playlist = JSON.parse(localStorage.getItem('playlist')) || [];
let currentIndex = 0;

// Get elements from DOM
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const progressBar = document.getElementById('progress-bar');
const playlistElement = document.getElementById('playlist');
const audioUpload = document.getElementById('audio-upload');
const currentTrack = document.getElementById('current-track');

// Create playlist
function createPlaylist() {
    playlistElement.innerHTML = '';
    playlist.forEach((track, index) => {
        const li = document.createElement('li');
        li.textContent = track.title;
        li.dataset.index = index;

        // Add click event
        li.addEventListener('click', () => {
            loadTrack(index);
            audio.play();
        });

        playlistElement.appendChild(li);
    });
    updateActiveTrack();
}

// Update active track in playlist
function updateActiveTrack() {
    document.querySelectorAll('#playlist li').forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });
}

// Load track
function loadTrack(index) {
    currentIndex = index;
    const track = playlist[currentIndex];
    audio.src = track.src;
    currentTrack.textContent = track.title;
    updateActiveTrack();
}

// Save playlist to localStorage
function savePlaylist() {
    localStorage.setItem('playlist', JSON.stringify(playlist));
}

// Update play/pause icon
function updatePlayPauseIcon() {
    if (audio.paused) {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    } else {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    }
}

// Event listeners
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
    updatePlayPauseIcon();
});

audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
});

audio.addEventListener('ended', () => {
    loadTrack((currentIndex + 1) % playlist.length);
    audio.play();
});

audioUpload.addEventListener('change', (event) => {
    const files = Array.from(event.target.files);
    files.forEach(file => {
        if (!file.type.startsWith('audio/')) {
            alert('Only audio files are allowed!');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const track = {
                title: file.name,
                src: e.target.result,
            };
            playlist.push(track);
            createPlaylist();
            savePlaylist();
        };
        reader.readAsDataURL(file);
    });
});

// Initialize
if (playlist.length > 0) {
    loadTrack(0);
} else {
    currentTrack.textContent = 'No track available';
}
createPlaylist();

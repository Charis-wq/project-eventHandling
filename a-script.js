
let playlist = JSON.parse(localStorage.getItem('playlist')) || [];

// Get elements from DOM
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const progressBar = document.getElementById('progress-bar');
const playlistElement = document.getElementById('playlist');
const audioUpload = document.getElementById('audio-uplod');
const currentTrack = document.getElementById('current-track');

// Function to create playlist
function createPlaylist() {
    playlistElement.innerHTML = '';
    playlist.forEach((track, index) => {
        const li = document.createElement('li');
        li.textContent = track.title;
        li.dataset.src = track.src;

        // Add event listener for playlist item
        li.addEventListener('click', () => {
            audio.src = track.src;
            audio.play();
            updatePlayPauseIcon();

            document.querySelectorAll('#playlist li').
            forEach(item => item.classList.remove('active'));
            li.classList.add('active');
            currentTrack.textContent = track.title;
        });

        playlistElement.appendChild(li);
    });
}

// Function to update play/pause icon
function updatePlayPauseIcon() {
    if (audio.paused) {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    } else {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    }
}

// Function to save playlist to localStorage
function savePlaylist() {
    localStorage.setItem('playlist', JSON.stringify(playlist));
}

// Initialize playlist
createPlaylist();

// Event listener for audio upload
audioUpload.addEventListener('change', (event) => {
    const files = Array.from(event.target.files);
    files.forEach(file => {
        if (!file.type.startsWith('audio/')) {
            alert('Hanya file audio yang diperbolehkan!');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const track = {
                title: file.name,
                src: e.target.result
            };
            playlist.push(track);
            createPlaylist();
            savePlaylist();
        };
        reader.readAsDataURL(file);
    });
});

// Event listener for play/pause button
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
    updatePlayPauseIcon();
});

// Update progress bar
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
});

// Handle audio error
audio.addEventListener('error', () => {
    alert('Terjadi kesalahan saat memuat audio.');
});

// Load first track if playlist exists
if (playlist.length > 0) {
    const firstTrack = playlist[0];
    audio.src = firstTrack.src;
    currentTrack.textContent = firstTrack.title;
}
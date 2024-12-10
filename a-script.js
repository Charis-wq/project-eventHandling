//put audio in local storage

let playlist = JSON.parse(localStorage.getItem('playlist'));

//get element from dom "ID"
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const progressBar = document.getElementById('progress-bar');
const playlistElement = document.getElementById('playlist');
const audioUplod = document.getElementById('audio-uplod');
const currentTrack = document.getElementById('current-track');

//function for list audio
function creatPlayList(){
    playlistElement.innerHTML = '';
    playlist.forEach((track, index) => {
        const li = document.createElement('li');
        li.textContent = track.title;
        li.dataset.src = track.src;
        //ad event listner for playlist
        li.addEventListener('click', () => {
            audio.src = track.src;
            audio.play()
            updatePlayPauseIcon()

            document.querySelectorAll('#playlist li')
            forEach(item => item.classlist.remove('active'));

            li.classList.add('active');
            currentTrack.textContent = track.title;
        })
        playlistElement.appendChild(li);
        
    });
}

//function for play pause 
function updatePlayPauseIcon(){
   if (audio.paused){
    playIcon.style.display ='none';
    pauseIcon.style.display ='block';
   } else {
    playIcon.style.display ='block';
    pauseIcon.style.display ='none';
   }
}

//function for playlist to local storage
function savePlaylist(){
    localStorage.setItem('playlist', JSON.stringify(playlist));
}
//inisialisasion playlist
creatPlayList()
//evenet listener for upload file audio
audioUplod.addEventListener('change', (event) => {
    const files = Array.from(event.target.files);
    files.forEach(file => {
        const reader = new FileReader()
        reader.onload = function(e){
           const track = {
            title: file.name,
            src: e.target.result
           }
        }
        
        }
    })
})
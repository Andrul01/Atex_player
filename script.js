console.log("Spotify");


let audio = new Audio('assets/songs/1.mp3');  
let play = document.getElementById('playMusic');
let currentSong = document.getElementById('currentSong');
let progress = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songs'))

let songIndex = 0;
let songs = [
    { 
        songName:"Somebody",
        filePath:"asests/songs/1.mp3",
        coverPath:"assets/img/1.jpg"
    },
    { 
        songName:"2much",
        filePath:"asests/songs/2.mp3",
        coverPath:"assets/img/2.jpg"
    },
    {
        songName:"Company",
        filePath:"asests/songs/3.mp3",
        coverPath:"assets/img/3.jpg"
    },
    {
        songName:"What do you mean",
        filePath:"asests/songs/3.mp3",
        coverPath:"assets/img/4.jpg"
    },
    {
        songName:"One time ",
        filePath:"asests/songs/3.mp3",
        coverPath:"assets/img/5.jpg"
    }
]

songItems.forEach((element,i)=> {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

play.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        playMusic.setAttribute('src','assets/img/pause.png');
        gif.style.opacity = 1;
    }
    else{
        audio.pause();
        playMusic.setAttribute('src','assets/img/play.png');
        gif.style.opacity = 0;
    }
})
audio.addEventListener('timeupdate',function(){
      pbar = parseInt((audio.currentTime/audio.duration)*100);
      progress.value = pbar;
})
progress.addEventListener('change',()=>{
    audio.currentTime = progress.value * audio.duration/100;
})

const allPlay = ()=>{
    let conPlay = Array.from(document.getElementsByClassName('play'));
    conPlay.forEach((element)=>{
        element.setAttribute('src','assets/img/play.png');
    })
}

// content play  button
let conPlay = Array.from(document.getElementsByClassName('play'));
conPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        allPlay();
        songIndex = parseInt(e.target.id);
        console.log(e.target);
        e.target.setAttribute('src','assets/img/play.png');
        e.target.setAttribute('src','assets/img/pause.png');
        audio.src = `assets/songs/${songIndex+1}.mp3`;
        audio.currentTime = 0;
        currentSong.innerHTML = songs[songIndex].songName;
        audio.play();
        playMusic.setAttribute('src','assets/img/pause.png');
        gif.style.opacity = 1;
    })
})

// next button
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4){
        songIndex = 0;
    }
    else{
        songIndex = songIndex + 1;
    }
    audio.src = `assets/songs/${songIndex+1}.mp3`;
    audio.currentTime = 0;
    currentSong.innerHTML = songs[songIndex].songName;
    audio.play();
    playMusic.setAttribute('src','assets/img/pause.png');
    gif.style.opacity = 1;
    
})

// previous button
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex = songIndex - 1;
    }
    audio.src = `assets/songs/${songIndex+1}.mp3`;
    audio.currentTime = 0;
    currentSong.innerHTML = songs[songIndex].songName;
    audio.play();
    playMusic.setAttribute('src','assets/img/pause.png');
    gif.style.opacity = 1;
})



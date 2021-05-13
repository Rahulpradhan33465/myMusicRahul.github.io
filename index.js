console.log('Hello Rahul You are The best ');
const play=document.getElementById('play');
const img=document.getElementById('img');
const audio=document.getElementById('audio');
let isPlaying=false;
const playMusic=()=>{
    isPlaying=true;
    play.classList.replace("fa-play-circle","fa-pause-circle");
    img.classList.add("animation");
    console.log('Play Music');
    audio.play();
     
}
const pauseMusic=()=>{
    isPlaying=false;
    play.classList.replace("fa-pause-circle","fa-play-circle");
    img.classList.remove("animation");
    console.log('Pause Music');
audio.pause();
}
play.addEventListener('click',()=>{
    isPlaying ? pauseMusic(): playMusic();
})
// My own Object for song

const songList=[
    {
        songName:"Beh Chala",
        singer:"Shashwat Sachdev, Yasser Desai",
        song:"./ArijitSong/Beh-Chala-b.mp3",
        src:"https://img.pagalworld.icu/Beh%20Chala-52-hd.jpg"
    },
  
    {
        songName:"Phir Bhi Tumko Chaahunga",
        singer:"Shashaa Tirupati, Mithoon, Arijit Singh,",
        song:"./ArijitSong/Phir.mp3",
        src:"https://img.pagalworld.icu/Phir%20Bhi%20Tumko%20Chaahunga-856-hd.jpg"
    },
    {
        songName:"Galti Se Mistake",
        singer:"Arijit Singh, Amit Mishra,",
        song:"./ArijitSong/Galti.mp3",
        src:"https://img.pagalworld.icu/Galti%20Se%20Mistake%20-942-hd.jpg"
    },
    {
        songName:"Ishq Mubarak",
        singer:"Arijit Singh",
        song:"./ArijitSong/Ishq-Mubarak.mp3",
        src:"https://img.pagalworld.icu/Ishq%20Mubarak-1609-hd.jpg"
    },
    {
        songName:"Aa Jao Na",
        singer:"Arijit Singh, Shashwat Sachdev,",
        song:"./ArijitSong/Aa-Jao-Na.mp3",
        src:"https://img.pagalworld.icu/Aa%20Jao%20Na-429-hd.jpg"
    },
    {
        songName:"Nashe Si Chadh Gayi",
        singer:"Arijit Singh, Caralisa Monteiro,",
        song:"./ArijitSong/Nashe.mp3",
        src:"https://img.pagalworld.icu/Nashe%20Si%20Chadh%20Gayi-1756-hd.jpg"
    },
    {
        songName:"Tera Fitoor",
        singer:"Arijit Singh",
        song:"./ArijitSong/Tera-Fitoor.mp3",
        src:"https://img.pagalworld.icu/Tera%20Fitoor-539-hd.jpg"
    },
    {
        songName:"Dil Meri Na Sune",
        singer:"Atif Aslam",
        song:"./ArijitSong/Dil-Meri-Na-Sune.mp3",
        src:"https://img.pagalworld.icu/Dil%20Meri%20Na%20Sune-540-hd.jpg"
    },
    {
        songName:'Woh Din From "Chhichhore"',
        singer:"Pritam Chakraborty, Arijit Singh,",
        song:"./ArijitSong/Woh-Din.mp3",
        src:"https://img.pagalworld.icu/53220px-ChhichhorePoster.jpg"
    },
    {
        songName:'Tera Yaar Hoon Main"',
        singer:"Arijit Singh,",
        song:"./ArijitSong/b-Tera-Yaar.mp3",
        src:"https://img.pagalworld.icu/Tera%20Yaar%20Hoon%20Main%20-323-hd.jpg"
    }
];
console.log(songList);


//RTequired Data for Changeing purpose

const next=document.getElementById('next');
const prev=document.getElementById('prev');
const songName=document.getElementById('song');
const singer=document.getElementById('singer');
const image=document.getElementById('img');

// Changing the Music Data 

const loadSong=(songList)=>{
songName.textContent=songList.songName;
singer.textContent=songList.singer;
audio.src=songList.song;
image.src=songList.src;
}


let songIndex=0;
loadSong(songList[songIndex]);

 
next.addEventListener('click',()=>{
    // console.warn('Next Song Please')
    songIndex=(songIndex+1)%songList.length;
    loadSong(songList[songIndex]);
    playMusic();
});
 
prev.addEventListener('click',()=>{
    console.warn('Prev Song Please')
    songIndex=(songIndex-1+songList.length)%songList.length;
    loadSong(songList[songIndex]);
     playMusic();
});
// Progress Bar Work
const progress=document.getElementById('progress');
const current=document.getElementById('current');
const durationMusic=document.getElementById('duration');
 
audio.addEventListener('timeupdate',(event)=>{
    const{currentTime,duration}=event.srcElement;
    let percent=(currentTime/duration)*100;
    progress.style.width=`${percent}%`;
    // Music Duration Update
    let Dmin=Math.round(duration/60);
    let Dsec=Math.round(duration%60);
//    console.log(`${Dmin}:${Dsec}`);
   let Cmin=Math.floor(currentTime/60);
   let Csec=Math.floor(currentTime%60);
//   console.log(`${Cmin}:${Csec}`);
if(Csec<10){
    Csec=`0${Csec}`;
}
  current.textContent=`${Cmin}:${Csec}`;
  if(duration){
    durationMusic.textContent=`${Dmin}:${Dsec}`;
  }

    
})

audio.addEventListener('ended',()=>{
    // console.warn('Next Song Please')
    songIndex=(songIndex+1)%songList.length;
    loadSong(songList[songIndex]);
    playMusic();
});
// Click On Progress Div
const progress_div=document.getElementById('progress_div');
progress_div.addEventListener('click',(event)=>{
    const{ duration}=audio;
let mvp=(event.offsetX/event.srcElement.clientWidth)*duration;
// console.log(mvp);
audio.currentTime=mvp;


})
 
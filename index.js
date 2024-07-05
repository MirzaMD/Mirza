const cover=document.getElementById("cover");
const currentSong=document.getElementById("currentSong");
const keys=document.querySelectorAll(".keys");
const title=document.getElementById("title");

let covers=["images/main.jpg","images/pointer.jpg","images/thelook.jpg","images/1_p58KyYwFBHkvDOQ-8SXRcA.jpg"];

let songs=["audio/whiteamerica.mp3","audio/business.mp3","audio/cleaning out my closet.mp3","audio/squaredance.mp3","audio/soldier.mp3",
    "audio/sayinggoodbyetoholywood.mp3","audio/drips.mp3","audio/withoutme.mp3","audio/singFOrTheMoment.mp3","audio/superman.mp3",
    "audio/hailessong.mp3","audio/when the music stops.mp3","audio/say what yousay.mp3","audio/till i ollapse.mp3","audio/mydadsgonecrazxy.mp3"];
let titles=["WHITE AMERICA","BUSINESS","CLEANING OUT MY CLOSET","SQUARE DANCE","SOLDIER","SAYING GOODBYE TO HOLLYWOOD","DRIPS",
    "WITHOUT ME","SING FOR THE MOMENT","SUPERMAN","HAILIE'S SONG","WHEN THE MUSIC STOPS","SAY WHAT YOU SAY","TILL I COLLAPSE","MY DAD'S GONE CRAZY"
]    
let i=0,n=0,t=0;
currentSong.src=songs[i];
keys[1].addEventListener("click",()=>{
    if(currentSong.paused){
        currentSong.play();
        keys[1].textContent="Pause";
    }
    else{
        currentSong.pause();
        keys[1].textContent="Play";
    }
    title.textContent=titles[t];
});
keys[2].addEventListener("click",()=>{
    i++;
    n++;
    t++;
    if(n>=covers.length) n=0;
    if(i>=songs.length)i=0;
    if(t>=titles.length)t=0;
    cover.src=covers[n];
    currentSong.src=songs[i];
    currentSong.play();
    keys[1].textContent="Pause";
    title.textContent=titles[t]
})
keys[0].addEventListener("click",()=>{
    i--;
    n--;
    t--;
    if(n<0)n=covers.length-1;
    if(i<0)i=songs.length-1;
    if(t<0)t=titles.length-1;
    cover.src=covers[n];
    currentSong.src=songs[i];
    currentSong.play();
    keys[1].textContent="Pause";
    title.textContent=titles[t]
})    

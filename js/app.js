let fillbar = document.querySelector(".fill");
let music = ["Aa Bhi Ja Mere Mehermaan (Jayantabhai Ki Luv Story) -  Pagalsongs.in.mp3" , "Aa Bhi Ja Sanam -  Pagalsongs.in.mp3" , "Aadat (Movie Version) -  Pagalsongs.in.mp3" , "Aas Paas (Solo Version) -  Pagalsongs.in.mp3" , "Allah Duhai Hai (Race2) -  Pagalsongs.in.mp3" , "Ankhon Se -  Pagalsongs.in.mp3" , "Atif Aslam (Mashup) -  Pagalsongs.in.mp3" , "Bakhuda Tumhi Ho -  Pagalsongs.in.mp3" , "Be Intehaan (Race 2) -  Pagalsongs.in.mp3" , "Beeghi Yaadein (Rock) -  Pagalsongs.in.mp3" , "Channa (Coke Studio) -  Pagalsongs.in.mp3" , "Chor Gayai -  Pagalsongs.in.mp3" , "Dil Dancer (Actor In Law) -  Pagalsongs.in.mp3" , "Dil Kare (Ho Mann Jann) -  Pagalsongs.in.mp3" , "Dil Na Jaane Kyun (Jayantabhai Ki Luv Story) -  Pagalsongs.in.mp3" , "Doorie -  Pagalsongs.in.mp3" , "Ehsaas (Doorie) -  Pagalsongs.in.mp3" , "Gal Sun Ja (Jal Pari) -  Pagalsongs.in.mp3" , "Gulabi Aankhein (Bonus Track) -  Pagalsongs.in.mp3" , "Hona Tha Pyar (Bol) -  Pagalsongs.in.mp3" , "Hum Kis Galli (Jal Pari) -  Pagalsongs.in.mp3" , "Humrahi (Meri Kahaani) -  Pagalsongs.in.mp3" , "Jal Pari (Coke Studio) -  Pagalsongs.in.mp3" , "Jal Pari -  Pagalsongs.in.mp3" , "Jeena Jeena (Badlapur) -  Pagalsongs.in.mp3" , "Jeene Laga Hoon (RV) -  Pagalsongs.in.mp3" , "Kaho Aaj Bol Do (Bol) -  Pagalsongs.in.mp3" , "Kaun Hoon Main -  Pagalsongs.in.mp3" , "Khair Mangda (A Flying Jatt) -  Pagalsongs.in.mp3" , "Kuch Is Tarah -  Pagalsongs.in.mp3" , "Le Ja Tu Mujhe (F.A.L.T.U) -  Pagalsongs.in.mp3" , "Mahiya Ve Soniya -  Pagalsongs.in.mp3" , "Main Rang Sharbaton Ka (PPNH) -  Pagalsongs.in.mp3" , "Mann Hota Hai (Meri Kahani) -  Pagalsongs.in.mp3" , "Mar Jaayen (LoveShudda) -  Pagalsongs.in.mp3" , "Maula -  Pagalsongs.in.mp3" , "Meri Kahani -  Pagalsongs.in.mp3" , "O Mere Khuda -  Pagalsongs.in.mp3" , "O Re Piya -  Pagalsongs.in.mp3" , "Pehli Dafa (Atif Aslam) -  Pagalsongs.in.mp3" , "Pehli Nazar Mein -  Pagalsongs.in.mp3" , "Piya O Re Piya (Tere Naal Love Ho Gaya) -  Pagalsongs.in.mp3" , "Rabba Sacheya (Coke Studio) -  Pagalsongs.in.mp3" , "Rabba Sacheya -  Pagalsongs.in.mp3" , "Rang Jo Lagyo (RV) -  Pagalsongs.in.mp3" , "Rona Chhadita (Mahi Mahi) -  Pagalsongs.in.mp3" , "Tajdar-E-Haram (Coke Studio) -  Pagalsongs.in.mp3" , "Tehzeeb (Jal Pari) -  Pagalsongs.in.mp3" , "Tera Hone Laga Hoon -  Pagalsongs.in.mp3" , "Tera Naam Doon (Entertainment) -  Pagalsongs.in.mp3" , "Tere Bin -  Pagalsongs.in.mp3" , "Tere Liye -  Pagalsongs.in.mp3" , "Tere Sang Yaara (Rustom) -  Pagalsongs.in.mp3" , "Toota Jo Kabhi Taara (A Flying Jatt) -  Pagalsongs.in.mp3" , "Tu Chahiye (Bajrangi Bhaijaan) -  Pagalsongs.in.mp3" , "Tu Jaane Na -  Pagalsongs.in.mp3" , "Tu Mohabbat Hai (Tere Naal Love Ho Gaya) -  Pagalsongs.in.mp3" , "Wasta e Pyar Da (Coke Studio) -  Pagalsongs.in.mp3" , "Woh Lamhe Woh Baatein -  Pagalsongs.in.mp3" , "Yakeen -  Pagalsongs.in.mp3" , "Younhi -  Pagalsongs.in.mp3" , "Zindagi -  Pagalsongs.in.mp3" , "Zindagi Aa Raha Hoon Main -  Pagalsongs.in.mp3"];
let musicno = 62;
let currentTime = document.querySelector("#time");
let like = 0;
let currentVolume = 0.75;
let currentSpeed = 1;


let audio = new Audio();
let currentSong = 0;
document.querySelector("#musictitle").innerHTML = musictitle[currentSong];
let downloadsong = document.querySelector("#downloadsong");

window.onload = playSong;

function playSong() {
  downloadsong.href = "https://pagaldownload.info/Atif%20Aslam/"+music[currentSong];
  audio.src = "https://pagaldownload.info/Atif%20Aslam/"+music[currentSong];
  var ran = Math.floor(Math.random() * 999) + 100;
  document.querySelector("#coverimg").src = "https://picsum.photos/id/"+ran+"/200/300";
  let title = music[currentSong].split(" -  Pagalsongs.in.mp3");
  document.querySelector("#musictitle").innerHTML = title[0];
  audio.play();
  audio.volume = currentVolume;
  audio.playbackRate = currentSpeed;
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    let playBtn = document.querySelector("#play-pause");
    playBtn.innerHTML = '<i class="fa fa-pause"></i>';
  } else {
    audio.pause();
    playBtn = document.querySelector("#play-pause");
    playBtn.innerHTML = '<i class="fa fa-play"></i>';
  }
}


audio.addEventListener("timeupdate", function() {
  let position = audio.currentTime / audio.duration;
  fillbar.style.width = position * 100 + "%";

  convertTime(Math.round(audio.currentTime));

  if (audio.ended) {
    nextAudio();
  }
});

function convertTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;

  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  currentTime.textContent = min + ":" + sec;

  totalTime(Math.round(audio.duration));
}

function totalTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;

  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  currentTime.textContent += " - " + min + ":" + sec;
}

let songslist = document.querySelector("#songslist");
let songsliststr = "<br>";
for (var i = 0; i <= musicno; i++) {
  let singletitle = music[i].split(" -  Pagalsongs.in.mp3");
  songsliststr+='<a href="#" style="color: white; text-decoration: none;" onclick="playListSong('+ i +')"><li>'+ singletitle[0] + '</li></a>';
}
songslist.innerHTML=songsliststr;


function nextAudio() {
  currentSong++;
  if (currentSong > musicno) {
    currentSong = 0;
  }
  playSong();
  playBtn = document.querySelector("#play-pause");
  playBtn.innerHTML = '<i class="fa fa-pause"></i>';
}

function prevAudio() {
  currentSong--;
  if (currentSong < 0) {
    currentSong = musicno;
  }
  playSong();
  playBtn = document.querySelector("#play-pause");
  playBtn.innerHTML = '<i class="fa fa-pause"></i>';
}


function decreaseVolume() {
  audio.volume -= 0.25;
  currentVolume = audio.volume;
  if (audio.volume == 0.25) {
    document.querySelector("#dv").classList.add("disablevolcontrol");
    document.querySelector("#dve").classList.add("dis");
  }else {
    document.querySelector("#iv").classList.remove("disablevolcontrol");
    document.querySelector("#ive").classList.remove("dis");
  }
}

function increaseVolume() {
	audio.volume += 0.25;
	currentVolume = audio.volume;
  if (audio.volume == 1) {
    document.querySelector("#iv").classList.add("disablevolcontrol");
    document.querySelector("#ive").classList.add("dis");
  }else {
    document.querySelector("#dv").classList.remove("disablevolcontrol");
    document.querySelector("#dve").classList.remove("dis");
  }
}


let volumemute = document.querySelector("#volume");
volumemute.addEventListener("click", function() {
  if (audio.volume >= 0.25) {
  	currentVolume=audio.volume;
    audio.volume = 0;
    document.querySelector("#volume").className = "fa fa-volume-mute";
  } else {
    audio.volume = currentVolume;
    document.querySelector("#volume").className = "fa fa-volume-up";
  }
});

function increaseSpeed() {
	audio.playbackRate += 0.25;
	currentSpeed = audio.playbackRate;
	if (audio.playbackRate == 2) {
    document.querySelector("#is").classList.add("disabled");
  }else {
    document.querySelector("#ds").classList.remove("disabled");
  }
}

function decreaseSpeed() {
    audio.playbackRate -= 0.25;
    currentSpeed = audio.playbackRate;
  if (audio.playbackRate == 0.25) {
    document.querySelector("#ds").classList.add("disabled");
  }else {
    document.querySelector("#is").classList.remove("disabled");
  }
}

function listopen() {
  let listcontent = document.querySelector("#listcontent");
  listcontent.style.height = "100%";
  listcontent.style.bottom = "0";
}


function listclose() {
  let listcontent = document.querySelector("#listcontent");
  listcontent.style.height = "0";
  listcontent.style.bottom = "100%";
}

function playListSong(num) {
  currentSong = num;
  playSong();
  playBtn = document.querySelector("#play-pause");
  playBtn.innerHTML = '<i class="fa fa-pause"></i>';
  listclose();
}

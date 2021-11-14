console.log("Welcome to Melogram");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('Asal Mein - Darshan Raval.mp3')
let masterPlay = documemt.getElementById('masterPlay');
let myProgressBar = documemt.getElementById('myProgressBar');

let songs = {
    (songName: "Asal Mein", filepath: "Darshan Raval/Asal Mein - Darshan Raval.mp3", coverPath: "cover1.jpg")
    (songName: "Saari Ki Saari", filepath: "Darshan Raval/Saari Ki Saari - Darshan Raval.mp3", coverPath: "cover1.jpg")
    (songName: "Bhula Dunga", filepath: "Darshan Raval/Bhula Dunga - Darshan Raval.mp3", coverPath: "cover1.jpg")
    (songName: "Yaara Teri Yaari", filepath: "Darshan Raval/Yaara Teri Yaari - Darshan Raval.mp3", coverPath: "cover1.jpg")
    (songName: "Baarish Lete Aana", filepath: "Darshan Raval/Baarish Lete Aana - Darshan Raval.mp3", coverPath: "cover1.jpg")
}

let audioElement = new Audio('1.mp3');
// audioElement.play();

//Listen to Events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
})
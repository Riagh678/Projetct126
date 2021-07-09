song1 = "";
song2 = "";
rightwristX = 0;
rightwristY = 0;
leftwristX = 0;
leftwristY = 0;
function preload(){
song1 = loadSound("music.mp3");
song2 = loadSound("music2.mp3");
}
function setup(){
canvas = createCanvas(600, 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotposes);
}
function modelLoaded(){
console.log("poseNet Is Initialized");
}
function draw(){
image(video, 0, 0, 600, 500);
}

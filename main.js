function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,model_loaded);
    posenet.on('pose',gotPoses);
}

function draw(){
    background('#969A97');
}

function model_loaded(){
    console.log("Posenet is inatialised");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}
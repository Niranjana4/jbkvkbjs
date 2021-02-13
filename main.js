nosex=0;
nosey=0;
difference=0;
rightwristx=0;
lieftwristx=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,model_loaded);
    posenet.on('pose',gotPoses);
}

function draw(){
    background('#000000');
    document.getElementById("name").innerHTML="width and height of the text wil be"+difference+"px";
    fill('#ADD8E6');
    stroke('#ADD8E6');
    textSize(difference,10,10);
    text("Niranjana",10, 100);
}

function model_loaded(){
    console.log("Posenet is inatialised");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log(nosex,nosey);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
        console.log(leftwristx,rightwristx);
    }
}

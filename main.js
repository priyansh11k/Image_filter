function preload(){

}


function setup(){
canvas = createCanvas(640,480);
//canvas.position(110,250);
canvas.center();
video = createCapture(VIDEO);
video.hide();
tint_colour = "";
}

function draw(){
image(video,0,0,640,480);
tint(tint_colour);
}

function filter_tint(){
tint_colour = document.getElementById("colour").value;
}

function take_snapshot(){
save("filter_picture.png");
}

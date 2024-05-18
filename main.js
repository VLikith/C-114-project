var canvas1;
var webcam1;
var storemodel;
var nosex=0;
var nosey=0;
var img1;
function preload(){
        img1=loadImage("m.png")
}
function setup(){
    canvas1=createCanvas(300, 300);
    canvas1.center();
    webcam1=createCapture(VIDEO);
    webcam1.size(300, 300);
    webcam1.hide();
    storemodel=ml5.poseNet(webcam1, modelstart);
    storemodel.on("pose", gotposes);
}
function gotposes(result){
    if (result.length>0){
        console.log(result);
        console.log("nose x= "+result[0].pose.nose.x);
        console.log("nose y= "+result[0].pose.nose.y);
        nosex=result[0].pose.nose.x;
        nosey=result[0].pose.nose.y;
    }
}
function modelstart(){
    console.log("Model loaded");
}
function click(){
    save("picture.png");
}
function draw(){
    image(webcam1, 0, 0, 300, 300);
    image(img1, nosex-22, nosey, 45, 35);
}
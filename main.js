nosex = 0;
nosey = 0;

function preload() {
    pignose = loadImage("clipart809253.png");
}

function setup() {
    canvas = createCanvas(500, 300);
    canvas.position(380, 200);

    video = createCapture(VIDEO);
    video.size(500,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x-20;
        nosey = results[0].pose.nose.y-10;
    }
}

function modelLoaded() {
    console.log("modelLoaded");
}

function draw() {
    image(video, 0, 0, 500, 300);
    console.log(nosex + " , " + nosey);
    image(pignose, nosex, nosey, 40, 30);

}

function takeYOU() {
    save("pic.jpeg");
}
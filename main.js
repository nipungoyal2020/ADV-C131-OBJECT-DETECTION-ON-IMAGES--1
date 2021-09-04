var img_1 = "";
var img_2 = "";
var img_3 = "";
var img_4 = "";
var img_5 = "";
var img_6 = "";
var img_7 = "";
var img_8 = "";

function preload() {
    img_1 = loadImage("IMG_20210902_163149.jpg");
    img_2 = loadImage("IMG_20210902_163254.jpg");
    img_3 = loadImage("IMG_20210902_163421.jpg");
    img_4 = loadImage("IMG_20210902_163652.jpg");
    img_5 = loadImage("IMG_20210902_163831.jpg");
    img_6 = loadImage("IMG_20210902_163921.jpg");
    img_7 = loadImage("IMG_20210902_164024.jpg");
    img_8 = loadImage("IMG_20210902_164122.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img_1, 0, 0, 640, 420);
}
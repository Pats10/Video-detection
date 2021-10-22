video = "";

status = "";

function preload()
{
   video = createVideo("video.mp4");
   video.hide();
}

function setup()
{
    canvas = createCanvas(600, 350);
    canvas.center();
}

function draw()
{
    image(video, 0, 0, 600, 350);
}

function start()
{
   //video.loop();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);

    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
   console.log("Model Loaded");
   status = true;
   video.loop();

   video.volume(0);
   video.speed(1);
}
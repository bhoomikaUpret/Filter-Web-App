necklaceY = 0;
necklaceX = 0;

function preload()
{
    necklace = loadImage('https://i.postimg.cc/B6YQ1xNJ/Silver-Necklace.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPose);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function gotPose(results)
{
    if(results.length > 0)
    {
        console.log(results);
        necklaceX = results[0].pose.nose.x - 35;
        necklaceY = results[0].pose.nose.y + 70;
        console.log("necklace x = " + necklaceX);
        console.log("necklace y = " + necklaceY);
    }
}

function draw()
{
    image(video,0,0,300,300);
    image(necklace , necklaceX , necklaceY , 90 , 90);
}

function take_snapshot()
{
    save('myeditedface.png');
}
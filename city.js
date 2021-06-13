status="";
img="";
objects=[];
function home()
{
    window.location="index.html";
}

function preload()
{
img=loadImage("city2.jpg");
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetection=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded()
{
    console.log('Model has Loaded!');
    status=true;
    objectDetection.detect(img,getResult);
}

function getResult(error,result)
{
    if(error)
    {
        console.log(error);
    }

    else
    {
        console.log(result);
        objects=result;
    }
}

function draw()
{
    if (status!="")
    {
for (i=0;i>objects.length;i++)
{
    document.getElementById("status").innerHTML="Status: Detected Objects";
    fill('red');
    textSize(20);
    percent=floor(objects[i].confidence*100);
    text(objects[i].label+" "+percent+"%"+objects[i].x,objects[i].y);
    noFill();
    stroke('red');
    strokeWeight(2);
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
    }
}

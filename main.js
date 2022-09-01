function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(400, 300);
    video = createCapture(VIDEO);
    video.hide();


    tint_color = "";
}

function draw() {
    image(video, 100, 100, 440, 280,);
    tint(tint_color);
     
    fill(28,26,67);
  
    stroke(28,26,67);
    
    circle(50,50,50)
    
    circle(50,430,50)

    circle(590,430,50)

    circle(590,50,50)

    fill(28,278,67);
  
    stroke(28,27,67);

    rect(30,50,40,380)

    rect(570,50,40,380)

    rect(30,50,580,40)

    rect(30,390,580,40)
}


function take_snapshot() {
save('sawsburger.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}
nose_x = 0
nose_y = 0

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/htht5zNP/Nose-Clown.png')
}
    function setup(){
 canvas = createCanvas(300,300)
 canvas.center()
 video = createCapture(VIDEO)
 video.hide() ;
 posenet = ml5.poseNet(video, modeloaded) 
 posenet.on('pose',gotposes)

    }
   function modeloaded(){
       console.log("Model Succesfully Loaded")

    }
    function gotposes(results){
        if (results.length > 0 ) {
            console.log (results)
            nose_x = results[0].pose.nose.x
            nose_y = results[0].pose.nose.y
        }
        
    }
    function draw(){
        image(video,0,0,300,300)
        image(clown_nose,nose_x,nose_y,25,25)
    }
    function Take_Snap(){
save(document.getElementById("Input").value)
    }
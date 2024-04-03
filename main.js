array1=["airplane,book,pen,ant,dog,apple"];
random_number=Math.floor(Math.random*array1.length)+1;
objects=array1[random_number];
document.getElementById("label").innerHTML="Draw sketch:"+objects;
timer_counter=0;
timer_check=0;
draw_sketch="";
answer_holder="";
score=0;
function setup()
{
    canvas=createCanvas(280,290);
    canvas.center();
    background("White");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
}
function clearCanvas()
{
    background("White");
}
function preload()
{
    classifier=ml5.imageClassifier('DoodleNet');
}
function draw()
{
    check_sketch()
    {

    }
   strokeWeight(13);
   stroke(0);
   if(mouseIsPressed) 
   {
       line(pmouseX,pmouseY,mouseX,mouseY);
   }
}
function classifyCanvas()
{
 classifier.classify(canvas,gotResults);
}
function gotResults(error,results)
{
    if (error){
        console.log(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML = 'Your sketch: ' + results[0].label;
    document.getElementById('Confidence').innerHTML = 'Confidence:' + Math.round(results[0].confidence * 100) + '%';
}
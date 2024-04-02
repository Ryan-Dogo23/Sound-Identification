function startClassification(){ navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/5cQdwffxs/model.json",modelReady);
}
function modelReady(){
  classifier.classify(gotResult);
}
function gotResult(error,results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("result").innerHTML="I can hear"+results[0].label;document.getElementById("acc").innerHTML="Accuracy-"+(results[0].confidence*100).toFixed(3)+" %";
  im1= document.getElementById("a1");
  im2= document.getElementById("a2");
  im3= document.getElementById("a3");
  im4= document.getElementById("a4");
  if(results[0].label=="clap"){ 
    im1.src="https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-01.gif";
    im2.src="https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-02.png";
    im3.src="https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-03.png";
    im4.src="https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-04.png";
  }else if(results[0].label=="bell"){
    im1.src="https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-01.png";
    im2.src="https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-02.gif";
    im3.src="https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-03.png";
    im4.src="https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-04.png";
  }else if(results[0].label=="snap"){
    im1.src="https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-01.png";
    im2.src="https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-02.png";
    im3.src="https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-03.gif";
    im4.src="https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-04.png";
  }else{
    im1.src="https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-01.png";
    im2.src="https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-02.png";
    im3.src="https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-03.png";
    im4.src="https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-04.gif";
    }
    }
}
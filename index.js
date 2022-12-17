// Import stylesheets
import './style.css';

var lines=[]
let body = document.body;
// Generate lines
function GenerateMainLines(){
  let generatedLines=document.createElementNS("http://www.w3.org/2000/svg", "svg");;

  generatedLines.setAttribute("viewBox","0 0 "+window.innerWidth+" "+window.innerHeight)

  generatedLines.append(GenerateSingleLine( 
    parseInt( window.innerWidth)/2,
    0,
    parseInt( window.innerHeight)/2,
    0));
  generatedLines.append(GenerateSingleLine( 
    parseInt( window.innerWidth)/2,
    innerWidth/2,
    parseInt( window.innerHeight)/2,
    0));
    generatedLines.append(GenerateSingleLine( 
      parseInt( window.innerWidth)/2,
      innerWidth,
      parseInt( window.innerHeight)/2,
      0));
      generatedLines.append(GenerateSingleLine( 
        parseInt( window.innerWidth)/2,
        innerWidth,
        parseInt( window.innerHeight)/2,
        innerHeight/2));    
        generatedLines.append(GenerateSingleLine( 
          parseInt( window.innerWidth)/2,
          innerWidth,
          parseInt( window.innerHeight)/2,
          innerHeight));   
          generatedLines.append(GenerateSingleLine( 
            parseInt( window.innerWidth)/2,
            innerWidth/2,
            parseInt( window.innerHeight)/2,
            innerHeight));   
            generatedLines.append(GenerateSingleLine( 
              parseInt( window.innerWidth)/2,
              0,
              parseInt( window.innerHeight)/2,
              innerHeight));   
              generatedLines.append(GenerateSingleLine( 
                parseInt( window.innerWidth)/2,
                0,
                parseInt( window.innerHeight)/2,
                innerHeight/2)); 
  return generatedLines
}
function GenerateSingleLine(x1,x2,y1,y2){
  let singleline=document.createElementNS("http://www.w3.org/2000/svg","line");
  singleline.setAttribute("x1",x1); //orig x, middle screen
  singleline.setAttribute("x2t",x2);
  singleline.setAttribute("y1",y1); //orig y,middle screen
  singleline.setAttribute("y2t",y2);
  singleline.setAttribute("x2",x1);
  singleline.setAttribute("y2",y1);
  singleline.setAttribute("stroke","black");

  return singleline  
}
function drawLines(lines){ 

  function animStep(){
    for(var i=0; lines.length; i++)
    {
      console.log(lines[i])
        var x1=parseFloat( lines[i].getAttribute("x1"));
        var x2t=parseFloat( lines[i].getAttribute("x2t"));
        var x2=parseFloat( lines[i].getAttribute("x2"));
        lines[i].setAttribute("x2" ,3000)
        //add or remove till we reach target
        //figure out which way were going 
        if(x1>=x2t)
        {
          lines[i].setAttribute("x2" ,x2+Math.floor(Math.random() * 10+ 1))
         console.log("x1>x2")
        }
        else if(x1<=x2t)
        {
          lines[i].setAttribute("x2" ,x2-Math.floor(Math.random() * 10+ 1))
          console.log("x1<x2")
        }
       // requestAnimationFrame(animStep);
      
    }
  
}
requestAnimationFrame(animStep);
}
lines.push(GenerateMainLines());
lines.forEach((e)=>{
body.append(e);
})
//console.log(body.getElementsByTagName("svg")[0].getElementsByTagName("line")[0].getAttribute("x1"))
drawLines(body.getElementsByTagNameNS("http://www.w3.org/2000/svg","svg")[0].getElementsByTagNameNS("http://www.w3.org/2000/svg","line"));
window.onload=function(){
	move1();
};
function move1(){
  var elem = document.getElementById("animate");   
  var flag = true;
  //var pos1 = 0;
  var pos2 = 0;
  var id = setInterval(frame1, 10);
  function frame1(){
	   if(flag == true){
        if(pos2>=100){
               flag = false
          }
        pos2++; elem.style.top = pos2 + "px"; 
	   }

	  else if(flag == false){
        if(pos2<=0){
               flag = true
          }
          pos2--; elem.style.top = pos2 + "px"; 
	   }
  }

};
//=====================================================        
//by default do not automatically advance in either direction
var autoNext = 0;
var autoPrev = 0;

//default advance delay is half a second
var autoAdavanceDelay = 500;
var timerID = -1;
//=====================================================        
function keyHeldEvent()
{
  //If the user has since relesaed the 2nd button that was pressed, but the primary
  //button is still held, reset its value to 1 so it can still have an effect
  if( autoNext == 2 && autoPrev == 0)
    autoNext = 1;
  if( autoPrev == 2 && autoNext == 0)
    autoPrev = 1;

  //auto advance
  if( autoNext == 1)
      nextImage();
  else if( autoPrev == 1 )
      previousImage();

  //wait delay period, then check again  
  if( autoNext == 1 || autoPrev == 1 )
   timerID = setTimeout("keyHeldEvent()", autoAdavanceDelay);
}
//=====================================================        
//Handle key release event
function keyUpEvent(key) 
{
  if (!key) 
  {
    key = event;
    key.which = key.keyCode;
  }
  switch (key.which) 
  {
    case 37: // leftkey
      autoPrev = 0;
      break;
    case 39: // rightkey
      autoNext = 0;
      break;
  }
}
//=====================================================        
//Handle key pressed by changing the current photo as appropriate
function keyDownEvent(key) 
{
  clearTimeout(timerID);

  if (!key) 
  {
    key = event;
    key.which = key.keyCode;
  }
  switch (key.which) 
  {
    case 36: // home
      firstImage()
      break;
    case 35: // end
      lastImage()
      break;
    case 37: // leftkey
      previousImage();
      autoPrev = 1;
      //if right/down key still pressed, degrade it but remember it's being held. this
      if( autoNext == 1 ) autoNext = 2;
      break;
    case 39: // rightkey
      nextImage(); 
      autoNext = 1; 
      //if left/up key still pressed, degrade it but remember it's being held. this
      if( autoPrev == 1 ) autoPrev = 2;
      break;
  }
  
  //wait delay period, then check if keys still held  
  if( autoNext == 1 || autoPrev == 1 )
    timerID = setTimeout("keyHeldEvent()", autoAdavanceDelay);
}
//=====================================================        
//Define and set startup function in order to install key handlers
function startup() 
{
  var isOp = navigator.userAgent.indexOf('Opera') > -1 ? 1 : 0;
  if (!isOp) document.onkeydown = keyDownEvent;
  if (!isOp) document.onkeyup   = keyUpEvent;
}

window.onload = startup;
//=====================================================        
//Functions for showing and hiding div elements, used to show popups
function showElement(ID)
{  document.getElementById(ID).style.visibility = "visible"; }

function hideElement(ID)
{ document.getElementById(ID).style.visibility = "hidden"; }
//=====================================================        

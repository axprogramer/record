function myFunction(){
    var un = document.forms["myForm"]["Uname"].value;
    var pw = document.forms["myForm"]["Pass"].value;
    var modal = document.getElementById("myModal");



 if(un=="Alix" && pw=="5802"){
   window.location.href = "myReport1.html"
    modal.style.display = "none";
    }
}
function myFunction2(){
  var un = document.forms["myForm"]["Uname"].value;
  var pw = document.forms["myForm"]["Pass"].value;
  var modal = document.getElementById("myModal2");



if(un=="Alix" && pw=="5802"){
 window.location.href = "myReport2.html"
  modal.style.display = "none";
  }
}

//Report Clickable
function myReportB(){
  window.location.href = "report2.html"
}
function myReportA(){
  window.location.href = "report1.html"
}
function goInA(){
  window.location.href = "myReport1.html"
}
function goInB(){
  window.location.href = "myReport2.html"
}

  // Get the modal
var modal = document.getElementById("myModal");
var modal = document.getElementById("myModal2");

// Get the button that opens the modal
function myLogin(){
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}
function myLogin2(){
  var modal = document.getElementById("myModal2");
  modal.style.display = "block";
}


function myA(){
    window.location.href = "myReport1.html"
}
function myB(){
    window.location.href = "myReport2.html"
}




//Enter to sumit Data
document.onkeypress = keyPress;

function keyPress(e){
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if(key == 13 || key == 3){
    myFunction();
   document.saveData.submit();
  }
}


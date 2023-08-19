// Smooth Scrolling
$("#navbar a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
  
      const hash = this.hash;
  
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 100,
        },
        800
      );
    }
  });


function resetHeight(){
  // reset the body height to that of the inner browser
  document.body.style.height = window.innerHeight + "px";
}
// reset the height whenever the window's resized
window.addEventListener("resize", resetHeight);
// called to initially set the height.
resetHeight();


// Drop-down menu for mobile design
function drop(){
  var b = document.getElementById("colapsed-menu");
  if (b.style.display === "none") {
      b.style.display = "flex";
  }else {
      b.style.display = "none";
  }
}

//Testtimonial function
function dot1(){
  let firstDot = document.getElementById("pointer1");
  let secondDot = document.getElementById("pointer2");
  let thirdDot = document.getElementById("pointer3");

  let first = document.getElementById("first");
  let second = document.getElementById("second");
  let third = document.getElementById("third");

  firstDot.style.background = "rgb(252 211 77)";
  secondDot.style.background = "none";
  thirdDot.style.background = "none";

  first.style.display = "block";
  second.style.display = "none";
  third.style.display = "none";
}

function dot2(){
  let firstDot = document.getElementById("pointer1");
  let secondDot = document.getElementById("pointer2");
  let thirdDot = document.getElementById("pointer3");

  let first = document.getElementById("first");
  let second = document.getElementById("second");
  let third = document.getElementById("third");

  secondDot.style.background = "rgb(252 211 77)";
  firstDot.style.background = "none";
  thirdDot.style.background = "none";

  second.style.display = "block";
  first.style.display = "none";
  third.style.display = "none";
}

function dot3(){
  let firstDot = document.getElementById("pointer1");
  let secondDot = document.getElementById("pointer2");
  let thirdDot = document.getElementById("pointer3");

  let first = document.getElementById("first");
  let second = document.getElementById("second");
  let third = document.getElementById("third");

  thirdDot.style.background = "rgb(252 211 77)";
  firstDot.style.background = "none";
  secondDot.style.background = "none";

  third.style.display = "block";
  first.style.display = "none";
  second.style.display = "none";
}
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



function drop(){
  var b = document.getElementById("colapsed-menu");
  if (b.style.display === "none") {
      b.style.display = "flex";
  }else {
      b.style.display = "none";
  }
}
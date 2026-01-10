//Startup Function
function startUp(){
  const intro = document.getElementById("loaderScreen");
  const main = document.getElementById("mainScreen");

    setTimeout(() =>{
        yearUpdater();
        intro.classList.add("hidden");
        main.classList.remove("hidden");
        AOS.init({
          duration: 1000,
        });
    }, 5000);
}

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


// function resetHeight(){
//   // reset the body height to that of the inner browser
//   const introScreen = document.getElementById("loaderScreen");
//   introScreen.style.height = window.innerHeight + "px";
// }
// //reset the height whenever the window's resized
// window.addEventListener("resize", resetHeight);
// //called to initially set the height.
// resetHeight();
// Wrap your code in a DOMContentLoaded event listener to ensure it runs after the DOM is fully loaded.



// Drop-down menu for mobile design
function drop(){
  const navbar = document.getElementById("colapsed-menu");
  const close = document.getElementById("close");
  const menu = document.getElementById("menu");
  navbar.classList.remove("-translate-y-[400px]");
  close.classList.remove("hidden");
  menu.classList.add("hidden");
}

function closeMenu(){
  console.log("Working...");
  const navbar = document.getElementById("colapsed-menu");
  const close = document.getElementById("close");
  const menu = document.getElementById("menu");
  navbar.classList.add("-translate-y-[400px]");
  close.classList.add("hidden");
  menu.classList.remove("hidden");
}


// Unavailable GitHub repo
function noGitHub(buttonElement) {
    const card = buttonElement.closest('.flex.flex-col.justify-between.items-center');
    const errorBoard = card.querySelector('.no-github');
    errorBoard.classList.remove('invisible');
    setTimeout(() => {
        errorBoard.classList.add('invisible');
    }, 3000);
}

// Mailer
var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
        status.innerHTML = `<p class="text-green-500">Thanks for contacting me</p>`;
        form.reset()
        } else {
        response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
            status.innerHTML = `<p class="text-red-500">Oops! There was a problem submitting your form</p>`;
            }
        })
    }
}).catch(error => {
    status.innerHTML = `<p class="text-red-500">Oops! There was a problem submitting your form</p>`;
});
}
// form.addEventListener("submit", handleSubmit)


// Year updater
function yearUpdater() {
    let currentYear = document.getElementById("currentYear");
    let year = new Date().getFullYear();

    currentYear.innerHTML = year;
}





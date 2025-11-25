// Much of this comes from looking at GeeksForGeeks tutorials and examples or other resources on the basics and adapting them slightly to do what I need them to
// Drop down menu
function dropDown(m) 
{
  document.getElementById(m).classList.toggle("show");
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) 
{
  if (!event.target.matches('.dropbtn')) 
  {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) 
    {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) 
      {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Slides carousel
//let slideIndex = [1,1];
let slideId = ["currentSlides", "slides"];

window.onload = function() {
 slideIndex = [0,0];
 showSlides(0, 0);
 //hideArrows(0);
 //showSlides(0, 1);
};

// Next/previous slide

// Thumbnail image control
function currentSlide(n, no) {
  showSlides(slideIndex[no] = n);
}

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

/* function hideArrows(no)
{
  // Check if there are multiple slides in the slideshow
  // Grab slide count
  let s = document.getElementsByClassName(slideId[no]);
  console.log("slides length: " + slideId[no].length);
  let p = document.getElementsByClassName("prev");
  let n = document.getElementsByClassName("next");
  p[no].display = "none";
  n[no].display = "none";
  if (s <= 1)
  {
    // Grab arrows and hide them

  }
} */

function showSlides(n, no) {
  console.log("n value: " + n + " no value: " + no + " slide class name: " + slideId[no]);
  let x = document.getElementsByClassName(slideId[no]);
  console.log("show slides: slides length: " + x.length);

  if (n > x.length - 1) {
    slideIndex[no] = 0;
  }
  if (n < 0) {
    slideIndex[no] = x.length - 1;
  }
  console.log("new n value: " + n);

  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  console.log("final n value: " + n);
  x[slideIndex[no]].style.display = "block";
}
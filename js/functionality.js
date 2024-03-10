
// Drop down menu
function dropDown() 
{
  document.getElementById("dropdownMenu").classList.toggle("show");
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
 showSlides(0, 1);
};

// Next/previous slide

// Thumbnail image control
function currentSlide(n, no) {
  showSlides(slideIndex[no] = n);
}

let slideIndex = [0,0];
/* Class the members of each slideshow group with different CSS classes */
//let slideId = ["mySlides1", "mySlides2"]
showSlides(0, 0);
showSlides(0, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  console.log("n value: " + n + " no value: " + no + " slide class name: " + slideId[no]);
  let x = document.getElementsByClassName(slideId[no]);
  console.log(x.length);

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

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

/* In case desired in future reference: https://jefferson-cuartas.medium.com/how-to-create-a-flip-card-effect-using-javascript-767dd945210c */
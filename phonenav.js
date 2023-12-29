// var phonenav = document.getElementById('phonenav');
// var menu = document.getElementById('open');
// var cancel = document.getElementById('cancel');

// function opener() {
//     // phonenav.style.display = 'block'
//     menu.style.display = 'none'
//     cancel.style.display = 'block'
// }

// function closer() {
//     phonenav.style.display = 'none'
//     cancel.style.display = 'none'
//     menu.style.display = 'block'
// }


$(document).ready(function(){
    $("#menu").click(function(){
    $("#phonenav").show(500)      
    $("#menu").hide(500)
    $(".cancel").show(500)
    });
  });
  
$(document).ready(function(){
    $(".cancel").click(function(){
    $("#phonenav").hide(500)
    $(".cancel").hide(500)
    $("#menu").show(500)
    });
  });
  
  


// var phonenav = document.getElementById('phonenav');

// function opennav() {
//   phonenav.style.visibility = 'visible'
// }

// function closenav() {
//   phonenav.style.visibility = 'hidden'
// }
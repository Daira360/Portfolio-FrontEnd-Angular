/*Sonido - Click*/
let sound = new Audio();
sound.src = "./assets/sounds/click.mp3";


/*Menú Navbar - X*/
let menu = document.querySelector("#menu-icon");
menu.onclick = () => {
    menu.classList.toggle("bx-x");
}


/*Tooltip - Skills*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

/*Carrucel - Proyectos*/
$('.carousel').carousel({
  interval: 2000
})


/*Modal*/
$(document).on('ready', function(){
  $modal = $('.modal-frame');
  $overlay = $('.modal-overlay');

  $modal.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
    if($modal.hasClass('state-leave')) {
      $modal.removeClass('state-leave');
    }
  });

  $('.close').on('click', function(){
    $overlay.removeClass('state-show');
    $modal.removeClass('state-appear').addClass('state-leave');
  });

  $('.open').on('click', function(){
    $overlay.addClass('state-show');
    $modal.removeClass('state-leave').addClass('state-appear');
  });

});
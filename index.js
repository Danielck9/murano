$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    dots: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  });
});


  


  $(document).ready(function(){
    $('.gallery-container').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });


  $(document).ready(function(){
    $('.clientes-carousel').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: false,
      lazyLoad: 'ondemand',
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
  });
  


  function checkAppear() {
    const sections = document.querySelectorAll('.anim-fade-in');
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const windowTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      if (windowTop + windowHeight >= sectionTop + sectionHeight / 6) {
        section.classList.add('appear');
      }
    });
  }
  
  
  window.addEventListener('scroll', checkAppear);
  




// Animaciones de navbar
  
// Seleccionar todos los enlaces de la Navbar
const navLinks = document.querySelectorAll('.navbar-link');

// Para cada enlace, añadir un listener para el evento 'click'
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    
    // Obtener el ID del elemento al que se quiere desplazar
    const targetId = link.getAttribute('data-target');
    
    // Obtener el elemento al que se quiere desplazar
    const target = document.querySelector(targetId);
    
    // Obtener la posición (en píxeles) del elemento al que se quiere desplazar
    const targetPosition = target.offsetTop;
    
    // Calcular la posición (en píxeles) de la Navbar (para restarla en el desplazamiento)
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    
    // Desplazar suavemente hasta la posición del elemento (usando la función 'scrollTo')
    window.scrollTo({
      top: targetPosition - navbarHeight,
      behavior: 'smooth'
    });
  });
});


// POPUP
$(document).ready(function() {

	$('.view').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});
});
  



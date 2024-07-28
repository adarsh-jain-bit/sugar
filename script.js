
$(' .owl-carousel').owlCarousel({
  loop: true,
  margin: 15,
  responsiveClass: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,

    },
    500: {
      items: 2,
    },
    700: {
      items: 2,

    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    }

  }

});
var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function() {
  owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger('prev.owl.carousel', [300]);
})



// toast

let toast = document.getElementById('toast')

function closebutton() {
  toast.style.display = "none"
}
// message box
const messagebox = document.querySelector('.message-box')
const cardbox = document.getElementById('card-box')
document.querySelector('.message-box').onclick = () => {
  cardbox.classList.toggle('active')
  //    cardbox.style.bottom="30px"
  messagebox.style.display = "none"
}

document.querySelector('.btn-close2').onclick = () => {
  cardbox.classList.remove('active')
  messagebox.style.display = "block"
}

var swiper = new Swiper(".one", {
  loop: true,
  spaceBetween: 30,
  autoplay: true,
  breakpoints: {
    0: {
      slidesPerView: 1,

    },
    500: {
      slidesPerView: 2,

    },
    764: {
      slidesPerView: 3,

    },
    1024: {
      slidesPerView: 3,

    },
  },
});
var swiper = new Swiper(".newlaunch", {
  loop: true,
  autoplay: true,
  breakpoints: {
    0: {
      slidesPerView: 1,

    },
    500: {
      slidesPerView: 1,

    },
    764: {
      slidesPerView: 1,

    },
    1024: {
      slidesPerView: 1,

    },
  },
});

let dropdownlinklips = document.getElementById('dropdown-link-lips')
document.getElementById('lips').onmouseover = () =>{
    dropdownlinklips.classList.toggle("active")
    dropdownlinkeye.classList.remove("active")
    dropdownlinkface.classList.remove("active")
}

let dropdownlinkeye = document.getElementById('dropdown-link-eye')
document.getElementById('eye').onmouseover = () =>{
    dropdownlinklips.classList.remove("active")
    dropdownlinkeye.classList.toggle("active")
    dropdownlinkface.classList.remove("active")
}
let dropdownlinkface = document.getElementById('dropdown-link-face')
document.getElementById('face').onmouseover = () =>{
    dropdownlinklips.classList.remove("active")
    dropdownlinkeye.classList.remove("active")
    dropdownlinkface.classList.toggle("active")
}

// alert-box
window.addEventListener('load', function(){
  setTimeout(
    function open(event){
      document.getElementById('alert-box').style.display="block"
    },2000
  )
});

document.querySelector('.close-alert').onclick = () => {
 document.getElementById('alert-box').style.display="none"
}
document.querySelector('#alert-button').onclick = () => {
 document.getElementById('alert-box').style.display="none"
}
document.querySelector('#alert-button2').onclick = () => {
 document.getElementById('alert-box').style.display="none"
}
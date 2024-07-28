$(' .owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    responsiveClass:true,
    autoplay:true,
    responsive:{
        0:{
            items:1,
           
        },
    500:{
    items:2,
     },
        700:{
            items:2,
           
        },
        1000:{
            items:3,
           },
        1200:{
            items:4,
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

function closebutton(){
    toast.style.display = "none"
}
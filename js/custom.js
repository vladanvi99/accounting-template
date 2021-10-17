$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      $target = $(target);

      $('html, body').stop().animate({
          'scrollTop':  parseInt($target.offset().top,10)
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 300) {
      $("#main-header").addClass("fixed");
  } else {
      $("#main-header").removeClass("fixed");
  }
});
jQuery('.bannerslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnDotsHover:false,
    autoplaySpeed:3000,
    dots: true,
    arrows: false,
    infinite: true,
    customPaging : function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a class="dot">0'+(i+1)+'</a>';
    },
});


jQuery('.testimonial-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnDotsHover:false,
    autoplaySpeed:3000,
    dots: true,
    arrows: false,
    infinite: true,
    responsive: [
        
        {
          breakpoint: 880,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});
//ABOUT QUESTION DIV
if(document.querySelector('#about .questions-divs')){
  let questionDivs = [...document.querySelectorAll('#about .questions-divs .question-div .question')]
  function displayText(){
    if(!this.classList.contains('active')){
      this.classList.add('active')
      this.querySelector('img').src = 'images/about us/Group 74.png'
      this.nextElementSibling.style.display='block'
    }else{
      this.classList.remove('active')
      this.querySelector('img').src = 'images/about us/Group 77.png'
      this.nextElementSibling.style.display='none'
    }
  }

  questionDivs.forEach(questionDiv => questionDiv.addEventListener('click',displayText))
}

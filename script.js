//============================Page number 2: About me ==========================================/


//============================Send message script=========================================//


var messageBox = document.querySelector('.js-message');
  var btn = document.querySelector('.js-message-btn');
  var card = document.querySelector('.js-profile-card');
  var closeBtn = document.querySelectorAll('.js-message-close');

  btn.addEventListener('click',function (e) {
      e.preventDefault();
      card.classList.add('active');
  });

  closeBtn.forEach(function (element, index) {
     console.log(element);
      element.addEventListener('click',function (e) {
          e.preventDefault();
          card.classList.remove('active');
      });
  });

  //card2
//=======================End of send message script==================================================//

//=============================Page number 6: Proffessional skills work=======================//

// this sript will make the skills bar rise slowly and numbers change slowly
//  to verify it's work click on refresh and go quicly to the professional skills page (page : 6)



jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000); // it will waite for 6 seconds before starting the process
	});
});

jQuery('.Count').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 6000, // for 6 seconds the skill bar will start growing slowly
    easing: 'swing',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});

//=======================End of skill bar script==================================================//

//=============================Page number 7: portfolio section=======================//

// this script is for swiping the article about my previous projects//
var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });

//=======================End of swiping article script==================================================//


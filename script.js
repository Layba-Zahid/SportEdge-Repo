$('.hero-slider').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: true,
      prevArrow: '<button class="custom-prev"><img src="hero-slider-leftt-arrow (1).png" alt="Next"></button>',
      nextArrow: '<button class="custom-next"><img src="hero-slider-right-arrow (6).png" alt="Next"></button>',
      customPaging: function(slider, i) {
        return '<button></button>';
      }
    });

    // Bottom thumbnail slider
    $('.filtering').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      arrows: true,
      prevArrow: $('.slider-wrapper .custom-prev'),
      nextArrow: $('.slider-wrapper .custom-next'),
      customPaging: function(slider, i) {
        return '<button></button>';
      },
     
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              arrows: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      });

    // Filter functionality
    var filtered = false;
    $('.js-filter').on('click', function(){
      if (filtered === false) {
        $('.filtering').slick('slickFilter', ':even');
        $(this).text('Unfilter Slides');
        filtered = true;
      } else {
        $('.filtering').slick('slickUnfilter');
        $(this).text('Filter Slides');
        filtered = false;
      }
    });




      function closeBar() {
      document.getElementById("notifyBar").style.display = "none";
    }




      function closeBar() {
      document.getElementById("notifyBar").style.display = "none";
      document.getElementById("Top-nav").style.marginTop = "0"; 
    }

    // Set initial margin for nav (equal to bar height)
    window.onload = function() {
      let bar = document.getElementById("notifyBar");
      let nav = document.getElementById("Top-nav");
      if (bar) {
        nav.style.marginTop = bar.offsetHeight + "px";
      }
    }


//    function toggleMobileMenu() {
//   const mobileMenu = document.getElementById('mobileMenu');
  
//   if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
//     mobileMenu.style.display = 'block';
//     setTimeout(() => {
//       mobileMenu.classList.add('show');
//     }, 10);
//   } else {
//     mobileMenu.classList.remove('show');
//     setTimeout(() => {
//       mobileMenu.style.display = 'none';
//     }, 300);
//   }
// }











 // Get elements
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('closeBtn');

    // Debug: Log elements on page load
    window.addEventListener('load', function() {
      console.log('Page loaded');
      console.log('Hamburger element:', hamburger);
      console.log('Mobile menu element:', mobileMenu);
      console.log('Close button element:', closeBtn);
    });

    // Open menu function
    function openMenu() {
      console.log('Opening menu...');
      if (mobileMenu) {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('Menu opened, classes:', mobileMenu.className);
      }
    }

    // Close menu function
    function closeMenu() {
      console.log('Closing menu...');
      if (mobileMenu) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
        console.log('Menu closed, classes:', mobileMenu.className);
      }
    }

    // Force open for testing
    function forceOpenMenu() {
      console.log('Force opening menu for test...');
      openMenu();
    }

    // Event listeners
    if (hamburger) {
      hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Hamburger clicked!');
        openMenu();
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Close button clicked!');
        closeMenu();
      });
    }

    // Close on overlay click
    if (mobileMenu) {
      mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
          console.log('Overlay clicked!');
          closeMenu();
        }
      });
    }

    // Close on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeMenu();
      }
    });

    // Test function for console
    window.testMenu = function() {
      console.log('Testing menu from console...');
      openMenu();
    }





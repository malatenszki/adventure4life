/* SAMPLE JS FILE CONTENTS */

(function ($) {

  /* Mobile menu */
  $(function () {
    $('.mobile-hamburger__trigger,.sliding-panel-fade-screen').on('click touchstart', function (e) {
      $('.block-adventure4life-main-menu,.sliding-panel-fade-screen').toggleClass('is-visible');
      e.preventDefault();
    });
  });

  /* Language switcher */
  $(function () {
    var languageActive = $('.block-language .links li.is-active').detach();
    languageActive.insertBefore($('.block-language .links li:first-child'));
  });

  $(function () {
    $(document).ready(function () {
      $('#fullpage').fullpage({
        anchors: ['1', '2', '3', '4', '5', '6', '7'],
        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor: ['transparent', '#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000', '#381', 'lightgreen'],
        paddingTop: '3em',
        paddingBottom: '10px',
        //fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {
          type: 'reveal',
          percentage: 62,
          property: 'translate'
        },

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function (index, nextIndex, direction) {},
        afterLoad: function (anchorLink, index) {},
        afterRender: function () {},
        afterResize: function () {},
        afterResponsive: function (isResponsive) {},
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {},
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {}
      });
    });
  });

  $(function () {
    particlesJS.load('particles-js', '/themes/custom/adventure4life/js/assets/particles.json', function () {
      console.log('callback - particles.js config loaded');
    });
  });

})(jQuery);

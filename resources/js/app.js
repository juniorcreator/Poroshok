window.$ = window.jQuery = require('jquery');
import macy from  'macy';
import slick from 'slick-carousel';
import '../js/vendors/scroll';
import '../js/vendors/map';



class App {
  constructor() {

  }

  macy_params(selector, column,trueOrder, waitForImages, m_x, m_y, br_1200, br_940, br_520, br_400
  ) {
    return{
      container: selector,
      columns: column,
      trueOrder: trueOrder,
      waitForImages: waitForImages,
      margin: {
        x: m_x,
        y: m_y
      },
      breakAt: {
        1200: br_1200,
        940: br_940,
        520: br_520,
        400: br_400
      }
    }
  }
  cut_eny_text(selector, condition,neededlength) {
    let text  = document.querySelectorAll(`.${selector}`);

    text.forEach(function (text) {
      let getText = text.textContent;

      text.textContent = getText.length > condition    ?
          text.textContent.slice(0, neededlength) + '...' :
          text.textContent;
    })
  };
  load_more_items(selector,condition) {
    let that = this;
    let counter = () => {
      let visible_items = $(`${selector}:visible`);
      let all_products = $(selector);
      let btn = $('.js-load-more');
    };

    $(selector).slice(0, 5).css('display','block');
    counter();
    $(".js-load-more").on('click', function (e) {
      e.preventDefault();
      setTimeout(() => {
        if ($(`${selector}:hidden`).length == 0) {
          $(this).remove();
          return
        }
      },400);

      $(`${selector}:hidden`).slice(0, condition).css('display','block');
      that.macy_gallery();

      counter();

      $('html,body').animate({
        scrollTop: $(this).offset().top
      }, 1000);
    });

  };
  show_all_items(selectItem) {
    $(selectItem).css('display','block');
  };
  load_home_gallery_items(){
    this.load_more_items('.gallery-item', 5);
  };
  show_all_popular_home(selector, button) {
    let items = $('.most-popular__wrap .pool-item');
    let btn = $('.js-btn--show-all');
    items.slice(0, 3).css('display','block');

    btn.on('click', () => {
      this.show_all_items(items);
      $('html,body').animate({
        scrollTop: btn.offset().top
      }, 1000);

      if ($(`items:hidden`).length == 0) {
        btn.addClass('hidden');
      }
    });
  };
  show_all_hit_sale(selector, button) {
    let items = $('.hit-sale .product');
    let btn = $('.js-hit-sale');
    items.slice(0, 5).css('display','block');

    btn.on('click', () => {
      this.show_all_items(items);
      if ($(`items:hidden`).length == 0) {
        btn.addClass('hidden');
      }
    });
  };
  show_all_sales(selector, button) {
    let items = $('.all-sales .product');
    let btn = $('.js-all-sales');
    items.slice(0, 5).css('display','block');

    btn.on('click', () => {
      this.show_all_items(items);
      if ($(`items:hidden`).length == 0) {
        btn.addClass('hidden');
      }
    });
  };
  sick_set() {

  };
  slider_powder_color() {
    let img_slider = $('.s-powder-color .slider-white-fon');
    img_slider.slick({
      nextArrow: `<button type="button" class="sliders-nav sliders-nav__next">
        <img src="resources/img/home-page/next.png" alt="">
      </button>`,
      prevArrow: `<button type="button" class="sliders-nav sliders-nav__prev">
        <img src="resources/img/home-page/prev.png" alt="">
      </button>`,
      adaptiveHeight: true,
    });
  };
  slider_powder_gradient() {
    let slider_powder_gradient = $('.slider-gradient');
    slider_powder_gradient.slick({
      nextArrow: `<button type="button" class="sliders-nav sliders-nav__next">
        <img src="resources/img/home-page/next_linear.png" alt="">
      </button>`,
      prevArrow: ` <button type="button" class="sliders-nav sliders-nav__prev">
        <img src="resources/img/home-page/pre_linear.png" alt="">
      </button>`,
      slidesToShow: 1,
      adaptiveHeight: true,
    });
  };
  scroll_why_us() {
    $(".s-why-us__wrap").mCustomScrollbar({
      axis: 'x',
      autoDraggerLength: false,
      scrollInertia:200,
      moveDragger:true
    });
  };


  init () {
    this.cut_eny_text();
    this.load_home_gallery_items();
    this.show_all_popular_home();
    this.slider_powder_color();
    this.slider_powder_gradient();
    this.show_all_hit_sale();
    this.show_all_sales();
    this.scroll_why_us();
  }

}

let app = new  App();

app.init();



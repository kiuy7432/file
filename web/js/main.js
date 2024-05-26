'use strict';

$(function(){
  //console.log('running!');

  // ブラウザの横幅可変での自動リロードを停止する場合、下の一行 windowResizeReload(); をコメントアウトしてください。
  // windowResizeReload(); は2箇所あるのでもう一箇所も同様にコメントアウトします。
  

  const lpswiper = new Swiper('.lp-slide-sm', {
    loop: true,
    effect: "fade",
    speed: 4000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });

  // fade-in
  var scrollAnimationElm = MISEL.querySelectorAll('.js-fadein');
  var scrollAnimationFunc = function() {
    for(var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 50;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('is-fadein');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);


  $('.header').clone().appendTo('#clone-header');
  $('.footer .lay-footer-middle').clone().appendTo('#clone-footer');
  $('.footer .nav-footer-bottom').clone().appendTo('#clone-sub-nav');

  // about, concept 横並び画像をコピー
  $('#copy-fig-concept').clone().appendTo('#append-fig-concept');
  $('#copy-fig-about').clone().appendTo('#append-fig-about');

  // menu button
  $('.btn-menu').on('click', function(e){
    $('.btn-menu').toggleClass('is-open');
    $('.btn-menu').toggleClass('is-show');
    $('.menu-overlay').toggleClass('is-open');
    $('body').toggleClass('is-noscroll');
  });
  $('.menu-overlay a, .menu-overlay > .bg').on('click', function(e){
    $('.menu-overlay').removeClass('is-open');
    $('.btn-menu').removeClass('is-open');
    $('.btn-menu').removeClass('is-show');
    $('body').removeClass('is-noscroll');
  });

  // play movie button

  //$('.btn-play-movie > .btn').on('click', function(e){
  //  if($('.modal-video video').length){
  //    $('.modal-video video')[0].play();
  //    $('.modal-video').toggleClass('is-open');
  //    $('body').toggleClass('is-noscroll');
  //  }else{
  //    $('.modal-video').toggleClass('is-open');
  //    $('body').toggleClass('is-noscroll');
  //  }
  //});
  //$('.modal-video > .bg').on('click', function(e){
  //  if($('.modal-video video').length){
  //    $('.modal-video video')[0].pause();
  //    $('.modal-video').removeClass('is-open');
  //    $('body').removeClass('is-noscroll');
  //  }else {
  //    $('.modal-video').removeClass('is-open');
  //    $('body').removeClass('is-noscroll');
  //  }
  //});

  const mql = window.matchMedia("(max-width: 767.98px)")

  function checkBreakPoint(mql) {
    if (mql.matches) {
      //console.log('sp')

      // fixed menu button
      window.addEventListener("scroll", function () {
        //const target = MISEL.querySelector('.home-news');
        //const rect = target.getBoundingClientRect();
        //const py = window.pageYOffset + rect.top;
        const py = 390;
        const elm = MISEL.querySelector(".btn-menu-fixed");
        const scroll = window.pageYOffset;
        //console.log(py)
        if (scroll <= py) {
          elm.classList.remove('is-show');
        } else {
          elm.classList.add('is-show');
        }
      });

      // 疑似要素追加
      $('<span class="btn-toggle"><span></span><span></span></span>').insertAfter('.mega-menu-item-has-children > .mega-menu-link');

      // メニュー開閉
      $('.mega-menu-item-has-children > ul').hide();
      $('.btn-toggle').on('click', function(e){
        $(this).toggleClass('is-open');
        $(this).next().slideToggle();
        $(this).parent().toggleClass('is-open');
      })

      // bg 高さ調整
      applyBgHeight();

    } else {
      //console.log('pc')

      // fixed menu button
      window.addEventListener("scroll", function () {
        //const target = MISEL.querySelector('.home-news');
        //const rect = target.getBoundingClientRect();
        //const py = window.pageYOffset + rect.top;
        const py = 500;
        const elm = MISEL.querySelector(".btn-menu-fixed");
        const scroll = window.pageYOffset;
        //console.log(py)
        if (scroll <= py) {
          elm.classList.remove('is-show');
        } else {
          elm.classList.add('is-show');
        }
      });

      // SP 打ち消し
      $('.btn-toggle').remove();

      // bg 高さ調整
      applyBgHeight();

    }
  }

  checkBreakPoint(mql)
  mql.addListener(checkBreakPoint)

})

// グラデーション背景の高さを設定
function applyBgHeight(){
  // HOME
  if (MISEL.querySelector('.home-intro') != null) {
    const headerHeight =  MISEL.querySelector('.header').offsetHeight;
    const introHeight =   MISEL.querySelector('.home-intro').offsetHeight;
    const newsHeight =    MISEL.querySelector('.home-news').offsetHeight;
    const conceptHeight = MISEL.querySelector('.home-concept').offsetHeight;
    const bgHeight = headerHeight + introHeight + newsHeight + conceptHeight;
    $('.bg-gradient-under').height(bgHeight);
  }
  // Sub Page
  if (MISEL.querySelector('.sub-page-header') != null) {
    const headerHeight =  MISEL.querySelector('.header').offsetHeight;
    const subheaderHeight =  MISEL.querySelector('.sub-page-header').offsetHeight;
    const bgHeight = headerHeight + subheaderHeight;
    $('.bg-gradient-under').height(bgHeight);
    $('.bg-gradient-upper').height(bgHeight);
  }
}

// Window Width Resize Reload
function windowResizeReload(){
  let lastInnerWidth = window.innerWidth;
  window.addEventListener("resize", function(){
  	if( lastInnerWidth != window.innerWidth ){
      lastInnerWidth = window.innerWidth;
      if(window.name != "onetime"){
        location.reload();
        window.name = "onetime";
      }else{
        window.name = "";
      }
  	}
  });
}


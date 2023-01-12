const sliderNeon = new Swiper('.slider-neon',{
   //freeMode: true,
   centeredSlides: true,
   // slidesPerView:2.5,
   mousewheel: true,
   parallax: true,
   breakpoints: {
      0: {
         slidesPerView:1.5,
         spaceBetween: 25,
         // mousewheel: false,
      },
      768: {
         slidesPerView:3.5,
         spaceBetween: 40,
      }
   }
})
const sliderBg = new Swiper('.slider-bg',{
   centeredSlides: true,
   slidesPerView:3.5,
   parallax: true,
   spaceBetween: 60,
})
sliderNeon.controller.control = sliderBg;
const slideItem = document.querySelectorAll('.slider-neon__slide').forEach(item => {
   item.addEventListener('click', event =>{
      item.classList.toggle('open');
   })
   
});

let blockItem = document.querySelector('.block');
sliderNeon.on('slideChange', e =>{
   sliderNeon.activeIndex > 0 ? blockItem.classList.add('hidden') : blockItem.classList.remove('hidden');
})
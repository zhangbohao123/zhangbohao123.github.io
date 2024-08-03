document.addEventListener('DOMContentLoaded', function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  // 初始化  
  slides[currentSlide].classList.add('active');

  //下一张函数
  function nextSlide() {
    slides[currentSlide].classList.remove('active'); // 移除当前图片的激活状态  
    currentSlide = (currentSlide + 1) % totalSlides; // 计算下一张图片的索引  
    slides[currentSlide].classList.add('active'); // 激活下一张图片  
  }

  // 上一张  
  function prevSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
  }

  // 绑定按钮点击事件  
  document.querySelector('.next').addEventListener('click', nextSlide);
  document.querySelector('.prev').addEventListener('click', prevSlide);

  // 添加自动播放功能  
  let autoPlayInterval = setInterval(nextSlide, 5000);

  // // 可选：添加鼠标悬停时停止自动播放，鼠标离开时恢复自动播放的功能  
  // const sliderContainer = document.querySelector('.slider');
  // sliderContainer.addEventListener('mouseenter', function () {
  //   clearInterval(autoPlayInterval); // 清除定时器，停止自动播放  
  // });
  // sliderContainer.addEventListener('mouseleave', function () {
  //   autoPlayInterval = setInterval(nextSlide, 3000); // 重新设置定时器，恢复自动播放  
  // });
});
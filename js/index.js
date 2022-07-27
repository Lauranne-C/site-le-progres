function scrollBanner() {
  var scrollPos;
  var headerLogo = document.querySelector('.header-paralax img');
  scrollPos = window.scrollY;

  if (scrollPos <= 1080) {
    headerLogo.style.transform = "translateY(" + (-scrollPos / 3) + "px" + ")";
    headerLogo.style.opacity = 1 - (scrollPos / 1080);
  }
}
window.addEventListener('scroll', scrollBanner);
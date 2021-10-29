const imagesLoading = document.querySelectorAll("img[data-src]");

const imageOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const preloadImage = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');
    };
};

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((items, observer) => {
        items.forEach(item => {if(!item.isIntersecting) {
        }});
    }, imageOptions);

    imagesLoading.forEach(img => {
        imageObserver.observe(img);
    });
}
else {
  imagesToLoad.forEach(img => {
  loadImages(img);
});
}
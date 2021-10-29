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

const imgObserver = new IntersectionObserver ((items, imgObserver) => {
    items.forEach(item => {
        if(!item.isIntersecting) {
            return;
        } else {
            preloadImage(item.target);
            imgObserver.unobserve(item.target);
        }
    });
}, options);

    imagesToLoad.forEach(img => {
        imageObserver.observe(img);
    });
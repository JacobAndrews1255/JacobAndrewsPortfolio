window.addEventListener('scroll', function () {
    let scroll = window.scrollY;

    // Adjust the transform property based on the scroll position
    document.querySelector('.img1').style.transform = 'translateY(' + scroll * 0.1 + 'px)';
    document.querySelector('.img2').style.transform = 'translateY(' + scroll * 0.3 + 'px)';
    document.querySelector('.img3').style.transform = 'translateY(' + scroll * 1.2 + 'px)';
    document.querySelector('.img4').style.transform = 'translateY(' + scroll * 0.2 + 'px)';
});
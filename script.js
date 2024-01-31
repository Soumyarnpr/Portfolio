window.onscroll = function () {
    if (window.pageYOffset > 0) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-75px";
    }
};

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('nav');

if (bar) {
    bar.addEventListener('click', function () {
        nav.classList.add('active');
        bar.style.display = "none";
    })
}

if (close) {
    close.addEventListener('click', function () {
        nav.classList.remove('active');
        bar.style.display = "block";
    })
}



window.addEventListener("click", () => {
    let scrolled_id = (document.documentElement.scrollTop) / (document.documentElement.clientHeight);
    scrolled_id = parseInt(scrolled_id) + 1;
    let screens = document.getElementsByClassName("screen");
    $("html").animate({
        scrollTop: screens[scrolled_id].offsetTop
    }, 400)
    console.log(scrolled_id);
})
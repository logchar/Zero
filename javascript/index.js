window.addEventListener("click", () => {
    let scrolled_id = (document.documentElement.scrollTop) / (document.documentElement.clientHeight);
    scrolled_id = parseInt(scrolled_id) + 1;
    let screens = document.getElementsByClassName("screen");
    document.documentElement.scrollTop = screens[scrolled_id].offsetTop;
    console.log(scrolled_id);
})
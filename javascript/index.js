
$(document).ready(function(){
    document.getElementById("s1").addEventListener("click", () => {
        let waterfall = document.getElementsByClassName("waterfall");
        $("html").animate({
            scrollTop: waterfall[0].offsetTop
        }, 400);
    });
});

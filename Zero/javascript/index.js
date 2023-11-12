
$(document).ready(function () {
    document.getElementById("s1").addEventListener("click", () => {
        let waterfall = document.getElementsByClassName("waterfall");
        $("html").animate({
            scrollTop: waterfall[0].offsetTop
        }, 400);
    });
});

$(document).ready(function () {
    var span = document.getElementsByClassName("close")[0];
    var modal = document.getElementById("hide");
    var btn = document.getElementById("clickButton");
    var content1 = document.getElementById("basicInformation");
    var content2 = document.getElementById("net");
    var scrollPosition;
    var btn1 = document.getElementById("clickButton2");
    var btn2 = document.getElementById("clickButton3");
    btn.onclick = function () {
        scrollPosition = window.scrollY
        modal.style.display = "block";
        document.body.classList.add('flow-open');
        document.body.style.top = -scrollPosition + 'px';
    }
    span.onclick = function () {
        modal.style.display = "none";
        document.body.classList.remove('flow-open');
        window.scrollTo(0, scrollPosition);
    }
    btn1.onclick = function () {
        content1.style.display = "block";
        content2.style.display = "none";
    }


    btn2.onclick = function () {
        content1.style.display = "none";
        content2.style.display = "block";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            content1.style.display = "none";
            content2.style.display = "none";
            window.scrollTo(0, scrollPosition);
        }
    }
});





// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

// this doesnt work properly yet
function scrollFunction() {
    h = 600;
    maxs = 90;
    mins = 30;
    console.log(document.body.scrollTop,60-(document.body.scrollTop/h-1)*30, document.body.scrollTop < h)
    if (document.body.scrollTop <= h*2) {
        document.getElementById("header").style.fontSize = (maxs-mins)-(document.body.scrollTop/h-1)*mins + "px";
    } else {
        document.getElementById("header").style.fontSize = "30px";
    }

}

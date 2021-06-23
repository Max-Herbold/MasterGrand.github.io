// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

h = 50;
maxs = 70;
mins = 20;
function position() {
    document.getElementById("header").style.fontSize = maxs + "px";
}

function scrollFunction() {
    if (document.body.scrollTop < h*2) {
        document.getElementById("header").style.fontSize = ((mins-maxs)/(h*2))*document.body.scrollTop+maxs
    } else {
        document.getElementById("header").style.fontSize = mins + "px";
    }
}

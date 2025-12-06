var last_scroll_top = 0;

const header = document.getElementById("header");

onscroll = (event) => {
    var scroll_top = document.documentElement.scrollTop;
    if (scroll_top < 100 || scroll_top < last_scroll_top) {
        header.classList.remove("hide");
    } 
    else if (scroll_top > last_scroll_top) {
        header.classList.add("hide");
        document.getElementById("header-nav").classList.remove("show")
    } 
    last_scroll_top = scroll_top <= 0 ? 0 : scroll_top;
}

function toggle_dropdown(){
    document.getElementById("header-nav").classList.toggle("show");
}
var vars = document.querySelector(':root').style;
var isGreen = true;

document.addEventListener('DOMContentLoaded', function() {
    green();
});

document.getElementById("ftc-switch").addEventListener('click', (event) => {
    if(isGreen){
        purple();
    } else {
        green();
    }
    isGreen = !isGreen
})

function green(){
    vars.setProperty('--nerd-herd-blue', '#3E7D51');
    vars.setProperty('--nerd-herd-navy', '#1f5b38');
    document.getElementById("seven-squared").style.display = "flex";
    document.getElementById("singularity").style.display = "none";
    document.getElementById("logo-bot").src = "../images/ftc/ftc49.jpg";
    document.getElementById("logo-top").src = "../images/ftc/ftc49.jpg";
    document.getElementById("ftc-switch-image").src = "../images/ftc/49_switch.png";
}

function purple(){
    vars.setProperty('--nerd-herd-blue', '#725B91');
    vars.setProperty('--nerd-herd-navy', '#533e6d');
    document.getElementById("seven-squared").style.display = "none";
    document.getElementById("singularity").style.display = "flex";
    document.getElementById("logo-bot").src = "../images/ftc/ftc51.jpg";
    document.getElementById("logo-top").src = "../images/ftc/ftc51.jpg";
    document.getElementById("ftc-switch-image").src = "../images/ftc/51_switch.png";
}
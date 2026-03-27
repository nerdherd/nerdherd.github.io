var vars = document.querySelector(':root').style;

document.addEventListener('DOMContentLoaded', function() {
    green();
});

function green(){
    vars.setProperty('--nerd-herd-blue', '#3E7D51');
    vars.setProperty('--nerd-herd-navy', '#1f5b38');
    document.getElementById("seven-squared").style.display = "flex";
    document.getElementById("singularity").style.display = "none";
}

function purple(){
    vars.setProperty('--nerd-herd-blue', '#725B91');
    vars.setProperty('--nerd-herd-navy', '#533e6d');
    document.getElementById("seven-squared").style.display = "none";
    document.getElementById("singularity").style.display = "flex";
}
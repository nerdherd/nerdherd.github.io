// var biocoreReleaseDate = new Date("2027-01-09T17:00:00Z");
var biocoreReleaseDate = new Date("2026-08-15T20:45:30Z");

var countdown = setInterval(function() {

    var now = new Date().getTime();
    var distance = biocoreReleaseDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("Dcounter").textContent = days;
    document.getElementById("Hcounter").textContent = hours;
    document.getElementById("Mcounter").textContent = minutes;
    document.getElementById("Scounter").textContent = seconds;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("first-yt").style.display = "flex";
        document.getElementById("countdown-container").style.display = "none";
    }


})
const seasons = [
    "2001: DIABOLICAL DYNAMICS", 
    "2002: ZONE ZEAL", 
    "2003: STACK ATTACK", 
    "2004: <em>FIRST</em> FRENZY",
    "2005: TRIPLE PLAY",
    "2006: AIM HIGH",
    "2007: RACK \"N\" ROLL",
    "2008: <em>FIRST</em> OVERDRIVE",
    "2009: LUNACY\u2122",
    "2010: BREAKAWAY\u2122",
    "2011: LOGO MOTION\u2122",
    "2012: REBOUND RUMBLE\u2122",
    "2013: ULTIMATE ASCENT\u2122",
    "2014: AERIAL ASSIST\u2122",
    "2015: RECYCLE RUSH\u2122",
    "2016: FIRST STRONGHOLD\u2122",
    "2017: FIRST STEAMWORKS\u2122",
    "2018: FIRST POWER UP\u2120",
    "2019: Destination: Deep Space Presented by The Boeing Company",
    "2020: INFINITE RECHARGE\u2120",
    "2021: INFINITE RECHARGE\u2120",
    "2022: RAPID REACT\u2120",
    "2023: CHARGED UP\u2120",
    "2024: CRESCENDO\u2120",
    "2025: REEFSCAPE\u2120",
    "2026: REBUILT\u2122",
    "2027: BIOCORE\u2122"
]

document.getElementById("btn-2027").scrollIntoView({ block: "center" });

function seasonSet(year){
    for(let i=0; i<seasons.length; i++){
        let tempYear = i + 2001;
        let id = `btn-${tempYear}`;
        console.log(id);
        document.getElementById(id).classList.remove("selected");
    }
    document.getElementById(`btn-${year}`).classList.add("selected");
    season = year-2001;
    update();
}

let season = 26;

const title = document.getElementById("season-name");

function update(){
    title.innerHTML = seasons.at(season);
    for(let i=0; i<seasons.length; i++){
        let tempYear = i + 2001;
        let id = `${tempYear}-sec`;
        console.log(id);
        document.getElementById(id).classList.remove("infocus");
    }
    document.getElementById(`${season+2001}-sec`).classList.add("infocus");
}
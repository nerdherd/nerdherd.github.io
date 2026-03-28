var currentAward = 0;

function switchUp(a, b){
    currentAward += 1;
    if(currentAward >= document.getElementById('awardList').length){
        currentAward = 0;
    }
    for (let item of document.getElementById('awardList')){
        item.style.display = "none";
    }
    document.getElementById('awardList')[currentAward].style.display = "flex";
}

function switchDown(){
    currentAward -= 1;
    if(currentAward < 0){
        currentAward = awardList.length-1;
    }
    for (let item of awardList){
        item.style.display = "none";
    }
    awardList[currentAward].style.display = "flex";
}

function test(a, b){
    for (let item of b){
        alert(item);
    }
}



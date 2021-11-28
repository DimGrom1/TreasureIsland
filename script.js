let map = document.getElementsByClassName("map")[0]
let pirate = document.getElementsByClassName("pirate")[0]
let help = document.getElementsByClassName("help")[0]
let kladX = Math.random()*400
let kladY = Math.random()*400
let clicks = 0
let restart = document.getElementsByClassName("restart")[0]
console.log(kladX,kladY);





restart.onclick = function(event){
    pirate.style.left = 45+"px"
    pirate.style.top = 0
    help.innerHTML = "удачи!!!"
    kladX = Math.random()*400
    kladY = Math.random()*400
}






map.onclick = function(event){
    console.log(event.offsetX,event.offsetY)
    let pirateX = event.offsetX-25;
    let pirateY = event.offsetY-25;
    let X = kladX-pirateX
    let Y = kladY-pirateY
    let dist = Math.sqrt(X*X+Y*Y)
    clicks = clicks+1
    pirate.style.left = pirateX+"px"
    pirate.style.top = pirateY+"px"
    help.innerHTML = "Силя"
    console.log(dist)
    if(dist<10){
        help.innerHTML = "ты нашел сокровище за " +clicks+" шагов"
    }
    else if(dist<25){
        help.innerHTML = "щас обажешься"
    }
    else if(dist<50){
        help.innerHTML = "горячо"
    }
    else if(dist<70){
        help.innerHTML = "тепло"
    }
    else if(dist<100){
        help.innerHTML = "холодно"
    }
    else if(dist<300){
        help.innerHTML = "северный полюс"
    }
    else{
        help.innerHTML = "мятная жвачка с холодной минералкой"
    }
}
// сделать внизу кнопку играть снова.по нажатию обновлять заголовок

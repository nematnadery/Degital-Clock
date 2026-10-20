let hours = document.getElementById('h')
let minutes = document.getElementById('m')
let seconds = document.getElementById('s')

setInterval(function(){
    let mainTime = new Date()
    let correntHour = mainTime.getHours()
    let correntMinutes = mainTime.getMinutes()
    let correntSeconds = mainTime.getSeconds()
    
    if(correntHour < 10){
       correntHour = '0' + correntHour
    }
    if(correntMinutes < 10){
       correntMinutes = '0' + correntMinutes
    }
    if(correntSeconds < 10){
        correntSeconds = '0' + correntSeconds
    }
    
    hours.textContent = correntHour
    minutes.textContent = correntMinutes
    seconds.textContent = correntSeconds
    
}, 1000)
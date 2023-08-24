

const hrs = document.querySelector('.hrs')
const sec = document.querySelector('.sec')
const min = document.querySelector('.min')



const Ticking = function () {
    let time = new Date()
    
    hrs.textContent = time.getHours() % 12 || 12
    sec.textContent = time.getSeconds()
    min.textContent = time.getMinutes()


}

setInterval(Ticking,1000)



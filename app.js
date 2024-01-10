let daysCount = document.getElementById('days')
let hoursCount = document.getElementById('hours')
let minutesCount = document.getElementById('minutes')
let secondsCount = document.getElementById('seconds')
let title = document.querySelector('.title')

let countDownDate = new Date('Mar 31, 2024 05:00:00').getTime()


let countDown = setInterval(() => {
    let currentDate = new Date().getTime()
    let timeLeft = countDownDate - currentDate
    
    let dd = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    let hh = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let mm = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    let ss = Math.floor((timeLeft % (1000 * 60)) / 1000)

    daysCount.innerText = dd
    hoursCount.innerText = hh
    minutesCount.innerText = mm
    secondsCount.innerText = ss

    timeLeft < 0 ? title.innerText = "We're launching!" : title.innerText

}, 1000)


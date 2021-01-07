
const weekday = document.querySelector('.weekday')
const dayEL = document.querySelector('.day')
const monthEL = document.querySelector('.month')
const timeEL = document.querySelector('.time')
const hourEL = document.querySelector('.hour')
const minutesEL = document.querySelector('.minute')
const secondsEL = document.querySelector('.second')
const AP = document.querySelector('.ap')
const button = document.querySelector('.btn')
const body = document.querySelector('body')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]



button.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-mode')
    changeText()
})

function changeText(){
    if(button.innerText == "Light Mode"){
        button.innerText = "Dark Mode"
    }else if(button.innerText == "Dark Mode"){
        button.innerText = "Light Mode"
    }
}

function setTime(){
    const time = new Date()
    const month = time.getMonth()
    const date = time.getDate()
    const day = time.getDay()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minute = time.getUTCMinutes()
    const seconds = time.getUTCSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEL.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    minutesEL.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`;
    secondsEL.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;


    timeEL.innerHTML = `${hoursForClock}:${minute < 10? `0${minute}` : minute} ${ampm}`

    weekday.innerHTML = days[`${day}`]
    monthEL.innerHTML = months[`${month}`]
    dayEL.innerHTML = `${date}`

}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
setTime()

setInterval(setTime, 1000)
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
const day = document.getElementById('day')

var monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'Desember',
]
const clock = setInterval(function time () {
    let today = new Date()
    let D = today.getDate()
    let m = today.getMonth()
    let y = today.getFullYear()
    let h = today.getHours()
    let min = today.getMinutes()

    day.innerHTML = `${d} ${monthName(m)} ${y}`
    hour.textContent = h
    minute.innerText = min
    second.innerText = sec
})
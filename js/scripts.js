const minutesEl = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')
const milisecondsEl = document.querySelector('#miliseconds')
const startBtn = document.querySelector('#startBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const resumeBtn = document.querySelector('#resumeBtn')
const resetBtn = document.querySelector('#resetBtn')

let interval
let minutes = 0
let seconds = 0
let miliseconds = 0
let isPaused = false

// ------------------------------Função para iniciar o cronômetro
startBtn.addEventListener('click',  () => {
    interval = setInterval(()=>{

        if (!isPaused) {
            miliseconds += 10

            if (miliseconds === 1000) {
                seconds++
                miliseconds = 0
            }

            if (seconds === 60) {
                minutes++
                seconds = 0
            }

            minutesEl.textContent = formatTime(minutes)
            secondsEl.textContent = formatTime(seconds)
            milisecondsEl.textContent = formatMiliseconds(miliseconds)
        }

    }, 10)

    startBtn.style.display = "none"
    pauseBtn.style.display = "block"
})

// ------------------------------Função de Pausar Timer
pauseBtn.addEventListener('click', () => {
    isPaused = true
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "block"
})

// ------------------------------ Função Continuar
resumeBtn.addEventListener('click', () => {
    isPaused = false
    pauseBtn.style.display = "block"
    resumeBtn.style.display = "none"
})

// ------------------------------ Função Reset
resetBtn.addEventListener('click', () => {
    clearInterval(interval)
    minutes = 0
    seconds= 0
    miliseconds = 0

    minutesEl.textContent = "00"
    secondsEl.textContent = "00"
    milisecondsEl.textContent = "000"

    pauseBtn.style.display = "none"
    resumeBtn.style.display = "none"
    startBtn.style.display = "block"
})

// ------------------------------Formatação do cronômetro
const formatTime = time => {
    return time < 10 ? `0${time}`: time
}
const formatMiliseconds = time => {
    return time < 100 ? `${time}`.padStart(3, "0") : time
}

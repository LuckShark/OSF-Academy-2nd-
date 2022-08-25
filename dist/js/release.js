// Release Date
const deadline = new Date("jul 03, 2020 00:00:00").getTime()

const x = setInterval(function () {
    const now = new Date().getTime()
    const t = deadline - now
    const months = Math.floor((t % (1000 * 60 * 60 * 24 * 30 * 12)) / (1000 * 60 * 60 * 24 * 30))
    const days = Math.floor(t / (1000 * 60 * 60 * 24))
    const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((t % (1000 * 60)) / 1000)
    document.getElementById("month").innerHTML = months
    document.getElementById("day").innerHTML = days
    document.getElementById("hour").innerHTML = hours
    document.getElementById("minute").innerHTML = minutes
    document.getElementById("second").innerHTML = seconds
    if (months < 10) {
        document.getElementById("month").innerHTML = '0' + months
    }
    if (days < 10) {
        document.getElementById("day").innerHTML = '0' + days
    }
    if (hours < 10) {
        document.getElementById("hour").innerHTML = '0' + hours
    }
    if (minutes < 10) {
        document.getElementById("minute").innerHTML = '0' + minutes
    }
    if (seconds < 10) {
        document.getElementById("second").innerHTML = '0' + seconds
    }
    if (t < 0) {
        clearInterval(x);
        document.getElementById("countdown__header").style.display = "none"
        document.getElementById("demo").innerHTML = "We've alredy released OSF Academy"
        document.getElementById("month").innerHTML = '00'
        document.getElementById("day").innerHTML = '00'
        document.getElementById("hour").innerHTML = '00'
        document.getElementById("minute").innerHTML = '00'
        document.getElementById("second").innerHTML = '00'
    }

    const circle = document.querySelectorAll('.progress-ring__circle_green')
    const radius = circle[2].r.baseVal.value
    const circumference = 2 * Math.PI * radius

    for (i = 0; i < circle.length; i++) {
        circle[i].style.strokeDasharray = `${circumference} ${circumference}`
        circle[i].style.strokeDashoffset = circumference
    }

    function setProgress() {
        function setProgressSeconds(seconds) {
            const offset = circumference - seconds / 60 * circumference
            circle[4].style.strokeDashoffset = offset
        }
        setProgressSeconds(seconds)
        function setProgressMinutes(minutes) {
            const offset = circumference - minutes / 60 * circumference
            circle[3].style.strokeDashoffset = offset
        }
        setProgressMinutes(minutes)
        function setProgressHours(hours) {
            const offset = circumference - hours / 24 * circumference
            circle[2].style.strokeDashoffset = offset
        }
        setProgressHours(hours)
        function setProgressDays(days) {
            const offset = circumference - days / 30 * circumference
            circle[1].style.strokeDashoffset = offset
        }
        setProgressDays(days)
        function setProgressMonths(months) {
            const offset = circumference - months / 12 * circumference
            circle[0].style.strokeDashoffset = offset
        }
        setProgressMonths(months)
    }
    setProgress()
});

// Submit 
const form = document.getElementById("countdown__form")

form.onsubmit = function (evt) {
    evt.preventDefault();
    const jobj = { email: form.value } //JSON object
    console.log(jobj)
}

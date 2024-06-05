
function computeAge() {
    result.style.display = "none"

    let a = new Date(birthdate.value)
    let b = new Date()
    let diff = b - a
    let age = Math.floor(diff / 31536000000)

    result.style.display = "block"
    result.innerHTML = `You are ${age} years old`
}


function setMaxDate() {
    birthdate.max = new Date().toISOString().split("T")[0];
}
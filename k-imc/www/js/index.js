function computeBMI() {
    result.style.display = "none"

    let h = Number(height.value)
    let w = Number(weight.value)

    console.log(h, w);
    if (h <= 30) {
        heightInv.style.display = "block"
    } else {
        heightInv.style.display = "none"
    }

    if (w <= 2) {
        console.log(weightInv.style.display);
        weightInv.style.display = "block"
    } else {
        weightInv.style.display = "none"
    }

    if (h <= 30|| w <= 2)
        return

    const imc = (w / Math.pow(h / 100, 2)).toFixed(1)
    let interpretation = "You BMI is : " + imc + " and you "

    if (imc < 16.5)
        interpretation += "are underweight"
    else if (imc >= 16.5 && imc < 18.5)
        interpretation += "are thin"
    else if (imc >= 18.5 && imc < 25)
        interpretation += "have normal weight"
    else if (imc >= 25 && imc < 30)
        interpretation += "are overweight"
    else if (imc >= 30 && imc < 35)
        interpretation += "have moderate obesity"
    else if (imc >= 35 && imc < 40)
        interpretation += "have severe obesity"
    else
        interpretation += "have morbid obesity"

    result.style.display = "block"
    result.innerHTML = interpretation
}


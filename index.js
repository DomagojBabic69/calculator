const num1 = "marco"
const num2 = "tin"
const result = "kamion"

function calculate () {
    const number1 = parseInt(document.getElementById(num1).value)
    const number2 = parseInt(document.getElementById(num2).value)
    let rezultat = "niste unjeli broj"
    rezultat = number1 + number2
    

    const paragraph = document.getElementById(result)
    paragraph.innerHTML = 'REZULTAT JE: ' + rezultat
}


function pomnozi () {
    const number1 = parseInt(document.getElementById(num1).value)
    const number2 = parseInt(document.getElementById(num2).value)
    let rezultat = "niste unjeli broj"
    rezultat = number1 * number2
    

    const paragraph = document.getElementById(result)
    paragraph.innerHTML = 'REZULTAT JE: ' + rezultat
}

function podjeli () {
    const number1 = parseInt(document.getElementById(num1).value)
    const number2 = parseInt(document.getElementById(num2).value)
    let rezultat = "niste unjeli broj"
    rezultat = number1 / number2
    

    const paragraph = document.getElementById(result)
    paragraph.innerHTML = 'REZULTAT JE: ' + rezultat
}

function oduzmi () {
    const number1 = parseInt(document.getElementById(num1).value)
    const number2 = parseInt(document.getElementById(num2).value)
    let rezultat = "niste unjeli broj"
    rezultat = number1 - number2
    

    const paragraph = document.getElementById(result)
    paragraph.innerHTML = 'REZULTAT JE: ' + rezultat
}

function kvadrat () {
    const number1 = parseInt(document.getElementById(num1).value)
    let rezultat = "niste unjeli broj"
    rezultat = number1 * number1
    

    const paragraph = document.getElementById(result)
    paragraph.innerHTML = 'REZULTAT JE: ' + rezultat
}
let valor = ''
let valorPrevio = ''
let operador = ''


const numeros = document.querySelectorAll('.numero')
const operacion = document.querySelectorAll('.operador')
const clear = document.querySelector('.clear')
const igual = document.querySelector('.igual')
//const decimal = document.querySelector('.decimal')

let screen = document.querySelector('.display')

//reconoce el numero marcado y lo muestra en pantalla
numeros.forEach(numero => {
    numero.addEventListener('click', function (e) {
        agregarNumero(e.target.textContent)
        screen.innerHTML = valor  
        
    })
})


//Reconoce el numero marcado con el teclado
    window.addEventListener('keydown', function (e) {
        let tecla = e.key;
        if(parseInt(tecla) >= 0 && parseInt(tecla) <= 9 || tecla == '.'){
            agregarNumero(tecla)
        screen.innerHTML = valor
        

        }
        
    })


 // muestra en pantalla el operador elejido por el usuario
operacion.forEach(op => {
    op.addEventListener('click', function (e){
        operator(e.target.textContent)
        if(valorPrevio !== ''){
            screen.textContent = valorPrevio + ' ' + operador        
        }
       
          
    
    })
}) 

//muestra en pantalla el operador al precionar la tecla
window.addEventListener('keydown', function (e) {
    let tecla = e.key
    if(tecla == '+' || tecla ==  '-' || tecla == '*' || tecla == '/'){
        operator(tecla)
        if(valorPrevio !== ''){
            screen.textContent = valorPrevio + ' ' + operador         
        }
        

    }
    
})

// permite borrar el valor escritor al tocar la tecla Backspace
window.addEventListener('keydown', function (e) {
    let tecla = e.key
    if(tecla == 'Backspace'){
       valor = valor.slice(0, -1)
       screen.textContent = valor
    }
    

})


//calcula presionando tecla Enter
window.addEventListener('keydown', function(e) {
    let tecla = e.key
    if (tecla == 'Enter'){
        if(valor != '' && valorPrevio != ''){
            calcular()
            screen.textContent = ''
            screen.textContent = valorPrevio
        }

    }

})


//calcula
igual.addEventListener('click', function(){
    if(valor != '' && valorPrevio != ''){
        calcular()
        screen.textContent = ''
        screen.textContent = valorPrevio
    }
})

//Borra todo el screen
clear.addEventListener('click', function(){
valorPrevio = ''
valor = ''
operador = ''
screen.textContent = valor
})

decimal.addEventListener('click', function(){
    addDecimal()
    
})

// muestra en screen cada numero tipeado
function agregarNumero(num){
    if (num == '.'){

        if(!valor.includes('.')){
            valor += num
        } else { }

    } else {valor += num}
    
    return  valor   
}

// muestra el operador y asigna a valor previo el primer valor
function operator(op){
    operador = op
    valorPrevio = valor
    valor = ''
}

// funcion calculadora
function calcular(){
    valorPrevio = Number(valorPrevio)
    valor = Number(valor)
    switch (operador) {
        case '+':
            valorPrevio += valor
            break
        case '-':
            valorPrevio -= valor
            break
        case '*':
            valorPrevio *= valor
            break
        case '/':
            valorPrevio /= valor
            break
        default:
            return
    }


    valorPrevio = valorPrevio.toString()
    valor = valor.toString()
}

// revisar que no haya puesto punto
function addDecimal () {
    if(!valor.includes('.')){
        valor += '.'
       
    }
}




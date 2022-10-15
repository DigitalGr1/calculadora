let valor = ''
let valorPrevio = ''
let operador = ''
let resultado = ''
let memoria = ''


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
    if(e.key == 'Backspace'){
       valor = valor.slice(0, -1)
       screen.textContent = valor
    }
    

})


//calcula presionando tecla Enter
window.addEventListener('keydown', function(e) {
  
    if (e.key == 'Enter'){
       /*  if(valorPrevio == '')return */

        if(valor != '' && valorPrevio != ''){
            calcular()
            operador = ''
            screen.textContent = ''
            resultado = valorPrevio
            valorPrevio = ''
            screen.textContent = resultado
        }

        quitarFoco()

    }

})


//calcula
igual.addEventListener('click', function(){
    if(valor != '' && valorPrevio != ''){
        calcular()
        operador = ''
        screen.textContent = ''
        resultado = valorPrevio
        valorPrevio = ''
        screen.textContent = resultado
    }
})

//Borra todo el screen
clear.addEventListener('click', function(){
valorPrevio = ''
valor = ''
operador = ''
screen.textContent = valor
quitarFoco()
})

decimal.addEventListener('click', function(){
    addDecimal()
    
})

// muestra en screen cada numero tipeado
function agregarNumero(num){

    if(resultado != ''){
        resultado = ''
        valor = ''
    }
    if (num == '.'){

        if(!valor.includes('.')){
            valor += num
        } else { }

    } else {valor += num}
    
    return  valor   
}

/*  muestra el operador y asigna a valor previo el primer valor,
 si hay un resultado de una cuenta previa toma este valor como el
  previo y se lo asigna a la variable memoria
 */
function operator(op){
    if(resultado != ''){
        memoria = resultado
        resultado = ''
        valorPrevio = memoria
        operador = op
        valor = ''
    }else{
        operador = op
    valorPrevio = valor
    valor = '' 
    }
    
    
    
}

// funcion calculadora
function calcular(){
    let valorPrevio2 = Number(valorPrevio)
    let valor2 = Number(valor)
    switch (operador) {
        case '+':
            valorPrevio2 += valor2
            break
        case '-':
            valorPrevio2 -= valor2
            break
        case '*':
            valorPrevio2 *= valor2
            break
        case '/':
            valorPrevio2 /= valor2
            break
        default:
            return
    }


    valorPrevio = valorPrevio2.toString()
    valor = valor2.toString()
}

// revisar que no haya puesto punto
function addDecimal () {
    if(!valor.includes('.')){
        valor += '.'
       
    }
}

//quita el foco del boton C al presionarlo, para que al presionar enter no borre.
function quitarFoco(){
    elemento = document.querySelector('.clear')
    elemento.blur();
  }



console.log('@@@ connected')

const titulo = document.getElementsByClassName('Titulo')[0]
titulo.style.color = 'white'
console.log('@@@ titulo', titulo)

const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const suma = document.getElementById("suma")

suma.addEventListener('click', () => {
        sumavalores()
    }
)
 
const sumavalores = () => {
    console.log('@@@ valores', parseInt(num1.value), parseInt(num2.value))
    if(isNaN(parseInt(num1.value)) || isNaN (parseInt(num2.value))){
        alert('Ponga valores mijo no se quiera pasar de listo padrino que me lo trueno')
    } else {
        let res = (parseInt(num1.value) + parseInt(num2.value))
        alert('MIRA CARNAL, AQUI TENGO TU RESULTADO:' + res)
    }
}
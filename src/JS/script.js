var nextImagem = document.querySelectorAll('.search')

let count = 0

function removeslider() {
    let textLabel = nextImagem
    while(count < 3){
    textLabel[count].classList.add('slider')
    count++
    if (count < 3){
        textLabel[count].classList.remove('slider')
        break;
    }
        count = 0
        textLabel[count].classList.remove('slider')
        console.log(aqui)
}
}

setInterval(() => {
    removeslider()
}, 4000);

const labelstyle = document.querySelector('.labelstyle')
function events(){

const hamburguer = document.querySelector('.hamburguer-div')
let body = document.querySelector('body')
const imgUm = document.querySelector('.imgUm')


    hamburguer.addEventListener('click', () =>{
        imgUm.classList.toggle('imgUm')
        labelstyle.classList.toggle('mobile')
        const mobile = labelstyle.classList.contains('mobile')
        if(mobile === true){
            body.classList.add('scroll')
        }else{
            body.classList.remove('scroll')
        }
        
    })
}
events()



const validation = document.querySelector('.validation')
const input = document.querySelector('.input-email')
const buttonInput = document.querySelector('.button-input')
buttonInput.addEventListener('click', () =>{
    const valueInput = input.value
    console.log(valueInput)
    if(input.value === ''){
        validation.classList.remove('opacity')
    }

})




document.querySelector('body').style.backgroundColor="pink"
const botao = document.querySelector('#btnLight')
const botao = document.querySelector("#btnDark")


function mudandoLight(){
    let body = document.querySelector('body')

    body.classList.add('modolight')
    body.classList.remove('modoDark')

    function mudandoDark(){
        let body = document.querySelector('body')
        body.classList.add ('modoDakk')
        body.classList.remove('modoLight')
    }
}

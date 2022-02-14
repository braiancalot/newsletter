const button = document.querySelector('.fecharModal')
const abrir = document.querySelector('.abrirModal')
const modal = document.querySelector('.modal-container')

function toggleModal(){
    modal.classList.add('mostrar')
    modal.addEventListener('click', event => {
        console.log(event.target.className)
        if(event.target.className == "modal-container mostrar" || event.target.className == "fecharModal text1") {
            modal.classList.remove('mostrar')
        }
    })
    
}

abrir.addEventListener('click', toggleModal)

const hamburger = document.getElementById('hamburger')
const navigator = document.getElementById('navigator')

hamburger.addEventListener('click', ()=> {
    if (navigator.classList[0]){
        navigator.classList.remove("show")
    }else{
        navigator.classList.add('show')
    }
})


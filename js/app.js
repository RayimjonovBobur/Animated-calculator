const bodyEL = document.querySelector('body')
const input = document.querySelector('input')
const span = document.querySelector('span')

const switchBtn = document.querySelector('.circle')
const click = document.querySelector('.click')
const theme = document.querySelector('.theme')
const hero = document.querySelector('.hero')
const header = document.querySelector('header')

let currentMode = 1


switchBtn.addEventListener('click', function(){
    if( currentMode == 1){
    theme.classList.add('two') 
    theme.classList.remove('three')
    hero.classList.add('hero-second')
    header.classList.add('header-second')
    click.classList.add('click-second')
    num.forEach(function(color){
        color.classList.remove('number-third')
    })
    currentMode++
}else if(currentMode == 2){
    switchBtn.style.background = 'hsl(180, 64%, 49%)'
    theme.classList.add('three') 
    hero.classList.add('hero-third')
    header.classList.add('header-third')
    click.classList.add('click-third')
    num.forEach(function(color){
        color.classList.add('number-third')
    })
    currentMode++
}else if(currentMode == 3){
    switchBtn.style.background = 'hsl(4,64%,49%)'
    theme.classList.remove('two')  
    theme.classList.remove('three') 
    theme.classList.add('one')
    hero.classList.remove('hero-second', 'hero-third')
    header.classList.remove('header-second', 'header-third')
    click.classList.remove('click-second', 'click-third')
    num.forEach(function(color){
        color.classList.remove('number-third')
    })
    currentMode = 1
}

})

// Please do not copy the code without a source
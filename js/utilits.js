import * as el from './elements.js'

export function putElementOnFocus(link){
    console.log(link)

    if(link == '/'){
        el.alterBgButtons.btnHome.classList.add('focus')
    } else{
        el.alterBgButtons.btnHome.classList.remove('focus')
    }
    
    if(link == '/universe'){
        el.alterBgButtons.universe.classList.add('focus')
    } else{
        el.alterBgButtons.universe.classList.remove('focus')
    }

    if(link == '/exploration'){
        el.alterBgButtons.exploration.classList.add('focus')
    } else{
        el.alterBgButtons.exploration.classList.remove('focus')
    }
}

export function handleBgOnClick(bg){
    if(bg === 'universe-bg'){
        el.main.classList.add('universe-bg')
    } else{
        el.main.classList.remove('universe-bg')
    }

    if(bg === 'home-bg'){
        el.main.classList.add('home-bg')
    } else{
        el.main.classList.remove('home-bg')
    }

    if(bg === 'exploration-bg'){
        el.main.classList.add('exploration-bg')
    } else{
        el.main.classList.remove('exploration-bg')
    }
}
import * as el from './elements.js'
import {handleBgOnClick} from './utilits.js'

el.alterBgButtons.iconHome.addEventListener('click', () =>{
    handleBgOnClick('home-bg')
})

el.alterBgButtons.btnHome.addEventListener('click', () =>{
    handleBgOnClick('home-bg')
})

el.alterBgButtons.universe.addEventListener('click', ()=>{
    handleBgOnClick('universe-bg')
})

el.alterBgButtons.exploration.addEventListener('click', ()=>{
    handleBgOnClick('exploration-bg')
})


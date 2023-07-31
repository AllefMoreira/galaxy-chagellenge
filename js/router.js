import { putElementOnFocus } from "./utilits.js"

export class Router{
    routes = {}

    add(name, link){
        this.routes[name] = link
    }

    route(event){
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        
        this.handle()
        
    }

    handle(){
        const {pathname} = window.location //com isso, nós podemos pegar todos os dados do .location e colocar em variáveis
        const route = this.routes[pathname] || this.routes[404]

        putElementOnFocus(pathname)
    
        //o "fetch" irá buscar a rota especificada, e depois que ele conseguir buscar, ele irá executar o then
        fetch(route)
        .then((data) => data.text())
        .then((html) => {
            document.querySelector('#app').innerHTML = html
        })          
    }
}
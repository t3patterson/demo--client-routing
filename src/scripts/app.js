import {Router} from 'director/build/director'



let renderHomeTemplate = function(txt){
  document.querySelector('#app-container')
    .innerHTML = `
      <h1>How to draw an owl</h1>
      <p>A step by step guide how to draw an owl</p>
      <footer>
        <a href="#/step-1">&#10095;</a>
      </footer>
    `
}

let renderStep1 = function(txt){
  console.log("????")
  document.querySelector('#app-container')
    .innerHTML = `
        <h1>Step 1</h1>
        <p>Draw some circles</p>
        <img src="/images/step-1.png"/>
        <footer>
          <a href="#/step-2">&#10095;</a>
        </footer>
      `
}

let renderStep2 = function(txt){
  document.querySelector('#app-container')
    .innerHTML =`
      <h1>Step 2</h1>
      <p>Draw the rest of the fucking owl</p>
      <img src="/images/step-2.png"/>
      <footer>
        <a href="/">&#10095;</a>
      </footer>
    `
}


let render404 = function(txt){
  document.querySelector('#app-container')
    .innerHTML =`
      <h1 class="error-page">Sorry</h1>
      <p>That page doesn't exist</p>
      <footer>
        <a href="/">&#10224;</a>
      </footer>
    `
}

const routes = {
  '/step-1' : renderStep1,
  '/step-2' : renderStep2,
  '/' : renderHomeTemplate,
  '/*' : render404
}

/*Routing */
let routerInstance = Router(routes)
routerInstance.setRoute(routerInstance.getRoute())
routerInstance.init('/')

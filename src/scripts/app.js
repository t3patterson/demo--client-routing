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


let appContainer = document.querySelector('#app-container')

appContainer.innerHTML = renderHomeTemplate()

console.log(Router)

const routes = {
  '/step-1' : renderStep1,
  '/step-2' : renderStep2,
  '' : renderHomeTemplate
}

let routerInstance = Router(routes)
routerInstance.init()
routerInstance.setRoute(routerInstance.getRoute())

import './style.css'
import './bases/02-template-string'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <H1> Hello World</H1>
  </div>
`
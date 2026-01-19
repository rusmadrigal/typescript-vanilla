import './style.css'




document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <H1> Hello World</H1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

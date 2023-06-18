import { proxy } from 'valtio'

const states = proxy({
  intro: true,
  cameraPos: [0.23, 0.07, 0.57],
  cameraFocus: [-window.innerWidth * 0.00007,0,0],
  colors: ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#111'],
  selectedColor: '#ccc'
})

export { states }
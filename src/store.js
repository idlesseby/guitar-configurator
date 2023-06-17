import { proxy } from 'valtio'

const states = proxy({
  intro: true,
  cameraPos: [0.36, 0.07, 0.5],
  colors: ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#111'],
  selectedColor: '#ccc'
})

export { states }
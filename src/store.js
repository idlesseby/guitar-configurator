import { proxy } from 'valtio'

const states = proxy({
  intro: true,
  cameraPos: [0.23, 0.07, 0.57],
  cameraFocus: [-window.innerWidth * 0.00007,0,0],
  colors: ['#fff', '#222', '#ffd700', '#c0c0c0', '#008b00', '#00008b', '#8b0000',],
  selectedFinishColor: '#fff',
  selectedKnobsColor: '#222',
  selectedIvoryColor: '#222',
  parts: ['Finish', 'Knobs', 'Ivory'],
  selectedPart: 'Finish'
})

export { states }
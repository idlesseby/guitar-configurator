import { proxy } from 'valtio'

const states = proxy({
  intro: true,
  cameraPos: [0.23, 0.07, 0.57],
  cameraFocus: [-window.innerWidth * 0.00007,-0.12,0],
  selectedFinishColor: '#fff',
  selectedKnobsColor: '#222',
  selectedIvoryColor: '#222',
  selectedPart: 'Finish'
})

export { states }
import { proxy } from 'valtio'

const states = proxy({
  cameraPos: [0, 0, 2.5],
  cameraFocus: [0,0,0],
  selectedFinishColor: '#222',
  selectedKnobsColor: '#222',
  selectedIvoryColor: '#222',
  selectedPlasticColor: '#222',
  selectedMetalColor: '#ffd700',
  selectedStringsColor: '#545761',
  selectedPart: 'Finish'
})

export { states }
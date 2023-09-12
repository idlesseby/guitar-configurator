import { proxy } from 'valtio'

const states = proxy({
  cameraPos: [0, 0, 1.75],
  cameraFocus: [0,0,0],
  selectedFinishColor: '#fff',
  selectedKnobsColor: '#222',
  selectedIvoryColor: '#222',
  selectedPlasticColor: '#222',
  selectedFretboardColor: '#000',
  selectedMetalColor: '#ffd700',
  selectedStringsColor: '#545761',
  selectedPart: 'Finish'
})

export { states }
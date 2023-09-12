import React from 'react'
import './Configurator.css'
import { useSnapshot } from 'valtio'
import { states } from '../../data/store'
import gsap from "gsap"

const Configurator = () => {
  const snap = useSnapshot(states)

  const parts = ['Finish', 'Knobs', 'Ivory', 'Plastic', 'Fretboard', 'Metal', 'Strings']

  const partCamFocus = {
    'Finish': [0, 0, 0],
    'Knobs': [0.06, -0.225, 0],
    'Ivory': [0, 0.225, 0],
    'Plastic': [0, -0.15, 0],
    'Fretboard': [0, 0.0625, 0],
    'Metal': [0, -0.15, 0],
    'Strings': [0, 0.1, 0],
  }
  
  const partCamPos = {
    'Finish': [0, 0, 1.75],
    'Knobs': [0.1, -0.325, 0.5],
    'Ivory': [0, 0.225, 0.5],
    'Plastic': [0, -0.15, 0.75],
    'Fretboard': [0, 0.0625, 1],
    'Metal': [0, -0.15, 0.75],
    'Strings': [0, 0.1, 0.5],
  }

  const colors = {
    FinishColors: ['#fff', '#F5E73C', '#FA8D1C', '#F53F32', '#DE3AD3', '#21DE4C', '#4A4CF5', '#222'],
    KnobsColors: ['#fff', '#F5E73C', '#FA8D1C', '#F53F32', '#DE3AD3', '#21DE4C', '#4A4CF5', '#222'],
    IvoryColors: ['#fff', '#F5E73C', '#FA8D1C', '#F53F32', '#DE3AD3', '#21DE4C', '#4A4CF5', '#222'],
    PlasticColors: ['#fff', '#F5E73C', '#FA8D1C', '#F53F32', '#DE3AD3', '#21DE4C', '#4A4CF5', '#222'],
    FretboardColors: ['#DFD7C8', '#BC8F8F', '#D2B04C', '#321A18', '#222'],
    MetalColors: ['#F2F4FA', '#545761', '#ffd700', '#cd7f32'],
    StringsColors: ['#F2F4FA', '#545761', '#ffd700', '#cd7f32'],
  }

  return (
    <section className='configurator'>
      <span>Part</span>
      <div className='part-selection'>
        {parts.map((part, index) => {
          return <button 
            className='part-button'
            style={states.selectedPart === parts[index] ? {backgroundColor: 'black', color: 'white'} : null}
            onClick={() => {
              states.selectedPart = parts[index]
              gsap.to(states.cameraPos, {...partCamPos[states.selectedPart], duration: 1})
              gsap.to(states.cameraFocus, {...partCamFocus[states.selectedPart], duration: 1})
            }}
          >
            {part}
          </button>
        })}
      </div>
      <span>Color</span>
      <div className="color-selection">
            {colors[states.selectedPart + 'Colors'].map(color => (
              <div
                className="color-button"
                style={{ background: color, height: '40px', width: '40px' }}
                onClick={() => {
                  states['selected' + states.selectedPart + 'Color'] = color
                }}>
              </div>
            ))}
          </div>
    </section>
  )
}

export default Configurator
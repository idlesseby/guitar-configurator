import React from 'react'
import './Overlay.css'
import { useSnapshot } from 'valtio'
import { states } from '../../data/store'
import gsap from "gsap"

const Overlay = () => {
  const snap = useSnapshot(states)

  const parts = ['Finish', 'Knobs', 'Ivory', 'Plastic', 'Metal', 'Strings']

  const partCamFocus = {
    'Finish': [0, 0, 0],
    'Knobs': [0.06, -0.225, 0],
    'Ivory': [0, 0.225, 0],
    'Plastic': [0, -0.15, 0],
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
    FinishColors: ['#fff', '#F5D81B', '#FA8D1C', '#F53F32', '#DE3AD3', '#21DE4C', '#4A4CF5', '#222'],
    KnobsColors: ['#fff', '#F5D81B', '#FA8D1C', '#F53F32', '#DE3AD3', '#21DE4C', '#4A4CF5', '#222'],
    IvoryColors: ['#fff', '#F5D81B', '#FA8D1C', '#F53F32', '#DE3AD3', '#21DE4C', '#4A4CF5', '#222'],
    PlasticColors: ['#fff', '#F5D81B', '#FA8D1C', '#F53F32', '#DE3AD3', '#21DE4C', '#4A4CF5', '#222'],
    MetalColors: ['#F2F4FA', '#545761', '#ffd700', '#cd7f32'],
    StringsColors: ['#F2F4FA', '#545761', '#ffd700', '#cd7f32'],
  }

  return (
    <section className="overlay">
      <p>Part</p>
      <div className='part-selection'>
        {parts.map((part, index) => {
          return <button 
            className='part-button'
            style={states.selectedPart === parts[index] ? {backgroundColor: 'black', color: 'white', fontWeight: '500'} : null}
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
      <p>Color</p>
      <div className="color-selection">
            {colors[states.selectedPart + 'Colors'].map((color, index) => (
              <div
                className="color-button"
                style={states['selected' + states.selectedPart + 'Color'] === colors[states.selectedPart + 'Colors'][index] ? {border: '1px solid black', background: color} : {background: color}}
                onClick={() => {
                  states['selected' + states.selectedPart + 'Color'] = color
                }}>
              </div>
            ))}
          </div>
    </section>
  )
}

export default Overlay
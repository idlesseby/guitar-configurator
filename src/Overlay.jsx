import { useSnapshot } from 'valtio'
import { states } from './store'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";

let count = 0

const partCamFocus = {
  'Finish': [0, -0.05, 0],
  'Knobs': [0.06, -0.225, 0],
  'Ivory': [0, 0.225, 0],
  'Plastic': [0, -0.15, 0],
  'Fretboard': [0, 0.0625, 0],
  'Metal': [0, -0.15, 0],
  'Strings': [0, 0.1, 0],
}

const partCamPos = {
  'Finish': [0, -0.05, 1.75],
  'Knobs': [0.1, -0.325, 0.5],
  'Ivory': [0, 0.225, 0.5],
  'Plastic': [0, -0.15, 0.75],
  'Fretboard': [0, 0.0625, 1],
  'Metal': [0, -0.15, 0.75],
  'Strings': [0, 0.1, 0.5],
}

const parts = ['Finish', 'Knobs', 'Ivory', 'Plastic', 'Fretboard', 'Metal', 'Strings']

const colors = {
  FinishColors: ['#fff', '#ffd700', '#008b00', '#800080', '#00008b', '#8b0000', '#222'],
  KnobsColors: ['#fff', '#ffd700', '#008b00', '#800080', '#00008b', '#8b0000', '#222'],
  IvoryColors: ['#fff', '#ffd700', '#008b00', '#800080', '#00008b', '#8b0000', '#222'],
  PlasticColors: ['#fff', '#ffd700', '#008b00', '#800080', '#00008b', '#8b0000', '#222'],
  FretboardColors: ['#fff', '#DFD7C8', '#BC8F8F', '#D2B04C', '#321A18', '#222'],
  MetalColors: ['#F2F4FA', '#545761', '#ffd700', '#cd7f32'],
  StringsColors: ['#F2F4FA', '#545761', '#ffd700', '#cd7f32'],
}

export default function Overlay() {
  const snap = useSnapshot(states)

  return(
    <div className="container">
      {states.intro ? <Intro /> : <Customizer />}
    </div>
    
  )
}

function Intro() {
  return(
    <section key="main">
      <div className="main--container">
        <div>
          <h1>CUSTOM <br/> GUITAR</h1>
        </div>
        <div className="main--content">
          <p>
            Unleash your imagination with this brand new <strong>3D customization tool </strong>
            and create your own unique and exclusive guitar.
          </p>
          <button 
            className="main--button"
            onClick={() => {
              states.intro = false
              gsap.to(states.cameraPos, {...partCamPos[states.selectedPart], duration: 1})
              gsap.to(states.cameraFocus, {...partCamFocus[states.selectedPart], duration: 1})
          }}>
            CUSTOMIZE IT
          </button>
        </div>
      </div>
    </section>
  )
}

function Customizer() {
  const snap = useSnapshot(states)

  return(
    <section key="custom">
      <div className="customizer">
        <div className="options">
          <div className='part-options'>
            <div
              onClick={() => {
                if(count === 0) {
                  count = 6
                } else {
                  count -= 1
                }
                states.selectedPart = parts[count]
                gsap.to(states.cameraPos, {...partCamPos[states.selectedPart], duration: 1})
                gsap.to(states.cameraFocus, {...partCamFocus[states.selectedPart], duration: 1})
              }}
            >
              <FaArrowLeft/>
            </div>
            <div style={{color: 'white'}}>{states.selectedPart}</div>
            <div
              onClick={() => {
                if(count === 6) {
                  count = 0
                } else {
                  count += 1
                }
                states.selectedPart = parts[count]
                gsap.to(states.cameraPos, {...partCamPos[states.selectedPart], duration: 1})
                gsap.to(states.cameraFocus, {...partCamFocus[states.selectedPart], duration: 1})
              }}
            >
              <FaArrowRight/>
            </div>
          </div>
          <div className="color-options">
            {colors[states.selectedPart + 'Colors'].map((color) => (
              <div
                key={color}
                className="circle"
                style={{ background: color }}
                onClick={() => {
                  states['selected' + states.selectedPart + 'Color'] = color
                }}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
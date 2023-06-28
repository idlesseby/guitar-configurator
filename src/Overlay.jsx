import { useSnapshot } from 'valtio'
import { states } from './store'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
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
  FinishColors: ['#fff', '#F5E73C', '#FA8D1C', '#F53F32', '#DE3AD3', '#21DE4C', '#4A4CF5', '#222'],
  KnobsColors: ['#fff', '#F5E73C', '#FA8D1C', '#F53F32', '#DE3AD3', '#21DE4C', '#4A4CF5', '#222'],
  IvoryColors: ['#fff', '#F5E73C', '#FA8D1C', '#F53F32', '#DE3AD3', '#21DE4C', '#4A4CF5', '#222'],
  PlasticColors: ['#fff', '#F5E73C', '#FA8D1C', '#F53F32', '#DE3AD3', '#21DE4C', '#4A4CF5', '#222'],
  FretboardColors: ['#DFD7C8', '#BC8F8F', '#D2B04C', '#321A18', '#222'],
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
    <section id="main">
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
    <section id="custom">
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
              <BsArrowLeft className='part-arrow arrow-left' />
            </div>
            <div className='part-name'>{states.selectedPart}</div>
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
              <BsArrowRight className='part-arrow arrow-right'/>
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
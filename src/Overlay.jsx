import { useSnapshot } from 'valtio'
import { states } from './store'
import { FaArrowLeft } from "react-icons/fa";
import gsap from "gsap";

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
          <div>
            <p>
              Unleash your imagination with this brand new <strong>3D customization tool </strong>
              <br/> and create your own unique and exclusive guitar.
            </p>
            <button 
              className="main--button"
              onClick={() => {
                states.intro = false
                gsap.to(states.cameraFocus, {...[0, 0, 0], duration: 1})
                gsap.to(states.cameraPos, {...[0, 0, 1.75], duration: 1})
            }}>
              CUSTOMIZE IT
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Customizer() {
  const snap = useSnapshot(states)

  const partCamFocus = {
    'Finish': [0, 0, 0],
    'Knobs': [0.06, -0.2, 0],
    'Ivory': [0, 0.2, 0]
  }

  const partCamPos = {
    'Finish': [0, 0, 1.75],
    'Knobs': [0.1, -0.3, 0.5],
    'Ivory': [0, 0.2, 0.5]
  }

  const parts = ['Finish', 'Knobs', 'Ivory']
  const colors = ['#fff', '#222', '#ffd700', '#c0c0c0', '#008b00', '#00008b', '#8b0000']

  return(
    <section key="custom">
      <div className="customizer">
        <button 
          className="exit" 
          onClick={() => {
            states.intro = true
            gsap.to(states.cameraFocus, {...[-window.innerWidth * 0.00007,-0.12,0], duration: 1})
            gsap.to(states.cameraPos, {...[0.23, 0.07, 0.57], duration: 1})
          }}>
          <FaArrowLeft color='white'/>
        </button>
        <div className="color-options">
          {colors.map((color) => (
            <div
              key={color}
              className="circle"
              style={{ background: color }}
              onClick={() => {
                states['selected' + states.selectedPart + 'Color'] = color
              }}></div>
          ))}
        </div>
        <div className='part-options'>
          {parts.map((part) => (
            <div
              key={part}
              className={`part ${part === states.selectedPart ? 'active' : ''}`}
              onClick={() => {
                states.selectedPart = part
                gsap.to(states.cameraPos, {...partCamPos[states.selectedPart], duration: 1})
                gsap.to(states.cameraFocus, {...partCamFocus[states.selectedPart], duration: 1})
              }}>{part}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
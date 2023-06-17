import { useSnapshot } from 'valtio'
import { states } from './store'
import gsap from "gsap";

export default function Overlay() {
  const snap = useSnapshot(states)

  return(
    <div className="container">
      {snap.intro ? <Intro /> : <Customizer />}
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
                states.cameraPos = [0, 0, 2]
                //gsap.to(states.cameraPos, {...[0, 0.1, 1], duration: 1})
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

  return(
    <section key="custom">
      <div className="customizer">
        <div className="color-options">
          {states.colors.map((color) => (
            <div
              key={color}
              className="circle"
              style={{ background: color }}
              onClick={() => {
                states.selectedColor = color
              }}></div>
          ))}
        </div>
        <button 
          className="exit" 
          onClick={() => {
            states.intro = true
            states.cameraPos = [0.36, 0.07, 0.5]
        }}>
          GO BACK
        </button>
      </div>
    </section>
  )
}
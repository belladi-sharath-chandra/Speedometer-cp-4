// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(preSpeed => ({speed: preSpeed.speed + 10}))
    }
  }

  onBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(preSpeed => ({speed: preSpeed.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <div className="main-content">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1 className="speed">Speed is {speed}mph</h1>
          <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button
              type="button"
              className="btn-acc"
              onClick={this.onAccelerate}
            >
              Accelerate
            </button>
            <button type="button" className="btn-break" onClick={this.onBreak}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer

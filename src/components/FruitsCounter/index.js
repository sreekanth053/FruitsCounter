// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onIncrease = () => {
    const {mango} = this.state
    if (mango >= 0) {
      this.setState(prevState => {
        console.log(`previous state value ${prevState.mango}`)
        return {mango: prevState.mango + 1}
      })
    }
  }

  onIncrement = () => {
    const {banana} = this.state
    if (banana >= 0) {
      this.setState(prevState => {
        console.log(`previous state value ${prevState.banana}`)
        return {banana: prevState.banana + 1}
      })
    }
  }

  render() {
    const {mango} = this.state
    const {banana} = this.state
    return (
      <div className="bg-container">
        <div className="fruits-container">
          <h1 className="hading">
            Bob ate <span className="counting">{mango}</span> mangoes
            <span className="counting"> {banana}</span> bananas
          </h1>
          <div className="image-name">
            <div className="img-name-1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="img-1"
                alt="mango"
              />
              <button className="btn" type="button" onClick={this.onIncrease}>
                Eat Mango
              </button>
            </div>
            <div className="img-name-2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="img-2"
                alt="banana"
              />
              <button className="btn" type="button" onClick={this.onIncrement}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter

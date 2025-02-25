import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onChangeSearchInput = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div>
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label className="label" htmlFor="phraseIest">
                Enter the phrase
              </label>
              <input
                id="phraseIest"
                className="input"
                type="text"
                placeholder="Enter the phrase"
                value={inputPhrase}
                onChange={this.onChangeSearchInput}
              />
            </div>
            <p className="button">No.of letters: {inputPhrase.length}</p>
          </div>
          <img
            alt="letters calculator"
            className="letters-Calculator-image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator

import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {};
  }

  componentDidMount(){
    this.initializeGame();
  }

  initializeGame() {
    this.setState({
      guess: 0,
      deviation: null,
      noOfTries: 0,  
      original: Math.floor((Math.random() * 1000) + 1)
    });
  }

  verifyGuess() {
    this.setState(state => ({
      deviation: state.original - state.guess,
      noOfTries: state.noOfTries + 1
    }));
  }
  
  render() {
    return (
      <div class="container">
        <h2>Guess the Number !</h2>
        <div class="card bg-light mb-3">
          <div class="card-body">
            <p class="card-text">Guess the computer generated random number between 1 and 1000.</p>
          </div>
        </div>
        <div>
          <label>Your Guess: </label>
          <input
            type="number"
            value={this.state.guess}
            onChange={(event) => this.setState({ guess: parseInt(event.target.value) })} />
          <button 
            class="btn btn-primary btn-sm"
            onClick={() => this.verifyGuess()}>Verify</button>
          <button 
            class="btn btn-warning btn-sm"
            onClick={()=> this.initializeGame()}>Restart</button>
        </div>
        <div>
          { this.state.deviation<0 && <p class="alert alert-warning">Your guess is higher.</p>}
          { this.state.deviation>0 && <p class="alert alert-warning">Your guess is lower.</p>}
          { this.state.deviation===0 && <p class="alert alert-success">Yes! That's it.</p>}
        </div>
        <p class="text-info">No of guesses :
      <span class="badge">{this.state.noOfTries}</span>
        </p>
      </div>
    )
  }
}

function AppHook(){

  const [original, setOriginal] = useState(random())
  const [deviation, setDeviation] = useState(null);
  const [noOfTries, setNoOfTries] = useState(0);
  const [guess, setGuess] = useState(null);

  function random(){
    return Math.floor((Math.random() * 1000) + 1)
  }

  useEffect(() => {
    initializeGame();
  }, [])

  function verifyGuess(){
    setDeviation(original - guess);
    setNoOfTries(noOfTries + 1);
  }

  function initializeGame(){
    setGuess(null);
    setNoOfTries(0);
    setDeviation(null);
    setOriginal(random());
  }

  return(
    <div class="container">
        <h2>Guess the Number !</h2>
        <div class="card bg-light mb-3">
          <div class="card-body">
            <p class="card-text">Guess the computer generated random number between 1 and 1000.</p>
          </div>
        </div>
        <div>
          <label>Your Guess: </label>
          <input
            type="number"
            value={guess}
            onChange={event => setGuess(parseInt(event.target.value))} />
          <button 
            class="btn btn-primary btn-sm"
            onClick={() => verifyGuess()}>Verify</button>
          <button 
            class="btn btn-warning btn-sm"
            onClick={()=> initializeGame()}>Restart</button>
        </div>
        <div>
          { deviation<0 && <p class="alert alert-warning">Your guess is higher.</p>}
          { deviation>0 && <p class="alert alert-warning">Your guess is lower.</p>}
          { deviation===0 && <p class="alert alert-success">Yes! That's it.</p>}
        </div>
        <p class="text-info">No of guesses :
      <span class="badge">{noOfTries}</span>
        </p>
      </div>
  )
}

export default AppHook;

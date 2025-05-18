import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Component } from 'react'
import './App.css'
import Smile from './Smile'
import './smile.css';


class App extends Component{

  smiles = [
    {id: 1, votes: 0, img: '01'},
    {id: 2, votes: 0, img: '02'},
    {id: 3, votes: 0, img: '03'},
    {id: 4, votes: 0, img: '04'},
    {id: 5, votes: 0, img: '05'}

  ]

  state = {
    winner: undefined
  }

  updateSmile = (id) =>{
    const smile = this.smiles.find(smile => smile.id == id);
    if(!smile){
      return;
    }
    smile.votes++;
    console.log(smile)

  }

  countVotes = () => {
    let max = this.smiles[0].votes;
		for(let i = 0; i < this.smiles.length; i++){
			if(this.smiles[i].votes > max){
				max = this.smiles[i].votes;
			}
		}
		const res = this.smiles[this.smiles.findIndex(item => item.votes == max)];


    
    this.setState(state => ({winner: res}));
  }

  render(){
    return  (<><h1>vote for best smile</h1>
    <div className='smiles'>
      {this.smiles.map(item => <Smile number={item.img} key={item.id} id={item.id} onIncrease={this.updateSmile} isWinner={false}/>)}
    </div>
    <button onClick={this.countVotes} className='show-btn'>Show</button>
    {this.state.winner &&
      <>
      <h2>Results</h2>
      <h2>Winner: </h2>
      <Smile number={this.state.winner.img} id={this.state.winner.id} onIncrease={this.state.winner.updateSmile} votes={this.state.winner.votes} isWinner={true}/>
      </>
    }
    </>)
  }
}

export default App

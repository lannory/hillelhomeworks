import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Component } from 'react'
import './App.css'
import Smile from './Smile'
import './smile.css';


class App extends Component{

  componentDidMount(){
    const stored = localStorage.getItem('smiles');
    if(stored){
      const smiles = JSON.parse(stored);
      this.setState({ smiles });
    }
  }
 
  state = {
    smiles: [{id: 1, votes: 0, img: '01'},
    {id: 2, votes: 0, img: '02'},
    {id: 3, votes: 0, img: '03'},
    {id: 4, votes: 0, img: '04'},
    {id: 5, votes: 0, img: '05'}],
    winner: null
  }

  updateSmile = (id) => {
    this.setState(state => {
      const updatedSmiles = state.smiles.map(smile =>
        smile.id === id ? { ...smile, votes: smile.votes + 1 } : smile
      );
      localStorage.setItem('smiles', JSON.stringify(updatedSmiles)); 
      return { smiles: updatedSmiles };
  });
}



  countVotes = () => {
    let max = this.state.smiles[0].votes;
		for(let i = 0; i < this.state.smiles.length; i++){
			if(this.state.smiles[i].votes > max){
				max = this.state.smiles[i].votes;
			}
		}
		const res = this.state.smiles[this.state.smiles.findIndex(item => item.votes === max)];

    this.setState({winner: res});
  }

  clearVotes = () => {
    const cleared = this.state.smiles.map(smile => ({ ...smile, votes: 0 }));
    localStorage.setItem('smiles', JSON.stringify(cleared)); 
    this.setState({ smiles: cleared, winner: null });
  }


  render(){
    return  (<><h1>vote for best smile</h1>
    <div className='smiles'>
      {this.state.smiles.map((item, i) => <Smile number={item.img} key={item.id} id={item.id} onIncrease={this.updateSmile} isWinner={false} votes={this.state.smiles[i].votes}/>)}
    </div>
    <button onClick={this.countVotes} className='show-btn'>Show</button>
    {this.state.winner &&
      <>
      <h2>Results</h2>
      <h2>Winner: </h2>
      <Smile number={this.state.winner.img} id={this.state.winner.id} onIncrease={this.updateSmile} votes={this.state.winner.votes} isWinner={true}/>
      </>
    }
    <button onClick={this.clearVotes}>Clear results</button>
    </>)
  }
}

export default App

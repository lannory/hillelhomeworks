
import { useState } from 'react';
import './App.css'
import Btn from './Btn';

function App(props) {

  const shop = [
    {id: 1, name: 'laptop', price: 1000},
    {id: 2, name: 'phone', price: 600},
    {id: 3, name: 'tv', price: 800},
    {id: 4, name: 'keyboard', price: 100}
  ];


  if(props.isOpened){
    return (
          <div className={props.class}>
            
            {shop.map(({id, name, price}) => {
              return (<div key={id}>
                <p>Item #{id}</p>
                <p>{name}</p>
                <p>{price} usd</p>
                <Btn text={name}/>
                
              </div>)
            })}
          </div>
      );
  }
  
}



export default App

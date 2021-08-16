import './App.css';
import playersData from './fakeData/players.json';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
import Cart from './components/Cart/Cart';

function App() {
  const [player, setPlayer] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    setPlayer(playersData);
  },[])

  const handleAddPlayer = (player)=>{
      const newPlayer = [...cart, player];
      setCart(newPlayer);   
  }

  return (
    <div className="App">
        <Header></Header>
        {
          player.map(footballer => <Players handleAddPlayer={handleAddPlayer} key={footballer.id} player={footballer}></Players>)
        }
        <Cart cart={cart}></Cart>
    </div>
  );
}

export default App;

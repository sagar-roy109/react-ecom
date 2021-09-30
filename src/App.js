import './App.css';
import Header from './components/Header';
import Nav from './components/nav/Nav';
import Shop from './components/shop/Shop';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
			<Shop></Shop>
    </div>
  );
}

export default App;

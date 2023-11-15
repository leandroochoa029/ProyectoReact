import './App.css'
import NavBar from './components.jsx/NavBar';
import ItemListContainer from './components.jsx/ItemListContainer';

function App() {
  

  return (
    <>
      <div>
        <NavBar/>
        <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
        <div>
          <h1>Octavo Music Store</h1>
          
        </div>
      </div>

    </>
  )
}

export default App

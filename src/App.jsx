import './App.scss'
import Libro from './components/Libro/Libro'
import TituloLogo from './components/TituloLogo/TituloLogo';

function App() {
  return (
    
    <div className='conteiner-app'>
      <section className='seccion-presentacion'>
      
        <header>
          <img src='images/sombrero.png' className='imgSombrero' />
          <img src='images/pulsera.png' className='imgPulsera' />
          <img src='images/anteojos.png' className='imgAnteojos' />
        </header>
        <article>
          <div className='container-logo'>
            <TituloLogo />
          </div>
        </article>
        <footer>
          <div className='container-map'>
            <img src='images/mapa.png' className='imgMap' />
            <img src='images/planta1.png' className='imgPlanta1' />
            <img src='images/birome.png' className='imgBirome' />
          </div>
          <img src='images/brujula.png' className='imgBrujula' />
          <img src='images/camara.png' className='imgCamara' />
          <img src='images/binoculares.png' className='imgBinoculares' />

        </footer>
      </section>
      <section className='seccion-libro '>
        <header>
          
        </header>
        <article>
        <Libro />
        </article>
        <footer>
          <img src='images/mate.png' className='imgMate' />
          <span>©Copyright 2024 - DIARIO DE UN CAMINO - M.A.G.</span>
          <img src='images/termo.png' className='imgTermo' />
        </footer>

      </section>



    </div>
  )
}

export default App


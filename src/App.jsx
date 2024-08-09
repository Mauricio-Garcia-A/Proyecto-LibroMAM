import './App.scss'
import TituloLogo from './components/TituloLogo/TituloLogo';
import Libro from './components/Libro/Libro'

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
        <Libro />
      </section>


      {/*
      
      
      
      <section>
        <TituloLogo />
        
        <img src='images/mapa.png' className='imgMap' />
        <img src='images/brujula.png' className='imgBrujula' />
        <img src='images/camara.png' className='imgCamara' />
        <img src='images/birome.png' className='imgBirome' />
        <img src='images/binoculares.png' className='imgBinoculares' />
        <img src='images/planta1.png' className='imgPlanta1' />
      </section>
      <section>
        <img src='images/mate.png' className='imgMate' />
      </section>
      */}
    </div>
  )
}

export default App


import './App.scss'
import Libro from './components/Libro/Libro'
import TituloLogo from './components/TituloLogo/TituloLogo';

function App() {
  return (
    
    <div className='conteiner-app'>
      <section className='seccion-presentacion'>
      
        <header>
          <img src='images/webp/sombrero-v1.webp' className='imgSombrero' />
          <img src='images/webp/pulsera-v1.webp' className='imgPulsera' />
          <img src='images/webp/anteojos-v1.webp' className='imgAnteojos' />
        </header>
        <article>
          <div className='container-logo'>
            <TituloLogo />
          </div>
        </article>
        <footer>
          <div className='container-map'>
            <img src='images/webp/mapa-v1.webp' className='imgMap' />
            <img src='images/webp/planta1-v1.webp' className='imgPlanta1' />
            <img src='images/webp/birome-v1.webp' className='imgBirome' />
          </div>
          <img src='images/webp/brujula-v1.webp' className='imgBrujula' />
          <img src='images/webp/camara-v1.webp' className='imgCamara' />
          <img src='images/webp/binoculares-v1.webp' className='imgBinoculares' />

        </footer>
      </section>
      <section className='seccion-libro '>
        <header className='seccion-libro-header'>
          
        </header>
        <article className='seccion-libro-article'>
        <Libro />
        </article>
        <footer className='seccion-libro-footer'>
          <img src='images/webp/mate-v1.webp' className='imgMate' />
          <span>©Copyright 2024 - DIARIO DE UN CAMINO - M.A.G.</span>
          <img src='images/webp/termo-v1.webp' className='imgTermo' />
        </footer>

      </section>



    </div>
  )
}

export default App


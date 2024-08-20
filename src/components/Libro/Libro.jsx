import { useRef } from 'react';

import HTMLFlipBook from "react-pageflip";
import './Libro.scss'
import IconArrow from '../IconArrow/IconArrow';

import data from '../../utils/Capitulo1.json'
import Pagina from './Pagina';
import PaginaPresentacion from './PaguinasExclusivas/PaginaPresentacion';
import PaginaIndice from './PaguinasExclusivas/PaginaIndice';

export default function Libro() {
  const book = useRef(null);

  const goToPreviousPage = () => {
    book.current.pageFlip().flipPrev();
  };

  const goToNextPage = () => {
    book.current.pageFlip().flipNext();
  };

  const capitulo1 = data.chapters[0]
  const paginas = data.chapters[0].pages

  return (
    <>
      <div className="container-libro">
        <HTMLFlipBook
          ref={book}
          width={550}
          height={730}
          size="fixed"
          minWidth={315}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1350}
          maxShadowOpacity={0.4}
          showCover={true}
          mobileScrollSupport={true}
          usePortrait={true}
          className="estiloslibro"
        >
          <div className="page cover">
            <img src='images/libro-portada-v1.png' className="imgProtada" />
          </div>
          <div className="page cover">
            <img src='images/libro-contra-tapa.png' className="imgProtada" />
          </div>
          <div className="page">
            <PaginaPresentacion />
          </div>
          <div className="page">
            <Pagina
              titulo=''
              num='3'
              parrafos={['Introduccion del libro']}
            />
          </div>
          <div className="page">
           <PaginaIndice />
          </div>
          <div className="page">
            <Pagina
              titulo=''
              num='5'
              parrafos={['']}
            />
          </div>

          <div className="page">
            <Pagina
              titulo=''
              num='6'
              parrafos={[capitulo1.chapterNumber, capitulo1.chapterTitle, capitulo1.chapterSubtitle]}
            />
          </div>

          {paginas.map((page, index) => (
            <div key={index + 4} className="page">
              <Pagina
                titulo={page.title}
                num={index + 4}
                parrafos={page.paragraphs}
              />
            </div>
          ))}

          <div className="page">
            <h1>FIN</h1>
          </div>
          <div className="page">
            <h1>FIN</h1>
          </div>

          <div className="page cover">
            <img src='images/libro-portada.png' className="imgProtada" />
          </div>
          <div className="page cover">
            <img src='images/libro-contra-tapa.png' className="imgProtada" />
          </div>
        </HTMLFlipBook>
      </div>
      <div className="button-container">
        <button onClick={goToPreviousPage}>
          <IconArrow typeLeft={true} />
        </button>
        <button onClick={goToNextPage}>
          <IconArrow typeLeft={false} />
        </button>
      </div>

    </>
  )
}

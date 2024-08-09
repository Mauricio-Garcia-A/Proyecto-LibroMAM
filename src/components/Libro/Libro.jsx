import { useRef } from 'react';

import HTMLFlipBook from "react-pageflip";
import './Libro.scss'


export default function Libro() {
  const book = useRef(null);

  const goToPreviousPage = () => {
    book.current.pageFlip().flipPrev();
  };

  const goToNextPage = () => {
    book.current.pageFlip().flipNext();
  };

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
          <img src='images/libro-portada.png' className="imgProtada" />
          </div>
          <div className="contraPortada">

          </div>
          <div className="page">
            <h1>Página 1</h1>
            <p>Contenido de la página 1</p>
          </div>
          <div className="page">
            <h1>Página 2</h1>
            <p>Contenido de la página 2</p>
          </div>
          <div className="page">
            <h1>Página 3</h1>
            <p>Contenido de la página 3</p>
          </div>
          <div className="page">
            <h1>Página 4</h1>
            <p>Contenido de la página 4</p>
          </div>
          <div className="page">
            <h1>Página 5</h1>
            <p>Contenido de la página 5</p>
          </div>
          <div className="page">
            <h1>Página 6</h1>
            <p>Contenido de la página 6</p>
          </div>
          <div className="page">
            <h1>Página 7</h1>
            <p>Contenido de la página 7</p>
          </div>
          <div className="page">
            <h1>Página 8</h1>
            <p>Contenido de la página 8</p>
          </div>
          <div className="page cover">
            <p>Contenido de la página 8</p>
          </div><div className="page">
            <p>tapa trasera
            </p>
          </div>
        </HTMLFlipBook>
      </div>
      <div className="button-container">
        <button onClick={goToPreviousPage}>Previous Page</button>
        <button onClick={goToNextPage}>Next Page</button>
      </div>

    </>
  )
}

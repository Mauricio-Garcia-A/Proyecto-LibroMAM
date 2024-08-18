import './PaginasExclusivas.scss'
import indice from '../../../utils/Indice.json'





export default function PaginaIndice() {
  return (
    <div className='estiloPagina'>
      <header>
        <h1>Índice</h1>
      </header>
      <article className='container-paginaIndice'>
        <h3>Índice</h3>
        <ul className="container-indice ">
          <li className="indice-item encabezado-indice">
            <b className="capitulo">Capítulo</b>
            <b className="paginacion">Página</b>
          </li>

          {indice.indice.map((item, index) => (
            <li key={index} className="indice-item">
              <span className="capitulo">
                <b>{`C${item.numero}: `}</b>{`${item.titulo}`}
              </span>
              <span className='puntos'></span>
              <span className="paginacion">{` ${item.pagina}`}</span>
            </li>
          ))}
        </ul>
      </article>
      <footer>
        <p>4</p>
      </footer>
    </div>
  )
}

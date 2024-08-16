/* eslint-disable react/prop-types */
import './Pagina.scss'

export default function Pagina(props) {


  return (
    <div className='estiloPagina'>
      <header>
        <h1>{props.titulo}</h1>
      </header>
      <article>
        {props.parrafos.map((paragraph, pIndex) => (
          <p key={pIndex}>{paragraph}</p>
        ))}
      </article>
      <footer>
        <p>{props.num}</p>
      </footer>
    </div>
  )
}

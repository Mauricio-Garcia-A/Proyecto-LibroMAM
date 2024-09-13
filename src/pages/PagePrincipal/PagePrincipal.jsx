import './PagePrincipal.scss'
import SeccionPresentacion from './Secciones/SeccionPresentacion';
import SeccionFooter from './Secciones/SeccionFooter';
import SeccionDiario from './Secciones/SeccionDiario';
export default function PagePrincipal() {
  return (
    <div className='conteiner-PagePrincipal'>
      <SeccionPresentacion />
      <SeccionDiario />
      <SeccionFooter />
    </div>
  )
}

import { useEffect, useState } from 'react';
import './App.scss'
import PagePresentacion from './pages/PagePresentacion/PagePresentacion';
import PagePrincipal from './pages/PagePrincipal/PagePrincipal';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Cambia el estado después de 5 segundos

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, [])

  return (
    <>
      {loading ? (
        <PagePresentacion />
      ) : (
        <PagePrincipal />
      )}
    </>
  )
}

export default App


import './App.css'
import { useState } from 'react'

import sobre from './assets/sobre.png'
import sello from './assets/sello.png'
import boton from './assets/boton.png'

import invitacion from './assets/invitacion.jpg'
import qr from './assets/qr.jpg'
import regalos from './assets/regalos.jpg'

function App() {

  const params =
  new URLSearchParams(window.location.search)

const invitados =
  params.get('invitados') || '2'

  const nombre =
  params.get('nombre') || ''

  const [abierto, setAbierto] = useState(false)

  return (

    <div className="container">

      <div className="scene">

        {/* SOBRE */}

        <img
          src={sobre}
          className={`sobre ${abierto ? 'abierto' : ''}`}
        />

        <div
  className={`nombreSobre ${abierto ? 'ocultoNombre' : ''}`}
>

  {nombre}

</div>

        {/* SELLO */}

        <img
          src={sello}
          className={`sello ${abierto ? 'oculto' : ''}`}
        />

        {/* BOTÓN */}

        <img
          src={boton}
          className={`boton ${abierto ? 'ocultoBoton' : ''}`}
          onClick={() => setAbierto(true)}
        />

        {/* CARTA */}

        <div
          className={`carta ${abierto ? 'mostrarCarta' : ''}`}
        >

          <div className="contenedorInvitacion">

  <img
    src={invitacion}
    className="imagenInvitacion"
  />

  <div className="numeroInvitados">
    {invitados}
  </div>

</div>

          <img
            src={qr}
            className="imagenSecundaria"
          />

          <img
            src={regalos}
            className="imagenSecundaria"
          />

        </div>

      </div>

    </div>

  )
}

export default App
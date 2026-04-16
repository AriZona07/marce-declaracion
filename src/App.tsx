// 1. Importamos el archivo CSS para que React sepa que existe
import './App.css';

function App() {
  return (
    <div className="general"> 
      <header className="header">
        <h1>Marce</h1>
        <h2>Esto es para ti, te amo 💕</h2>

        <div>
          <p>Hola mi niña, hice esta página para ti, para que veas cómo te quiero</p>
        </div>
      </header>

      <div className="div-izquierda">
        <p>
          Hice esta playlist para ti cariño,
          son canciones de amor de los artistas/grupos que te gustan ❤️: {" "}
          <a href='https://youtube.com/playlist?list=PLFtukRTdAHQI-NC5AYexu__7uE0dHke-t&si=aaimUHLAkgqZkcti'>
            Playlist
          </a>
        </p>
        <iframe className="youtube-video"
          src="https://www.youtube.com/embed/videoseries?si=W5_jpfaTOH1lY36Y&amp;list=PLFtukRTdAHQI-NC5AYexu__7uE0dHke-t" 
          title="Playlist para Marce" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen>
        </iframe>
      </div>

      
    </div>
  )
}

export default App


type Playlist = {
  name: string;
  content: string[];
};

const SideBar = ({ onNewPlaylist, playlists }: { onNewPlaylist: () => void, playlists: Playlist[] }) => {
  return (
    <aside style={{ width: '200px', background: '#222', color: '#fff', padding: '20px' }}>
      <button onClick={() => console.log('Ir a Home')}>Home</button>
      <button onClick={() => console.log('Ir a Relacionados')}>Relacionados</button>
      <button onClick={() => console.log('Ir a Recomendados')}>Recomendados</button>
      <button onClick={() => console.log('Ir a Más Escuchados')}>Más Escuchados</button>
      <button onClick={onNewPlaylist}>+ Nueva Playlist</button>

      <div>
        <h4>Playlists</h4>
        {playlists.length > 0 ? (
          playlists.map((playlist, index) => (
            <div key={index}>
              <strong>{playlist.name}</strong>
              <ul>
                {playlist.content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No hay playlists.</p>
        )}
      </div>
    </aside>
  );
};

export default SideBar;

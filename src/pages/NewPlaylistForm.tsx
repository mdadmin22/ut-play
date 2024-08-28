import { useState } from 'react';

// Simulación de datos para artistas, canciones y álbumes
const sampleData = {
  artists: ['Artista 1', 'Artista 2', 'Artista 3'],
  songs: ['Canción 1', 'Canción 2', 'Canción 3'],
  albums: ['Álbum 1', 'Álbum 2', 'Álbum 3']
};

const NewPlaylistForm = ({ onSave, onCancel }: { onSave: (playlist: { name: string, content: string[] }) => void, onCancel: () => void }) => {
  const [playlistName, setPlaylistName] = useState('');
  const [selectedContent, setSelectedContent] = useState<string[]>([]);

  const handleToggleContent = (item: string) => {
    if (selectedContent.includes(item)) {
      setSelectedContent(selectedContent.filter(i => i !== item));
    } else {
      setSelectedContent([...selectedContent, item]);
    }
  };

  const handleSubmit = () => {
    onSave({ name: playlistName, content: selectedContent });
  };

  return (
    <div>
      <h2>Crear Nueva Playlist</h2>
      <input
        type="text"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
        placeholder="Nombre de la playlist"
      />

      <div>
        <h3>Agregar Contenido</h3>

        <h4>Artistas</h4>
        {sampleData.artists.map(artist => (
          <div key={artist}>
            <input
              type="checkbox"
              checked={selectedContent.includes(artist)}
              onChange={() => handleToggleContent(artist)}
            />
            {artist}
          </div>
        ))}

        <h4>Canciones</h4>
        {sampleData.songs.map(song => (
          <div key={song}>
            <input
              type="checkbox"
              checked={selectedContent.includes(song)}
              onChange={() => handleToggleContent(song)}
            />
            {song}
          </div>
        ))}

        <h4>Álbumes</h4>
        {sampleData.albums.map(album => (
          <div key={album}>
            <input
              type="checkbox"
              checked={selectedContent.includes(album)}
              onChange={() => handleToggleContent(album)}
            />
            {album}
          </div>
        ))}
      </div>

      <button onClick={handleSubmit}>Guardar</button>
      <button onClick={onCancel}>Cancelar</button>
    </div>
  );
};

export default NewPlaylistForm;

import { useState } from 'react';
import LayOut from './components/LayOut';
import Home from './pages/Home';
import NewPlaylistForm from './pages/NewPlaylistForm';

type Playlist = {
  name: string;
  content: string[];
};

const App = () => {
  const [view, setView] = useState<'home' | 'newPlaylist'>('home');
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  const handleNewPlaylist = () => {
    setView('newPlaylist');
  };

  const handleSavePlaylist = (playlist: Playlist) => {
    setPlaylists([...playlists, playlist]);
    setView('home');
  };

  const handleCancel = () => {
    setView('home');
  };

  return (
    <LayOut onNewPlaylist={handleNewPlaylist} playlists={playlists}>
      {view === 'home' && <Home />}
      {view === 'newPlaylist' && (
        <NewPlaylistForm onSave={handleSavePlaylist} onCancel={handleCancel} />
      )}
    </LayOut>
  );
};

export default App;

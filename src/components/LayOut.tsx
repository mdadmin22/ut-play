import React from 'react';
import Header from './Header';
import SideBar from './Sidebar';
import PlaybackBar from './Playbackbar';

type Playlist = {
  name: string;
  content: string[];
};

type LayOutProps = {
  children: React.ReactNode;
  onNewPlaylist: () => void;
  playlists: Playlist[];
};

const LayOut = ({ children, onNewPlaylist, playlists }: LayOutProps) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <SideBar onNewPlaylist={onNewPlaylist} playlists={playlists} />
        <main style={{ flex: 1, padding: '20px' }}>
          {children}
        </main>
      </div>
      <PlaybackBar />
    </div>
  );
};

export default LayOut;

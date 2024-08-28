import React from 'react';
import { relatedArtists, recommendedAlbums, mostListenedTracks } from '../data';

const Home: React.FC = () => {
  return (
    <div>
      <h2>Related Artists</h2>
      <ul>
        {relatedArtists.map(artist => (
          <li key={artist.id}>
            <img src={artist.image} alt={artist.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            <p>{artist.name}</p>
          </li>
        ))}
      </ul>

      <h2>Recommended Albums</h2>
      <ul>
        {recommendedAlbums.map(album => (
          <li key={album.id}>{album.title} - {album.artist}</li>
        ))}
      </ul>

      <h2>Most Listened Tracks</h2>
      <ul>
        {mostListenedTracks.map(track => (
          <li key={track.id}>{track.title} - {track.artist}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;


const PlaybackBar = () => {
  return (
    <footer style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#333', color: '#fff', padding: '10px' }}>
      <button>⏮️</button>
      <button>⏯️</button>
      <button>⏭️</button>
    </footer>
  );
};

export default PlaybackBar;

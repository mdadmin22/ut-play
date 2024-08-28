
const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', background: '#333', color: '#fff' }}>
      <div>
        <img src="/logo.png" alt="Logo" style={{ height: '40px' }} />
      </div>
      <div>
        <input type="text" placeholder="Buscar..." style={{ padding: '5px' }} />
        <button>🔍</button>
      </div>
      <div>
        <img src="/profile-pic.png" alt="Perfil" style={{ height: '40px', borderRadius: '50%' }} />
        <button>Transmitir</button>
      </div>
    </header>
  );
};

export default Header;

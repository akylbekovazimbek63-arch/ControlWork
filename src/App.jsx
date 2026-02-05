import React, { useEffect } from 'react';
import useStore from './store';

function App() {
  const { characters, loading, fetchCharacters } = useStore();

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Rick and Morty Characters</h1>
      
      {loading && <h2>Загрузка...</h2>}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
        {characters.map((item) => (
          <div key={item.id} style={{ border: '1px solid black', padding: '10px', width: '150px' }}>
            <img src={item.image} alt={item.name} style={{ width: '100%' }} />
            <h4>{item.name}</h4>
            <p>{item.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
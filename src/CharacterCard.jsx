import React from 'react';

const CharacterCard = ({ character }) => {
  return (
    <div style={{
      border: '1px solid #555',
      borderRadius: '10px',
      padding: '10px',
      width: '200px',
      textAlign: 'center',
      backgroundColor: '#2c2c2c',
      color: 'white'
    }}>
      <img 
        src={character.image} 
        alt={character.name} 
        style={{ width: '100%', borderRadius: '5px' }} 
      />
      <h3>{character.name}</h3>
      <p>Гендер: {character.gender}</p>
      <p>Вид: {character.species}</p>
    </div>
  );
};

export default CharacterCard;
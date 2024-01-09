import React from 'react';

const CharacterForm = () => {
  return (
    <div className="character-form">
      <h1>Dungeons & Redux</h1>
      <div className='top-section'>
        <div className='character-name'>
          <p>Character Name:________________</p>
        </div>
        <div className='character-info'>
          <p>Class & Level: <span>________</span>Background: <span>________</span> Player Name: <span>________</span></p>
          <p>Race: <span>________</span>Alignment: <span>________</span> Experience Points: <span>________</span></p>
        </div>
      </div>
    </div>
  );
};

export default CharacterForm;

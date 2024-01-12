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
      <p>
        <div className='character-traits-container'>
          <div className='character-trait-box'>STRENGTH</div>
          <div className='character-trait-box'>DEXTERITY</div>
          <div className='character-trait-box'>CONSTITUTION</div>
          <div className='character-trait-box'>INTELLIGENCE</div>
          <div className='character-trait-box'>WISDOM</div>
          <div className='character-trait-box'>CHARISMA</div>
        </div>
      </p>
    </div>
  );
};

export default CharacterForm;

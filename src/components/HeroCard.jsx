import React from 'react';

const HeroCard = ({ hero, onClick, isSelected }) => {
  return (
    <div 
      className={`hero-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(hero)}
    >
      <div className="hero-name">{hero.name}</div>
    </div>
  );
};

export default HeroCard;
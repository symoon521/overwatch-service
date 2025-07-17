import React, { useState } from 'react';
import HeroCard from './HeroCard';
import heroesData from '../data/heroes.json';

const HeroSelector = ({ onHeroSelect }) => {
  const [selectedRole, setSelectedRole] = useState('tanks');
  const [selectedHero, setSelectedHero] = useState(null);

  const roles = {
    tanks: '탱커',
    dps: '딜러',
    supports: '힐러'
  };

  const handleHeroClick = (heroKey, heroData) => {
    const hero = { key: heroKey, ...heroData };
    setSelectedHero(hero);
    onHeroSelect(hero);
  };

  return (
    <div className="hero-selector">
      <div className="role-tabs">
        {Object.entries(roles).map(([roleKey, roleLabel]) => (
          <button
            key={roleKey}
            className={`role-tab ${selectedRole === roleKey ? 'active' : ''}`}
            onClick={() => setSelectedRole(roleKey)}
          >
            {roleLabel}
          </button>
        ))}
      </div>

      <div className="heroes-grid">
        {Object.entries(heroesData[selectedRole]).map(([heroKey, heroData]) => (
          <HeroCard
            key={heroKey}
            hero={{ key: heroKey, ...heroData }}
            onClick={() => handleHeroClick(heroKey, heroData)}
            isSelected={selectedHero?.key === heroKey}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSelector;
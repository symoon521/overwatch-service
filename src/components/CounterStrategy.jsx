import React from 'react';

const CounterStrategy = ({ hero }) => {
  if (!hero || !hero.countered_by || hero.countered_by.length === 0) return null;

  return (
    <div className="counter-strategy">
      <h3 className="section-title">{hero.name} 대처법</h3>
      
      <div className="strategy-list">
        {hero.countered_by.map((strategy, index) => (
          <div key={index} className="strategy-item">
            <div className="strategy-icon">🛡️</div>
            <div className="strategy-content">
              <strong>{strategy.split(':')[0]}:</strong>
              <span>{strategy.split(':')[1]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterStrategy;
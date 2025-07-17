import React from 'react';

const CounterInfo = ({ hero }) => {
  if (!hero) return null;

  const { counters } = hero;

  return (
    <div className="counter-info">
      <h3 className="section-title">{hero.name}에게 유리한 영웅들</h3>
      
      <div className="counter-sections">
        <div className="counter-section">
          <h4 className="counter-role-title">탱커</h4>
          <div className="counter-list">
            {counters.tanks.map((tank, index) => (
              <span key={index} className="counter-hero">{tank}</span>
            ))}
          </div>
        </div>

        <div className="counter-section">
          <h4 className="counter-role-title">딜러</h4>
          <div className="counter-list">
            {counters.dps.map((dps, index) => (
              <span key={index} className="counter-hero">{dps}</span>
            ))}
          </div>
        </div>

        <div className="counter-section">
          <h4 className="counter-role-title">힐러</h4>
          <div className="counter-list">
            {counters.supports.length > 0 ? (
              counters.supports.map((support, index) => (
                <span key={index} className="counter-hero">{support}</span>
              ))
            ) : (
              <span className="no-counters">유리한 힐러 없음</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterInfo;
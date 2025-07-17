import React from 'react';

const Tips = ({ hero }) => {
  if (!hero || !hero.tips || hero.tips.length === 0) return null;

  return (
    <div className="tips">
      <h3 className="section-title">
        <span className="section-icon">💡</span>
        {hero.name} 플레이 팁
      </h3>
      
      <div className="tips-grid">
        {hero.tips.map((tip, index) => {
          const [title, description] = tip.split(':');
          return (
            <div key={index} className="tip-card">
              <div className="tip-header">
                <div className="tip-number">{index + 1}</div>
                <h4 className="tip-title">{title}</h4>
              </div>
              <div className="tip-description">
                {description}
              </div>
              <div className="tip-footer">
                <div className="tip-tag">팁</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tips;
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import heroesData from '../data/heroes.json';
import CounterInfo from '../components/CounterInfo';
import Tips from '../components/Tips';
import CounterStrategy from '../components/CounterStrategy';
import PixelBackground from '../components/PixelBackground';

const HeroDetailPage = () => {
  const { heroKey } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('counters');

  const findHero = (key) => {
    for (const [roleKey, heroes] of Object.entries(heroesData)) {
      if (heroes[key]) {
        return { key, ...heroes[key], role: roleKey };
      }
    }
    return null;
  };

  const hero = findHero(heroKey);

  if (!hero) {
    return (
      <div className="app">
        <PixelBackground />
        <div className="hero-detail-error">
          <div className="error-content">
            <div className="error-icon">⚠️</div>
            <h1>영웅을 찾을 수 없습니다</h1>
            <p>요청하신 영웅 정보를 찾을 수 없습니다.</p>
            <button onClick={() => navigate('/')} className="error-back-button">
              메인으로 돌아가기
            </button>
          </div>
        </div>
      </div>
    );
  }

  const getRoleText = (role) => {
    const roleMap = {
      tanks: '탱커',
      dps: '딜러',
      supports: '힐러'
    };
    return roleMap[role] || role;
  };

  const getRoleColor = (role) => {
    const colorMap = {
      tanks: '#ff6b9d',
      dps: '#40e0ff', 
      supports: '#00ff7f'
    };
    return colorMap[role] || '#40e0ff';
  };

  const tabs = [
    { id: 'counters', label: '상성 정보', icon: '⚔️' },
    { id: 'tips', label: '플레이 팁', icon: '💡' },
    { id: 'strategy', label: '대처법', icon: '🛡️' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'counters':
        return <CounterInfo hero={hero} />;
      case 'tips':
        return <Tips hero={hero} />;
      case 'strategy':
        return <CounterStrategy hero={hero} />;
      default:
        return <CounterInfo hero={hero} />;
    }
  };

  return (
    <div className="app">
      <PixelBackground />
      
      <div className="hero-detail-container">
        {/* 헤더 섹션 */}
        <header className="hero-header">
          <div className="hero-header-content">
            <button onClick={() => navigate('/')} className="nav-back-button">
              <span className="back-icon">←</span>
              <span>메인으로</span>
            </button>
            
            <div className="hero-info-header">
              <div 
                className="hero-role-tag" 
                style={{ background: getRoleColor(hero.role) }}
              >
                {getRoleText(hero.role)}
              </div>
              <h1 className="hero-main-title">{hero.name}</h1>
            </div>
          </div>
        </header>

        {/* 탭 네비게이션 */}
        <nav className="hero-tabs">
          <div className="tabs-container">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* 콘텐츠 영역 */}
        <main className="hero-content">
          <div className="content-wrapper">
            {renderTabContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HeroDetailPage;
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeroSelector from '../components/HeroSelector'
import GameCodes from '../components/GameCodes'
import OverwatchTips from '../components/OverwatchTips'

function HomePage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('heroes')

  const handleHeroSelect = (hero) => {
    // 영웅 선택 시 개별 페이지로 이동
    navigate(`/hero/${hero.key}`)
  }

  const tabs = [
    { id: 'heroes', label: '영웅 정보', icon: '⚔️' },
    { id: 'tips', label: '플레이 팁', icon: '🎯' },
    { id: 'codes', label: '게임 코드', icon: '🎮' }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'heroes':
        return <HeroSelector onHeroSelect={handleHeroSelect} />
      case 'tips':
        return <OverwatchTips />
      case 'codes':
        return <GameCodes />
      default:
        return <HeroSelector onHeroSelect={handleHeroSelect} />
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Overwatch Service</h1>
        <p className="app-subtitle">영웅별 상성 정보 & 플레이 가이드</p>
      </header>

      <main className="app-main">
        {/* 탭 네비게이션 */}
        <nav className="home-tabs">
          <div className="home-tabs-container">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`home-tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* 콘텐츠 영역 */}
        <section className="home-content">
          <div className="home-content-wrapper">
            {renderContent()}
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage